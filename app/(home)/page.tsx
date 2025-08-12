import Image from "next/image";
import HomeContent from "@/components/HomeContent";

export default async function HomePage() {
  return (
    <div
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: "calc(100vh - 160px)" }}
    >
      {/* Background Image with Overlay - Adjusted positioning */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-home.jpg"
          alt="The Poet Malik"
          fill
          className="object-cover"
          priority
          quality={100}
          style={{
            objectPosition: "50% 10%", // Show more of the top while covering full area
          }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content - Moved to Client Component */}
      <HomeContent />
    </div>
  );
}
