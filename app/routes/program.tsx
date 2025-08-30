import type { Route } from "./+types/program";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Program - IChTo 2026" },
    { name: "description", content: "Program schedule for International Chemistry Tournament 2026" },
  ];
}

export default function Program() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Program
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page will be updated soon with the tournament program and schedule.
          </p>
        </div>
      </div>
    </div>
  );
}