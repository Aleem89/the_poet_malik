import Image from "next/image";
import HomeContent from "@/components/HomeContent";

export default async function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Adjusted positioning */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-home.jpg"
          alt="The Poet Malik"
          fill
          className="object-cover object-top"
          priority
          quality={100}
          style={{
            objectPosition: "50% 5%", // Adjust this value to position the image
          }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content - Moved to Client Component */}
      <HomeContent />
    </div>
  );
}
