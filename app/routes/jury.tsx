import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/jury";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jury Members - IChTo 2026" },
    { name: "description", content: "Jury Members of International Chemistry Tournament 2026" },
  ];
}

export default function Jury() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Jury Members" imageUrl="/jury_page.jpg" />

      {/* Jury Section */}
      <div className="container mx-auto px-4 text-center my-32">
        <div className="text-gray-600">
          <p>Jury member information will be updated soon.</p>
        </div>
      </div>
    </div>
  );
}