import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/sponsors";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sponsors - IChTo 2026" },
    { name: "description", content: "Sponsors of International Chemistry Tournament 2026" },
  ];
}

export default function Sponsors() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Sponsors" imageUrl="/sponsors.jpg" />

      {/* Sponsors Section */}
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-gray-900">
            Patronages and Sponsors
          </h2>
          <div className="text-gray-600">
            <p>Sponsor information will be updated soon.</p>
          </div>
        </div>
        <div className="my-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-gray-900">
            Our Supporters
          </h2>
          <div className="text-gray-600">
            <p>Sponsor information will be updated soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}