export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

export interface SectionProps {
  isVisible: boolean;
}