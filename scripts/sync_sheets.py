import sys
import csv
import json
import urllib.request
import os

# Centralized Cause Constants (to match the TS file structure)
# We won't use these directly in the JSON generation but we'll include them in the file header
CONSTANTS_BLOCK = """import { Artist } from './types';

// Centralized Cause Constants to ensure consistency across filters
const CAUSES = {
  RACIAL_JUSTICE: "Racial Justice",
  CIVIL_RIGHTS: "Civil Rights",
  ENVIRONMENT: "Environmental Justice",
  WOMENS_RIGHTS: "Women's Suffrage",
  IMMIGRATION: "Immigration",
  LABOR: "Labor Rights",
  COMMUNITY: "Community Building",
  MENTAL_HEALTH: "Mental Health",
  PUBLIC_ART: "Public Space",
  POLITICAL: "Political Change/Satire"
} as const;
"""

def fetch_csv(url):
    print(f"Fetching data from: {url}")
    try:
        with urllib.request.urlopen(url) as response:
            return response.read().decode('utf-8')
    except Exception as e:
        print(f"Error fetching CSV: {e}")
        sys.exit(1)

def read_local_csv(file_path):
    print(f"Reading data from: {file_path}")
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"Error reading local CSV file: {e}")
        sys.exit(1)

def parse_csv(csv_text):
    # Use csv.DictReader to parse the CSV content
    lines = csv_text.splitlines()
    reader = csv.DictReader(lines)
    
    artists = []
    
    for row in reader:
        # Skip empty rows
        if not row.get('id'):
            continue
            
        # Helper to handle comma-separated lists
        def split_list(val):
            if not val:
                return None
            return [x.strip() for x in val.split(',')]

        # Helper to handle booleans
        def parse_bool(val):
            return str(val).upper() == 'TRUE'

        # Helper to handle floats
        def parse_float(val):
            if not val:
                return None
            try:
                return float(val)
            except ValueError:
                return None

        # Gather all searchable text
        name = row.get('artist_name', '')
        title = row.get('artwork_title', '')
        bio = row.get('bio', '')
        desc = row.get('description', '')
        location = row.get('location', '')
        cause = row.get('cause', '')
        categories = row.get('categories', '') # Raw string for search
        
        # Create a comprehensive search string (lowercase for easier searching later if needed, 
        # though we usually lower-case in the frontend)
        search_index = f"{name} {title} {bio} {desc} {location} {cause} {categories}".strip()

        artist_entry = {
            "id": row.get('id'),
            "artist": {
                "name": name,
                "isAlive": parse_bool(row.get('is_alive')),
                "bio": bio,
                "website": row.get('website') or None,
                "social_media": split_list(row.get('social_media'))
            },
            "artwork": {
                "title": title,
                "description": desc,
                "medium": row.get('medium', ''),
                "date": row.get('date', ''),
                "location": location,
                "cause": cause,
                "imageUrl": row.get('image_url', ''),
                "latitude": parse_float(row.get('latitude')),
                "longitude": parse_float(row.get('longitude')),
                "categories": split_list(row.get('categories')),
                "searchQuery": search_index 
            }
        }
        
        def clean_dict(d):
            return {k: v for k, v in d.items() if v is not None}
            
        artist_entry["artist"] = clean_dict(artist_entry["artist"])
        artist_entry["artwork"] = clean_dict(artist_entry["artwork"])
        
        artists.append(artist_entry)
        
    return artists

def generate_ts_file(artists):
    # Convert python dict to JSON string
    json_data = json.dumps(artists, indent=2)
    
    # Create the full file content
    file_content = f"{CONSTANTS_BLOCK}\nexport const artists: Artist[] = {json_data};\n"
    
    return file_content

def main():
    if len(sys.argv) < 2:
        # Check for env var
        path_or_url = os.environ.get('GOOGLE_SHEET_URL')
        if not path_or_url:
            print("Usage: python scripts/sync_sheets.py <google_sheet_csv_url_or_local_path>")
            print("Or set GOOGLE_SHEET_URL environment variable.")
            sys.exit(1)
    else:
        path_or_url = sys.argv[1]

    if path_or_url.startswith('http'):
        csv_text = fetch_csv(path_or_url)
    else:
        csv_text = read_local_csv(path_or_url)

    artists = parse_csv(csv_text)
    
    ts_content = generate_ts_file(artists)
    
    # Path to output file
    output_path = os.path.join(os.getcwd(), 'src', 'lib', 'artists-data.ts')
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(ts_content)
        
    print(f"Successfully updated {output_path} with {len(artists)} artists.")

if __name__ == "__main__":
    main()
