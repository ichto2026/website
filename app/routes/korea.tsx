import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/korea";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Welcome to Korea - IChTo 2026" },
    {
      name: "description",
      content: "Korea - International Chemistry Tournament 2026",
    },
  ];
}

export default function Korea() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Welcome to Korea" imageUrl="/korea_page.jpg" />

      {/* Korea Section */}
      <div className="container max-w-4xl mx-auto px-4 mb-16">
        <h1 className="text-5xl font-bold mb-8">Republic of Korea</h1>
        <img
          src="/korea.jpg"
          alt="Korea"
          className="max-w-full mb-8 rounded-lg object-contain"
        />
        <div className="text-gray-700">
          <p>
            South Korea, located on the southern part of the Korean Peninsula,
            has developed from a war-torn nation in the 1950s into a global
            economic leader. It is known for its technological innovation,
            K-pop, and major industrial brands. The country combines
            ultra-modern urban life, especially in Seoul, with traditional
            temples and palaces. With a population of about 51 million and a
            highly educated workforce, South Korea stands out for its strong
            commitment to education and research, which has fostered world-class
            achievements in science, technology, and international academic
            competitions.
          </p>
        </div>
      </div>

      {/* Seoul Section */}
      <div className="container max-w-4xl mx-auto px-4 mb-16">
        <h1 className="text-5xl font-bold mb-8">Seoul</h1>
        <img
          src="/seoul.jpg"
          alt="Seoul"
          className="max-w-full mb-8 rounded-lg object-contain"
        />
        <div className="text-gray-700">
          <p>
            Seoul, the capital and largest city of South Korea, is a vibrant
            metropolis where cutting-edge technology and deep-rooted history
            coexist. Situated along the Han River, the city is home to major
            global companies, advanced research institutions, and a highly
            efficient public transport system, making it a central hub for
            business, innovation, and education. Historic palaces, traditional
            markets, and cultural villages stand side by side with skyscrapers,
            digital billboards, and bustling shopping districts. As a dynamic
            center of culture, including K-pop, film, and contemporary arts,
            Seoul offers visitors and residents alike a unique environment that
            blends modern urban energy with rich cultural heritage.
          </p>
        </div>
      </div>

      {/* Heongsung Section */}
      <div className="container max-w-4xl mx-auto px-4 mb-16">
        <h1 className="text-5xl font-bold mb-8">Heongsung</h1>
        <div className="max-w-full flex">
          <img
            src="https://placehold.co/400"
            alt="Seoul"
            className="max-w-[50%] object-contain"
          />
          <img
            src="https://placehold.co/400"
            alt="Seoul"
            className="max-w-[50%] object-contain"
          />
        </div>
        <div className="max-w-full flex">
          <img
            src="https://placehold.co/400"
            alt="Seoul"
            className="max-w-[50%] mb-8 object-contain"
          />
          <img
            src="https://placehold.co/400"
            alt="Seoul"
            className="max-w-[50%] mb-8 object-contain"
          />
        </div>
        <div className="text-gray-700">
          <p>
            Hoengseong, located in Gangwon Province in the northeastern part of
            South Korea, is a rural county known for its clean natural
            environment and tranquil landscapes. Surrounded by mountains and
            rivers, it is famous for Hoengseong Korean beef, eco-friendly
            agriculture, and winter ski resorts that make it a regional hub for
            snow sports. With its slower pace of life, seasonal festivals, and
            easy access to nature and winter recreation, Hoengseong offers a
            calm yet distinctive contrast to the country’s major urban centers.
          </p>
        </div>
      </div>
    </div>
  );
}
