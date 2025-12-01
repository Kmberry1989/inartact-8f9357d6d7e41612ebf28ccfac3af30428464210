'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Artist } from '@/lib/types';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Create a custom icon generator
const createCustomIcon = (imageUrl: string | undefined) => {
    // Default fallback image if no portrait/artwork image is available
    const url = imageUrl || '/placeholder.jpg';

    return L.divIcon({
        className: 'custom-map-icon',
        html: `<div style="
            background-image: url('${url}');
            background-size: cover;
            background-position: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 2px solid white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.3);
        "></div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, -20]
    });
};

export default function LeafletMap({ artists }: { artists: Artist[] }) {
    // Ensure we only run on client to avoid window is not defined errors
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="h-full w-full bg-muted animate-pulse" />;

    return (
        <MapContainer
            center={[39.7684, -86.1581] as [number, number]}
            zoom={7}
            style={{ height: '100%', width: '100%' }}
            className="z-0"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {artists.map((artist) => {
                // Ensure we have coordinates before rendering marker
                if (!artist.artwork.latitude || !artist.artwork.longitude) return null;

                // Use portrait if available, otherwise artwork
                const iconImage = artist.artist.portraitUrl || artist.artwork.imageUrl;

                return (
                    <Marker
                        key={artist.id}
                        position={[artist.artwork.latitude, artist.artwork.longitude]}
                        icon={createCustomIcon(iconImage)}
                    >
                        <Popup>
                            <div className="min-w-[200px]">
                                <h3 className="font-bold text-lg">{artist.artist.name}</h3>
                                <p className="text-sm font-medium mb-1">{artist.artwork.title}</p>
                                <p className="text-xs text-muted-foreground mb-2">
                                    {artist.artwork.location}
                                </p>
                                <Link
                                    href={`/artists/${artist.id}`}
                                    className="text-primary hover:underline text-sm"
                                >
                                    View Profile
                                </Link>
                            </div>
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
}