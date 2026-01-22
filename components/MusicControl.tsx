import React, { useEffect, useRef, useState } from 'react';
import { MUSIC_URL } from '../constants';

interface MusicControlProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

const MusicControl: React.FC<MusicControlProps> = ({ isPlaying, togglePlay }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Initialize audio object once
  useEffect(() => {
    audioRef.current = new Audio(MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle play/pause based on prop
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        // Promise handling to avoid race conditions with quick toggles
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.warn("Auto-play prevented:", error);
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <button
      onClick={togglePlay}
      className="fixed bottom-6 right-6 z-50 p-3 bg-wedding-gold/90 text-white rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 hover:scale-110 focus:outline-none backdrop-blur-sm"
      aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
    >
      {isPlaying ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="1" y1="1" x2="23" y2="23"></line>
          <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4L9 9"></path>
          <path d="M17 16.95A7 7 0 0 1 5 12v-2"></path>
        </svg>
      )}
    </button>
  );
};

export default MusicControl;