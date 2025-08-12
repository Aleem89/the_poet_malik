import Image from "next/image";
import { getBioContent } from "@/lib/contentful-placeholders";
import BioContent from "@/components/BioContent";

export default async function BioPage() {
  const bio = await getBioContent();

  return (
    <div className="min-h-[calc(100vh-240px)]">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[400px] md:h-[650px] organic-blob-mask">
            <Image
              src="/background-bio.jpg"
              alt="The Poet Malik"
              fill
              className="object-cover object-left-top"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-off-black/60 to-transparent organic-blob-mask" />
          </div>

          {/* Text Column - Moved to Client Component */}
          <BioContent bio={bio} />
        </div>
      </div>
    </div>
  );
}
