'use client';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useEffect, useState, useMemo, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArtistGallery } from '@/components/artist-gallery';
import { HeroParallax } from '@/components/hero-parallax';
import { artists } from '@/lib/artists-data';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CurrentEventsWidget } from '@/components/current-events-widget';
import { Search, SlidersHorizontal, ArrowDownAZ, Clock, X, RotateCcw, User, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDebounce } from '@/hooks/use-debounce';
import { CAUSE_CATEGORIES, getCategoryForCause } from '@/lib/cause-categories';


type Suggestion = {
  id: string;
  text: string;
  type: 'artist' | 'artwork';
  artistId: string;
};

export default function Home() {
  const [searchInput, setSearchInput] = useState('');
  const debouncedSearchInput = useDebounce(searchInput, 300);
  const [appliedSearch, setAppliedSearch] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filters & Sort
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string>('newest');

  const [visibleCount, setVisibleCount] = useState(12);
  const [isClient, setIsClient] = useState(false);
  const [hideNav, setHideNav] = useState(false);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const directorySectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (directorySectionRef.current) {
      const directoryTop = directorySectionRef.current.offsetTop;
      if (latest > directoryTop - 60) setHideNav(true);
      else setHideNav(false);
    }
  });

  useEffect(() => {
    setIsClient(true);
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setVisibleCount(12);
  }, [appliedSearch, selectedCategory, sortOption, selectedLetter]);

  // Derived Data
  const alphabet = useMemo(() => '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), []);
  const categoryList = useMemo(() => Object.keys(CAUSE_CATEGORIES).sort(), []);

  const suggestions: Suggestion[] = useMemo(() => {
    if (!debouncedSearchInput || debouncedSearchInput.length < 2) return [];
    const query = debouncedSearchInput.toLowerCase();
    const matches: Suggestion[] = [];

    artists.forEach(item => {
      if (item.artist.name.toLowerCase().includes(query)) {
        matches.push({ id: `artist-${item.id}`, text: item.artist.name, type: 'artist', artistId: item.id });
      }
      if (item.artwork.title.toLowerCase().includes(query)) {
        matches.push({ id: `work-${item.id}`, text: item.artwork.title, type: 'artwork', artistId: item.id });
      }
    });
    return matches.slice(0, 6);
  }, [debouncedSearchInput]);

  // Main Filter Logic
  const filteredAndSortedArtists = useMemo(() => {
    let result = [...artists];

    if (appliedSearch) {
      const query = appliedSearch.toLowerCase();
      result = result.filter(item =>
        item.artist.name.toLowerCase().includes(query) ||
        item.artwork.title.toLowerCase().includes(query) ||
        item.artwork.cause?.toLowerCase().includes(query)
      );
    }

    // Filter by Category using the helper
    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter(item => {
        const category = getCategoryForCause(item.artwork.cause || '');
        return category === selectedCategory;
      });
    }

    if (selectedLetter) {
      if (selectedLetter === '#') result = result.filter(item => /^\d/.test(item.artist.name));
      else result = result.filter(item => item.artist.name.toUpperCase().startsWith(selectedLetter));
    }

    result.sort((a, b) => {
      switch (sortOption) {
        case 'name_asc': return a.artist.name.localeCompare(b.artist.name);
        case 'name_desc': return b.artist.name.localeCompare(a.artist.name);
        case 'oldest': return Number(a.id) - Number(b.id);
        default: return Number(b.id) - Number(a.id); // newest
      }
    });

    return result;
  }, [appliedSearch, selectedCategory, sortOption, selectedLetter]);

  const visibleArtists = filteredAndSortedArtists.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAndSortedArtists.length;

  const handleSearchSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    setAppliedSearch(searchInput);
    setShowSuggestions(false);
    document.getElementById('directory-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSearchInput('');
    setAppliedSearch('');
    setSelectedCategory('all');
    setSelectedLetter(null);
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col font-sans">
      <Header hideNav={hideNav} />
      <main className="flex-1">
        <HeroParallax />
        <CurrentEventsWidget />

        <section id="directory-section" ref={directorySectionRef} className="py-12 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4">
            {/* Controls Bar */}
            <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm pt-4 pb-2 -mx-4 px-4 border-b border-border shadow-sm">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-4">
                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto items-center relative" ref={searchContainerRef}>
                  <h2 className="text-2xl font-bold mr-4 hidden md:block">Directory</h2>

                  {/* Search */}
                  <div className="relative w-full md:w-[300px]">
                    <form onSubmit={handleSearchSubmit} className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        className="pl-9"
                        placeholder="Search artists..."
                        value={searchInput}
                        onChange={(e) => { setSearchInput(e.target.value); setShowSuggestions(true); }}
                        onFocus={() => setShowSuggestions(true)}
                      />
                    </form>
                    {showSuggestions && suggestions.length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-background rounded-md shadow-xl border z-50">
                        {suggestions.map((s) => (
                          <div key={s.id} onClick={() => { setSearchInput(s.text); setAppliedSearch(s.text); setShowSuggestions(false); }} className="px-4 py-2 hover:bg-muted cursor-pointer flex items-center text-sm">
                            {s.type === 'artist' ? <User className="h-3 w-3 mr-2 opacity-50" /> : <Palette className="h-3 w-3 mr-2 opacity-50" />}
                            {s.text}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Category Filter */}
                  <div className="flex gap-2 w-full md:w-auto">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-full md:w-[220px]">
                        <SlidersHorizontal className="w-4 h-4 mr-2 text-muted-foreground" />
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categoryList.map(cat => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select value={sortOption} onValueChange={setSortOption}>
                      <SelectTrigger className="w-full md:w-[150px]">
                        <ArrowDownAZ className="w-4 h-4 mr-2 text-muted-foreground" />
                        <SelectValue placeholder="Sort" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="oldest">Oldest</SelectItem>
                        <SelectItem value="name_asc">A-Z</SelectItem>
                        <SelectItem value="name_desc">Z-A</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{filteredAndSortedArtists.length} results</span>
                  {(appliedSearch || searchInput || selectedCategory !== 'all' || selectedLetter) && (
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 px-2 hover:text-destructive">
                      <X className="w-3 h-3 mr-1" /> Clear
                    </Button>
                  )}
                </div>
              </div>

              {/* Alphabet */}
              <div className="w-full overflow-x-auto no-scrollbar pb-2">
                <div className="flex space-x-1 min-w-max px-1">
                  <Button variant={selectedLetter === null ? "default" : "ghost"} size="sm" onClick={() => setSelectedLetter(null)} className="rounded-full text-xs h-7">All</Button>
                  {alphabet.map((letter) => (
                    <Button key={letter} variant={selectedLetter === letter ? "default" : "ghost"} size="sm" onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)} className="rounded-full text-xs h-7 w-7 p-0">{letter}</Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="min-h-[400px] pt-6">
              {filteredAndSortedArtists.length > 0 ? (
                <ArtistGallery artists={visibleArtists} />
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed rounded-xl border-muted">
                  <RotateCcw className="h-8 w-8 text-muted-foreground mb-2" />
                  <h3 className="text-lg font-semibold">No artists found</h3>
                  <Button onClick={clearFilters} variant="link">Reset Filters</Button>
                </div>
              )}
            </div>

            {hasMore && (
              <div className="mt-12 text-center">
                <Button size="lg" variant="outline" onClick={() => setVisibleCount(prev => prev + 12)}>Load More</Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}