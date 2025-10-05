import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/korea";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome to Korea - IChTo 2026" },
    { name: "description", content: "Korea - International Chemistry Tournament 2026" },
  ];
}

export default function Korea() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Welcome to Korea" imageUrl="/about.jpg" />

      {/* Korea Section */}
      <div className="container max-w-4xl mx-auto px-4 mb-16">
        <h1 className="text-5xl font-bold mb-8">Korea (South)</h1>
        <img src="/korea.jpg" alt="Korea" className="max-w-full mb-8 rounded-lg object-contain" />
        <div className="text-gray-700">
          <p>
            South Korea is a dynamic East Asian nation located on the southern portion of the Korean Peninsula. It transformed from a war-torn country in the 1950s into one of the world's leading economies, known for its technological innovation, K-pop culture, and industrial brands. The country blends ultra-modern cities, particularly Seoul, with traditional temples and palaces. It has a population of approximately 51 million people, a highly educated workforce, and is recognized for its fast internet speeds and vibrant entertainment industry that has gained global influence.
          </p>
        </div>
      </div>


      {/* Seoul Section */}
      <div className="container max-w-4xl mx-auto px-4 mb-16">
        <h1 className="text-5xl font-bold mb-8">Seoul</h1>
        <img src="/seoul.jpg" alt="Seoul" className="max-w-full mb-8 rounded-lg object-contain" />
        <div className="text-gray-700">
          <p>
            Seoul is the capital and largest city of South Korea, home to approximately 10 million people in the city proper and over 25 million in the greater metropolitan area. It's a bustling metropolis where ancient palaces like Gyeongbokgung stand alongside futuristic skyscrapers and neon-lit districts. The city serves as the political, economic, and cultural heart of the country, featuring world-class technology infrastructure, an extensive subway system, and vibrant neighborhoods ranging from traditional hanok villages to trendy areas like Gangnam and Hongdae. Seoul is known for its 24-hour lifestyle, street food culture, shopping districts, and being a global hub for K-pop and Korean entertainment.
          </p>
        </div>
      </div>
    </div>
  );
}