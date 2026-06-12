import Image from "next/image";
import { HERO_IMAGE } from "@/lib/hero-image";

export function HeroBackground() {
  return (
    <>
      <Image
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-caribbean-900/92 via-caribbean-800/82 to-caribbean-700/72"
        aria-hidden
      />
    </>
  );
}
