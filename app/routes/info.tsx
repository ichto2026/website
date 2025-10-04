import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Useful Information - IChTo 2026" },
    { name: "description", content: "Useful Information for International Chemistry Tournament 2026" },
  ];
}

export default function Jury() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Useful Information" imageUrl="/about.jpg" />

      {/* Jury Section */}
      <div className="container mx-auto px-4 text-center my-32">
        <div className="text-gray-600">
          <p>TBA</p>
        </div>
      </div>
    </div>
  );
}