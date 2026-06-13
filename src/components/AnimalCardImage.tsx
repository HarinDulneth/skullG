'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Props {
  wikiUrl: string;
  name: string;
}

export default function AnimalCardImage({ wikiUrl, name }: Props) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let isMounted = true;
    const fetchImage = async () => {
      try {
        const title = wikiUrl.split('/').pop();
        if (!title) return;
        
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=400&origin=*`
        );
        const data = await response.json();
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        
        if (isMounted && pages[pageId]?.thumbnail?.source) {
          setImageUrl(pages[pageId].thumbnail.source);
        }
      } catch (err) {
        console.error('Error fetching wiki image:', err);
      }
    };
    
    fetchImage();
    return () => { isMounted = false; };
  }, [isVisible, wikiUrl]);

  return (
    <div ref={containerRef} className="w-full h-32 mb-2 rounded-lg overflow-hidden flex items-center justify-center bg-[var(--color-secondary)]/10">
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.15]"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-[var(--color-primary)]/20">
          {isVisible && <div className="w-6 h-6 border-2 border-[var(--color-primary)]/30 border-t-transparent rounded-full animate-spin" />}
        </div>
      )}
    </div>
  );
}
