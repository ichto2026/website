import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/sponsors";

const sponsors = [
  {
    name: "Sewon",
    avifSrc: "/sponsors/sewon.avif",
    fallbackSrc: "/sponsors/sewon.png",
  },
  {
    name: "OCI",
    avifSrc: "/sponsors/oci.avif",
    fallbackSrc: "/sponsors/oci.png",
  },
  {
    name: "강원교육",
    avifSrc: "/sponsors/강원교육.avif",
    fallbackSrc: "/sponsors/강원교육.png",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sponsors - IChTo 2026" },
    { name: "description", content: "Sponsors of International Chemistry Tournament 2026" },
  ];
}

export default function Sponsors() {
  return (
    <div className="min-h-screen">
      <HeroImage title="Sponsors" imageUrl="/sponsors.jpg" />

      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-10 md:flex-row md:gap-16">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex h-40 w-full max-w-xs items-center justify-center p-6"
            >
              <picture>
                <source srcSet={sponsor.avifSrc} type="image/avif" />
                <img
                  src={sponsor.fallbackSrc}
                  alt={`${sponsor.name} logo`}
                  className="max-h-24 w-full object-contain"
                />
              </picture>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
