// Type definitions for our Contentful-like data structures

export interface Bio {
  title: string;
  content: string;
  lastUpdated: string;
}

export interface GalleryImage {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
  createdAt: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  releaseYear: number;
  albumName?: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  amazonMusicUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLinks {
  instagram?: string;
  spotify?: string;
  amazon?: string;
  youtube?: string;
}
