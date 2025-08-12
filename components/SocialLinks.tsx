import Link from "next/link";
import { Instagram, Music, ShoppingBag, Youtube } from "lucide-react";

interface SocialLinksProps {
  variant?: "hero" | "footer";
  className?: string;
}

export default function SocialLinks({
  variant = "footer",
  className = "",
}: SocialLinksProps) {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/thepoetmalik",
      color: "hover:text-pink-400",
      label: "@thepoetmalik",
    },
    /** {
      name: "Spotify",
      icon: Music,
      href: "https://spotify.com/artist/thepoetmalik",
      color: "hover:text-green-400",
      label: "Listen on Spotify",
    }, **/
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/@thepoetmalik",
      color: "hover:text-red-400",
      label: "Watch on YouTube",
    },
    {
      name: "Amazon",
      icon: ShoppingBag,
      href: "https://www.amazon.com/s?i=stripbooks&rh=p_27%3AD%2BMalik%2BGratts&s=relevancerank&text=D+Malik+Gratts",
      color: "hover:text-orange-400",
      label: "Books on Amazon",
    },
  ];

  if (variant === "hero") {
    return (
      <div
        className={`flex justify-center flex-wrap gap-3 md:gap-4 lg:gap-6 ${className}`}
      >
        {socialLinks.map((social) => {
          const IconComponent = social.icon;
          return (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 md:p-4 
                bg-black/60 md:bg-dark-charcoal/80 
                backdrop-blur-sm 
                hover:bg-accent-gold/20 
                border-2 md:border 
                border-accent-gold/60 md:border-accent-gold/20 
                hover:border-accent-gold 
                rounded-full 
                transition-all duration-300 
                hover:scale-110 hover-lift 
                shadow-lg md:shadow-none
                ${social.color} group`}
              aria-label={social.label}
            >
              <IconComponent
                size={18}
                className="md:w-6 md:h-6 text-soft-white group-hover:text-accent-gold transition-colors duration-300"
              />
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 bg-medium-charcoal hover:bg-mocha-mousse/20 border border-mocha-mousse/20 hover:border-mocha-mousse/40 rounded-lg transition-all duration-300 hover-lift focus-ring ${social.color}`}
            aria-label={social.label}
          >
            <IconComponent size={20} />
          </Link>
        );
      })}
    </div>
  );
}
