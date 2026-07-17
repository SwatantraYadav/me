"use client";

import { useState, useEffect } from "react";
import { incrementLike, getLikes } from "../actions";

export function BlogActionButtons({ title, href }: { title: string, href?: string }) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Fetch initial likes
    getLikes(title).then(setLikes);
  }, [title]);

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    const newLikes = await incrementLike(title);
    setLikes(newLikes);
  };

  const handleShare = async () => {
    if (typeof window === 'undefined') return;
    const url = href 
      ? new URL(href, window.location.origin).toString() 
      : window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: title,
          url: url
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <button 
        onClick={handleLike}
        className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors py-1 cursor-pointer"
        aria-label="Like"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={likes > 0 ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
        {likes > 0 && <span>{likes}</span>}
        <span className="sr-only">Like</span>
      </button>
      <button 
        onClick={(e) => { e.preventDefault(); handleShare(); }}
        className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground transition-colors py-1 cursor-pointer"
        aria-label="Share"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
          <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
        </svg>
        Share
      </button>
    </div>
  );
}