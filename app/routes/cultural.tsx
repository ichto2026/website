import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/cultural";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cultural Moments - IChTo 2026" },
    { name: "description", content: "Cultural Moments of International Chemistry Tournament 2026" },
  ];
}

export default function Cultural() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Cultural Moments" imageUrl="/cultural.jpg" />

      {/* 가야금 Section */}
      <div className="container max-w-4xl mx-auto px-4 mb-16">
        <h1 className="text-5xl font-bold mb-8">Gayageum (가야금)</h1>
        <img src="/gayageum.jpg" alt="개량가야금" className="w-full h-auto mb-8 rounded-lg" title="citation: 국립중앙박물관 e뮤지엄" />
        <p className="text-gray-700">
          The gayageum is Korea's most representative traditional string instrument. It is said to have been created in the Gaya Kingdom, and is played with 12 strings (traditional gayageum) or 25 strings (improved gayageum) made of silk thread stretched over a long resonating body.
        </p>
        <p className="text-gray-700 mt-4">
          It uses a resonating body made of paulownia wood. Players pluck the strings with their right hand and press them with their left hand to create nonghyeon (vibrato) and sigimsae (ornamental notes).
        </p>
        <p className="text-gray-700 mt-4">
          In jeongak (court music), it produces elegant and refined sounds, while in sanjo or folk music, it creates sorrowful and emotionally rich tones. Along with the geomungo and daegeum, it is considered one of the three major instruments in traditional Korean music, and is actively used in contemporary creative and fusion music today.
        </p>
      </div>

      {/* 국궁 Section */}
      <div className="container max-w-4xl mx-auto px-4 mb-16">
        <h1 className="text-5xl font-bold mb-8">Traditional Korean Archery (국궁)</h1>
        <img src="/archery.jpg" alt="국궁" className="max-w-full mb-8 rounded-lg object-contain" />
        <div className="text-gray-700">
          <p>
            Korean archery, known as Gukgung, is Korea's traditional archery that uses a unique composite bow called Gakgung. The Gakgung is crafted by combining natural materials including water buffalo horn, oak wood, bamboo, cattle sinew, and croaker fish glue, delivering remarkable elasticity and power despite its compact size.
          </p>
          <p className="mt-4">
            The shooting distance in Gukgung is 145 meters, where arrows fly in a parabolic trajectory requiring static concentration and breath control as essential elements. During the Joseon Dynasty, it was a mandatory subject in the military service examination, and today it continues as a recreational sport.
          </p>
          <p className="mt-4">
            Seoul has several archery ranges including Hwanghakjeong and Seokgwanjeong, where people of all ages and genders can learn. Beyond being a sport, it's gaining popularity as a venue for mind-body training and traditional culture experience.
          </p>
        </div>
      </div>

      {/* 서예 Section */}
      <div className="container max-w-4xl mx-auto px-4 mb-16">
        <h1 className="text-5xl font-bold mb-8">Calligraphy (서예)</h1>
        <img src="/calligraphy.jpg" alt="서예" className="max-w-full mb-8 rounded-lg" style={{ maxHeight: "400px", objectFit: "contain" }} />
        <div className="text-gray-700">
          <p>
            Korean calligraphy is a traditional art form that expresses the beautiful aesthetic qualities of Hangeul using brush and ink.
          </p>
          <p className="mt-4">
            Building upon techniques developed from Chinese calligraphy, it distinctively highlights the geometric structure of Hangeul and the harmony between vowels and consonants. Though composed of simple combinations of circles and lines—such as the round 'ㅇ', vertical 'ㅣ', and horizontal 'ㅡ'—infinite expressions are possible through variations in stroke thickness, speed, and spatial composition.
          </p>
          <p className="mt-4">
            Various styles exist including Gungche (palace script), Panbon-che (printed style), and Min-che (folk style), and contemporary practice has evolved beyond traditional forms into creative calligraphy. Beyond the act of writing, it serves as a tool for spiritual cultivation and meditation, and has recently gained attention in the design field through its integration with modern calligraphy.
          </p>
          <p className="mt-4">
            Beginners start with basic stroke practice, gradually learning the balance of consonants and vowels and the harmony between characters, eventually developing their own unique style.
          </p>
        </div>
      </div>
    </div>
  );
}
