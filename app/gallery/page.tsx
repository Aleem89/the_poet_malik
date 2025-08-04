import { getGalleryImages } from "@/lib/contentful-placeholders";
import GalleryContent from "@/components/GalleryContent";

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <div className="container mx-auto px-6 py-16">
      <GalleryContent images={images} />
    </div>
  );
}
