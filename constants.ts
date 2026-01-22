import { GalleryImage } from './types';

// Target Date: December 31, 2026 16:00:00
export const WEDDING_DATE = new Date('2026-12-31T16:00:00');

export const COUPLE = {
  names: "Mouna & Sid Ahmed",
  // Added more Arabic text here to demonstrate the multi-line capability
  message: "We invite you to share in our joy as we unite in marriage.\n\nنتشرف بدعوتكم لحضور حفل زفافنا ومشاركتنا فرحتنا. وجودكم يزيدنا بهجة وسروراً",
  location: "Salle de manal Arib, Ain Defla",
  googleMapsLink: "https://maps.app.goo.gl/FJVYtpSdWmZAnina7"
};

export const CONTENT = {
  intro: {
    subtitle: "The Wedding Celebration of",
    button: "Open Invitation | دعوة"
  },
  hero: {
    label: "We're Getting Married | زواجنا"
  },
  saveTheDate: {
    title: "Save the Date | احفظ التاريخ",
    ceremonyTitle: "The Ceremony | الحفل",
    viewMap: "View Map | الموقع"
  },
  countdown: {
    title: "Counting Down Forever | العد التنازلي"
  },
  gallery: {
    title: "Our Moments | لحظاتنا"
  },
  rsvp: {
    title: "Are you attending? | هل ستحضر؟",
    message: "Please let us know if you will be joining our celebration by December 1st, 2026.\n\nيرجى تأكيد الحضور قبل الأول من ديسمبر",
    button: "RSVP Now | تأكيد الحضور",
    link: "https://docs.google.com/forms/"
  },
  footer: {
     copyright: "designed by SidAhmed."
  }
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: "https://cdn.pixabay.com/photo/2016/11/18/22/21/bride-1837148_1280.jpg", alt: "Couple walking on beach" },
  { id: 2, url: "https://cdn.pixabay.com/photo/2014/09/13/04/59/couple-443600_1280.jpg", alt: "Holding hands" },
  { id: 3, url: "https://cdn.pixabay.com/photo/2018/04/16/08/36/bridal-bouquet-3323903_1280.jpg", alt: "Engagement ring" }
];

// A gentle, royalty-free classical piece or piano placeholder
export const MUSIC_URL = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=piano-moment-111578.mp3";