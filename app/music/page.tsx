import { getMusicTracks } from "@/lib/contentful-placeholders";
import MusicContent from "@/components/MusicContent";

export default async function MusicPage() {
  const tracks = await getMusicTracks();

  return (
    <div className="container mx-auto px-6 py-16">
      <MusicContent tracks={tracks} />
    </div>
  );
}
