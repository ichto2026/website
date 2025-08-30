import type { Route } from "./+types/participation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Participation - IChTo 2026" },
    { name: "description", content: "Participation information for International Chemistry Tournament 2026" },
  ];
}

export default function Participation() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Participation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page will be updated soon with participation details and requirements.
          </p>
        </div>
      </div>
    </div>
  );
}