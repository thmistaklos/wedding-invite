import React from 'react';
import { GALLERY_IMAGES, CONTENT } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-script text-5xl text-wedding-gold mb-12 animate-slide-up">
          {CONTENT.gallery.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img) => (
            <div 
              key={img.id} 
              className="relative overflow-hidden group aspect-[3/4] md:aspect-square bg-stone-100"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;