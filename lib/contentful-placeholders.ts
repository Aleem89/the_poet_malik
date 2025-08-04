// Placeholder functions that simulate Contentful API calls
// Replace these with actual Contentful SDK calls when ready

import type {
  Bio,
  GalleryImage,
  MusicTrack,
  SocialLinks,
} from "@/types/contentful";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getBioContent(): Promise<Bio> {
  // Simulate network delay
  await delay(300);

  return {
    title: "About The Poet Malik",
    content: `Born and raised in Fort Worth, Texas, The Poet Malik has woven words into worlds since childhood. His journey began in the vibrant streets of his hometown, where the rhythm of life became the rhythm of his verses.

    As a multi-disciplinary artist, Malik seamlessly blends poetry with music, creating a unique artistic expression that resonates with audiences across generations. His work explores themes of identity, resilience, and the human experience, drawing from personal narratives and universal truths.

    Through years of dedication to his craft, Malik has performed at numerous venues, from intimate coffee houses to grand theaters, always maintaining an authentic connection with his audience. His published works include several poetry collections and collaborative musical projects that showcase his versatility as an artist.

    Today, The Poet Malik continues to push boundaries, experimenting with new forms of expression while staying true to his roots. His mission remains simple yet profound: to touch hearts, provoke thought, and inspire change through the power of words and music.`,
    lastUpdated: new Date().toISOString(),
  };
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  await delay(400);

  return [
    {
      id: "1",
      imageUrl: "https://picsum.photos/800/600?random=1",
      title: "Live at The Blue Note",
      description: "Performance poetry night in downtown Fort Worth",
      createdAt: "2024-12-01",
    },
    {
      id: "2",
      imageUrl: "https://picsum.photos/800/600?random=2",
      title: "Studio Sessions",
      description: "Recording new spoken word album",
      createdAt: "2024-11-15",
    },
    {
      id: "3",
      imageUrl: "https://picsum.photos/800/600?random=3",
      title: "Book Signing Event",
      description: "Latest poetry collection launch",
      createdAt: "2024-10-20",
    },
    {
      id: "4",
      imageUrl: "https://picsum.photos/800/600?random=4",
      title: "Community Workshop",
      description: "Teaching poetry to youth",
      createdAt: "2024-09-10",
    },
    {
      id: "5",
      imageUrl: "https://picsum.photos/800/600?random=5",
      title: "Festival Performance",
      description: "Fort Worth Arts Festival 2024",
      createdAt: "2024-08-05",
    },
    {
      id: "6",
      imageUrl: "https://picsum.photos/800/600?random=6",
      title: "Collaborative Project",
      description: "Working with local musicians",
      createdAt: "2024-07-12",
    },
  ];
}

export async function getMusicTracks(): Promise<MusicTrack[]> {
  await delay(350);

  return [
    {
      id: "1",
      title: "Echoes of Fort Worth",
      releaseYear: 2024,
      albumName: "City Lights & Street Fights",
      spotifyUrl: "https://spotify.com",
      appleMusicUrl: "https://music.apple.com",
      amazonMusicUrl: "https://music.amazon.com",
    },
    {
      id: "2",
      title: "Midnight Verses",
      releaseYear: 2024,
      albumName: "City Lights & Street Fights",
      spotifyUrl: "https://spotify.com",
      appleMusicUrl: "https://music.apple.com",
    },
    {
      id: "3",
      title: "Southern Stories",
      releaseYear: 2023,
      albumName: "Roots & Routes",
      spotifyUrl: "https://spotify.com",
      amazonMusicUrl: "https://music.amazon.com",
    },
    {
      id: "4",
      title: "Poetry in Motion",
      releaseYear: 2023,
      albumName: "Roots & Routes",
      spotifyUrl: "https://spotify.com",
    },
    {
      id: "5",
      title: "Urban Psalms",
      releaseYear: 2022,
      spotifyUrl: "https://spotify.com",
      appleMusicUrl: "https://music.apple.com",
      amazonMusicUrl: "https://music.amazon.com",
    },
  ];
}

export async function getSocialLinks(): Promise<SocialLinks> {
  await delay(200);

  return {
    instagram: "https://instagram.com/thepoetmalik",
    spotify: "https://spotify.com/artist/thepoetmalik",
    amazon: "https://amazon.com/author/thepoetmalik",
    youtube: "https://youtube.com/@thepoetmalik",
  };
}
