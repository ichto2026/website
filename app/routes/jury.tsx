import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/about";
import { Users, Flag, IdCard, Languages } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - IChTo 2026" },
    { name: "description", content: "About International Chemistry Tournament 2026" },
  ];
}

export default function Sponsors() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Our Sponsors" imageUrl="/about.jpg" />

      {/* Sponsors Section */}
      <div className="container mx-auto px-4 text-center my-32">
        {/* <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
          Our Sponsors
        </h2> */}
        <div className="text-gray-600">
          <p>Jury member information will be updated soon.</p>
        </div>
      </div>
    </div>
  );
}