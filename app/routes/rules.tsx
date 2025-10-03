import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rules - IChTo 2026" },
    { name: "description", content: "Rules and Format of International Chemistry Tournament 2026" },
  ];
}

export default function Rules() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Rules and Format" imageUrl="/about.jpg" />

      {/* Rules Section */}
      <div className="container mx-auto px-4 text-center my-32">
        <div className="text-gray-600">
          <p>TBD</p>
        </div>
      </div>
    </div>
  );
}