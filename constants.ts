import { GalleryImage } from './types';

// Target Date: December 31, 2026 16:00:00
export const WEDDING_DATE = new Date('2026-02-13T13:30:00');

export const COUPLE = {
  names: "Noudjoud & Saleh",
  // Added more Arabic text here to demonstrate the multi-line capability
  message: "We invite you to share in our joy as we unite in marriage.\n\nوَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةًً",
  location: "Salle Des Fêtes Lailati, Ain Defla",
  googleMapsLink: "https://maps.app.goo.gl/vafStAyBkLb4MS6o6"
};

export const CONTENT = {
  intro: {
    subtitle: "The Wedding Celebration of",
    button: "Open Invitation | دعوة"
  },
  hero: {
    label: "We're Getting Married",
    // REPLACE THIS URL with your uploaded image URL
    image: "https://cdn.pixabay.com/photo/2016/05/27/22/25/roses-1420719_1280.jpg"
  },
  saveTheDate: {
    title: "Save the Date",
    ceremonyTitle: "The Ceremony | الحفل",
    viewMap: "View Map | الموقع"
  },
  countdown: {
    title: "Counting Down Forever"
  },
  gallery: {
    title: "Our Moments"
  },
  notes: {
    title: "Important Notes\nمن فظلكم",
    items: [
      "The hall management does not accept the presence of children.\n\nإدارة القاعة لا تسمح بحضور الأطفال."
    ]
  },
  footer: {
     copyright: "designed by mystery."
  }
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: "https://cdn.pixabay.com/photo/2016/03/14/14/21/bride-1255520_1280.jpg", alt: "Couple walking on beach" },
  { id: 2, url: "https://cdn.pixabay.com/photo/2016/11/18/18/32/wedding-1836315_1280.jpg" },
  { id: 3, url: "https://cdn.pixabay.com/photo/2018/04/16/08/36/bridal-bouquet-3323903_1280.jpg", alt: "Engagement ring" }
];

// A gentle, royalty-free classical piece or piano placeholder
export const MUSIC_URL = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=piano-moment-111578.mp3";