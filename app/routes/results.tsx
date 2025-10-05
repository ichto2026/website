import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/results";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Results - IChTo 2026" },
    { name: "description", content: "Results of International Chemistry Tournament 2026" },
  ];
}

export default function Results() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Results" imageUrl="/results.jpg" />

      {/* Results Section */}
      <div className="container mx-auto px-4 text-center">
        <div className="text-gray-600">
          <p className="my-4">Results information will be updated during the tournament.</p>
          <p className="my-4"><Link to="/past" className="text-blue-800">View Past Results</Link></p>
        </div>
      </div>
    </div>
  );
}