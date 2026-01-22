import React from 'react';
import { COUPLE, WEDDING_DATE, CONTENT } from '../constants';

interface IntroScreenProps {
  onOpen: () => void;
  isVisible: boolean;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onOpen, isVisible }) => {
  if (!isVisible) return null;

  const dateString = WEDDING_DATE.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-50 text-center px-6 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ backgroundImage: 'radial-gradient(circle, #F5F5DC 0%, #E6DCC3 100%)' }}
    >
      <div className="border border-wedding-gold/40 p-8 md:p-12 relative max-w-lg w-full bg-white/40 backdrop-blur-sm shadow-xl animate-fade-in">
        
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-wedding-gold"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-wedding-gold"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-wedding-gold"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-wedding-gold"></div>

        <p className="font-sans uppercase tracking-[0.2em] text-sm md:text-base text-stone-500 mb-6">
          {CONTENT.intro.subtitle}
        </p>
        
        <h1 className="font-script text-6xl md:text-8xl text-wedding-gold mb-6 leading-tight">
          {COUPLE.names.split(' & ')[0]} <br />
          <span className="text-4xl md:text-5xl text-stone-600">&</span> <br />
          {COUPLE.names.split(' & ')[1]}
        </h1>

        <div className="w-16 h-[1px] bg-wedding-gold mx-auto my-6"></div>

        <p className="font-serif italic text-lg text-stone-700 mb-10">
          {dateString}
        </p>

        <button
          onClick={onOpen}
          className="group relative px-8 py-3 bg-transparent border border-wedding-gold text-stone-800 font-sans uppercase tracking-widest text-xs font-bold transition-all hover:bg-wedding-gold hover:text-white"
        >
          <span className="relative z-10">{CONTENT.intro.button}</span>
        </button>
      </div>
    </div>
  );
};

export default IntroScreen;