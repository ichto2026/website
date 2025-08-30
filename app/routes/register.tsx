import type { Route } from "./+types/register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register - IChTo 2026" },
    { name: "description", content: "Registration for International Chemistry Tournament 2026" },
  ];
}

export default function Register() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Register Now
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Registration will open soon. Please check back later for registration details.
          </p>
        </div>
      </div>
    </div>
  );
}