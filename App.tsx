import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import FloatingParticles from './components/FloatingParticles';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import MusicControl from './components/MusicControl';
import { COUPLE, WEDDING_DATE, CONTENT } from './constants';

const App: React.FC = () => {
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpen = () => {
    setIsIntroVisible(false);
    setIsPlaying(true); // Attempt to start music on user interaction
    
    // Slight delay to unmount intro or allow transition to finish before fully showing content state if needed
    // But CSS transitions handle the visual fade. We wait to allow DOM to be ready for scrolling if needed.
    setTimeout(() => {
      setContentVisible(true);
    }, 1000);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  const formattedDate = WEDDING_DATE.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const formattedTime = WEDDING_DATE.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
  
  // Extract specific date parts for the calendar view
  // Changed month from 'short' to 'long' to show full name (e.g. December)
  const eventMonth = WEDDING_DATE.toLocaleDateString('en-US', { month: 'long' });
  const eventDay = WEDDING_DATE.toLocaleDateString('en-US', { day: 'numeric' });
  const eventYear = WEDDING_DATE.toLocaleDateString('en-US', { year: 'numeric' });

  return (
    <div className="relative min-h-screen font-sans selection:bg-wedding-gold selection:text-white">
      {/* Background decoration */}
      <FloatingParticles />
      
      {/* Intro Overlay */}
      {isIntroVisible && <IntroScreen onOpen={handleOpen} isVisible={isIntroVisible} />}
      
      {/* Main Content - only visible after interaction to save resources/DOM weight initially if desired, 
          but here we render it hidden or just below to allow smooth transition */}
      <main className={`transition-opacity duration-1000 ${!isIntroVisible ? 'opacity-100' : 'opacity-0'} ${isIntroVisible ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
        
        {/* Header / Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center p-6 pt-20 relative bg-gradient-to-b from-stone-50 to-white">
          <div className="max-w-2xl mx-auto z-10 animate-slide-up">
            <p className="text-stone-500 uppercase tracking-widest text-sm mb-4">{CONTENT.hero.label}</p>
            <h1 className="font-script text-7xl md:text-9xl text-wedding-gold mb-6 drop-shadow-sm">{COUPLE.names}</h1>
            <p className="font-serif italic text-xl md:text-2xl text-stone-700 mb-8 max-w-lg mx-auto leading-relaxed whitespace-pre-wrap">
              {COUPLE.message}
            </p>
            <div className="w-24 h-1 bg-wedding-gold mx-auto mb-10"></div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-20 bg-wedding-beige/30 text-center px-4">
          <div className="max-w-4xl mx-auto border-y border-wedding-gold/20 py-12">
            <h2 className="font-script text-5xl text-wedding-gold mb-8">{CONTENT.saveTheDate.title}</h2>
            <div className="grid md:grid-cols-3 gap-8 items-center justify-center font-serif text-stone-800">
              <div className="space-y-2">
                <span className="block text-3xl font-bold">{eventMonth}</span>
                <span className="block text-5xl text-wedding-gold">{eventDay}</span>
                <span className="block text-xl">{eventYear}</span>
              </div>
              <div className="h-16 w-[1px] bg-stone-300 mx-auto hidden md:block"></div>
              <div className="space-y-4">
                <p className="text-xl font-bold uppercase tracking-wide">{CONTENT.saveTheDate.ceremonyTitle}</p>
                <p className="text-lg">{formattedTime}</p>
                <p className="text-lg font-bold">{COUPLE.location}</p>
                <a 
                  href={COUPLE.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-block mt-4 px-6 py-2 border border-stone-400 text-stone-600 text-sm hover:bg-stone-800 hover:text-white transition-colors"
                >
                  {CONTENT.saveTheDate.viewMap}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown */}
        <section className="py-20 bg-white text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-stone-600 mb-10 uppercase tracking-widest">{CONTENT.countdown.title}</h2>
          <Countdown />
        </section>

        {/* Gallery */}
        <Gallery />

        {/* RSVP Section */}
        <section className="py-24 bg-stone-900 text-stone-100 text-center px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-script text-6xl text-wedding-gold mb-6">{CONTENT.rsvp.title}</h2>
            <p className="font-sans text-lg text-stone-300 mb-10 leading-relaxed whitespace-pre-wrap">
              {CONTENT.rsvp.message}
            </p>
            <a 
              href={CONTENT.rsvp.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-wedding-gold text-stone-900 font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-wedding-gold/50 rounded-sm"
            >
              {CONTENT.rsvp.button}
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-stone-950 text-stone-500 text-center text-sm font-sans">
          <p className="mb-2">With Love, {COUPLE.names}</p>
          <p>© {new Date().getFullYear()} {CONTENT.footer.copyright}</p>
        </footer>
      </main>

      {/* Floating Action Button for Music */}
      {!isIntroVisible && (
        <MusicControl isPlaying={isPlaying} togglePlay={toggleMusic} />
      )}
    </div>
  );
};

export default App;