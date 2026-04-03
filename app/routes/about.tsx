import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/about";
import { Users, Flag, BookCheck, Globe } from "lucide-react";
import ImageNText from "~/components/ImageNText";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Introduction - IChTo 2026" },
    {
      name: "description",
      content: "Introduction to International Chemistry Tournament 2026",
    },
  ];
}

export default function About() {
  const descAbout =
    "International Chemistry Tournament (IChTo) is a team-based chemistry competition for high school students. Unlike traditional Olympiad-style contests, IChTo challenges participants with open-ended problems that have no predetermined answer. Through presenting and debating different solutions, students develop creativity, teamwork, critical thinking and public speaking skills.";
  const welcomeMessage = `It is with great pleasure that I invite young chemists from around the world to the 9th International Chemistry Tournament (IChTo 2026), which will be hosted by the Korean Minjok Leadership Academy this August.

KMLA is honored to serve as the host institution for IChTo 2026. Over the past months, our school has been preparing with great care and dedication to create an environment worthy of this unique international academic event. We see this tournament not simply as a competition, but as a meaningful gathering of future scientific leaders who share curiosity, rigor, and a spirit of collaboration.

What makes IChTo truly distinctive is its emphasis on scientific dialogue. Rather than focusing solely on correct answers, participants are invited to defend ideas, challenge assumptions, and engage in dynamic “Chemical Fights” that reflect the authentic process of scientific inquiry. This approach resonates deeply with KMLA’s educational philosophy, which values critical thinking, respectful debate, and learning through intellectual exchange.

Hosting IChTo in Korea also offers participants a special opportunity beyond science. Situated in the natural beauty of Gangwon Province, our campus provides a welcoming setting in which participants can experience Korean culture, tradition, and hospitality. We hope that alongside rigorous academic engagement, you will discover meaningful cultural connections and lasting international friendships.

We warmly invite you to join us at IChTo 2026 — a place where chemistry, ideas, and cultures meet. We look forward to welcoming you to Korea and to the Korean Minjok Leadership Academy.`;
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Introducing IChTo" imageUrl="/about.jpg" />

      {/* About Section */}
      <ImageNText
        title="IChTo 2026"
        description={descAbout}
        imageUrl="/ichtologo.png"
        imageAlt="IChTo 2026 Logo"
      />

      <div className="container mx-auto px-4 text-center mb-16 lg:my-36 flex flex-col md:flex-row items-center gap-y-10 md:items-start justify-center gap-x-20">
        <div className="flex flex-col items-center">
          <Flag className="w-12 h-12 text-blue-800 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">5 Rounds</h3>
        </div>
        <div className="flex flex-col items-center">
          <BookCheck className="w-12 h-12 text-blue-800 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            12 Questions
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-12 h-12 text-blue-800 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            60+ Participants
          </h3>
          <p className="text-gray-600">Gathered in a week</p>
        </div>
        <div className="flex flex-col items-center">
          <Globe className="w-12 h-12 text-blue-800 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            10 Countries
          </h3>
          <p className="text-gray-600">Represented</p>
        </div>
      </div>

      <div
        className="my-16 overflow-auto"
        style={{
          backgroundImage:
            "image-set(url('/avif/minsa.avif') type('image/avif'), url('/minsa.jpg') type('image/jpeg'))",
        }}
      >
        <div className="bg-white/50 backdrop-blur-sm overflow-auto">
          {/* Scientific Debate Section */}
          <ImageNText
            title="Real-World Research"
            description="International Chemistry Tournament (IChTo) mimics real-world scientific research and the process of presenting and defending the results obtained. Participants have almost a year to work on 12 open-ended inquiry problems. The beauty of the Tournament is that teams can take quite different routes to tackle the same problem. All questions do not have a particular answer. As long as they stay within the broadly defined statement of the problem, all routes are legitimate and teams will be judged according to the depths reached by their investigations."
            imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="Research Image"
            reverse={true}
          />

          {/* Scholarly Discussion Section */}
          <ImageNText
            title="Scientific Debate"
            description="The competition is not a pen-and-paper exam but an enactment of a scientific discussion where participants take the roles of Reporter, Opponent and Reviewer and are evaluated by professional qualified jury members. The experience fosters interdisciplinary communication, encourages constructive feedback among peers, and cultivates professional presentation abilities. Ultimately, these opportunities prepare participants to excel in future academic or research endeavors."
            imageUrl="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="Debate Image"
          />
        </div>
      </div>

      {/* Welcome Section */}
      <h1 className="text-4xl lg:text-6xl font-bold px-4 my-8 text-center text-blue-800">
        Welcome Message
      </h1>
      <ImageNText
        title="Dr. Sang-Won Lee"
        subtitle="Headmaster of Korean Minjok Leadership Academy (KMLA)"
        description={welcomeMessage}
        imageUrl="/headmaster.jpg"
        imageAlt="Photo of Headmaster"
        reverse={true}
      />
    </div>
  );
}
