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
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Introducing IChTo" imageUrl="/about.jpg" />

      {/* About Section */}
      <ImageNText
        title="IChTo 2026"
        description={descAbout}
        imageUrl="https://placehold.co/300"
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

      <div className="bg-[url('/minsa.jpg')] my-16 overflow-auto">
        <div className="bg-white/50 backdrop-blur-sm overflow-auto">
          {/* Scientific Debate Section */}
          <ImageNText
            title="Real-World Research"
            description="International Chemistry Tournament (IChTo) mimics real-world scientific research and the process of presenting and defending the results obtained. Participants have almost a year to work on 12 open-ended inquiry problems. The beauty of the Tournament is that teams can take quite different routes to tackle the same problem. All questions do not have a particular answer. As long as they stay within the broadly defined statement of the problem, all routes are legitimate and teams will be judged according to the depths reached by their investigations."
            imageUrl="https://placehold.co/300"
            imageAlt="IChTo 2026 Logo"
            reverse={true}
          />

          {/* Scholarly Discussion Section */}
          <ImageNText
            title="Scientific Debate"
            description="The competition is not a pen-and-paper exam but an enactment of a scientific discussion where participants take the roles of Reporter, Opponent and Reviewer and are evaluated by professional qualified jury members. The experience fosters interdisciplinary communication, encourages constructive feedback among peers, and cultivates professional presentation abilities. Ultimately, these opportunities prepare participants to excel in future academic or research endeavors."
            imageUrl="https://placehold.co/300"
            imageAlt="IChTo 2026 Logo"
          />
        </div>
      </div>

      {/* Welcome Section */}
      <h1 className="text-4xl lg:text-6xl font-bold px-4 my-8 md:text-center text-blue-800">
        Welcome Message
      </h1>
      <ImageNText
        title="Dr. Ha-Shik Park"
        subtitle="Headmaster of Korean Minjok Leadership Academy"
        description="TBA"
        imageUrl="/headmaster.jpg"
        imageAlt="Photo of Headmaster Ha-Shik Park"
        imageMaxHeight={400}
        reverse={true}
      />

      {/* Content Section */}
      {/* <div className="bg-gray-50 py-16 relative">
        
        <div className="container mx-auto px-4 space-y-12 relative"> */}

      {/* Main Description */}
      {/* <div className="max-w-4xl mx-auto p-8 relative z-10">
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              The International Chemistry Tournament (IChTo) is a team competition for high school students, with a format based on scientific debates starting from problems with open solutions. Having a novel approach in education, as compared to classical Olympiads, the accent is on both scientific and soft skills. As a result, creativity, teamwork, critical thinking, and public speaking are very important to succeed in this contest.
            </p>
          </div> */}

      {/* Main Video */}
      {/* <div className="max-w-4xl mx-auto p-8 relative z-10">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/QK9CkL4Fkg0"
                title="IChTo 2023 Final Stage"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-center text-sm md:text-base text-gray-600 mt-4">IChTo 2023 Final Stage</p>
          </div> */}

      {/* Two Videos Side by Side */}
      {/* <div className="max-w-6xl mx-auto px-12 py-12 relative z-10">
            
            <div className="grid md:grid-cols-2 gap-24">
              <div>
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/aPw9sccZR7c"
                    title="Flawed Debate"
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center text-sm md:text-base text-gray-600 mt-4">Flawed Debate</p>
              </div>
              
              <div>
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/UqXfKddLaP4"
                    title="Model Debate"
                    style={{ border: 'none' }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center text-sm md:text-base text-gray-600 mt-4">Model Debate</p>
              </div>
            </div>
          </div> */}

      {/* FAQ Section */}
      {/* <div className="max-w-4xl mx-auto p-8 relative z-10">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                  <span className="text-sm md:text-base font-semibold text-gray-900">What is the Chemistry Tournament?</span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 p-4 text-sm md:text-base text-gray-700">
                  The Chemistry Tournament is a team and quite creative competition.
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
                  <span className="text-sm md:text-base font-semibold text-gray-900">How is it different from the Olympiad?</span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 p-4 text-sm md:text-base text-gray-700">
                  <p className="mb-4">
                    The first and perhaps main difference is the type of the tasks. All Tournament tasks are "open-type" and don't have certain solutions in contrast to Olympiad tasks. Sometimes a task author doesn't know the right solution and whether there is any solution.
                  </p>
                  <p>
                    Secondly, the Tournament is a team event (teams of 4 to 6 people take part in it). So not only personal skills are important, but a capacity for teamwork and communication skills. Also it's very important to build a right strategy but that's the topic for another discussion.
                  </p>
                </div>
              </details>
            </div>
          </div> */}
      {/* </div>
      </div> */}
    </div>
  );
}
