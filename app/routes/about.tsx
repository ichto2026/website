import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About - IChTo 2026" },
    { name: "description", content: "About International Chemistry Tournament 2026" },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <div 
        className="h-screen flex items-center justify-center relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/about.jpg')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            About IChTo 2026
          </h1>
        </div>
        {/* Gradient overlay to transition to gray background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-200"></div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-200 py-16 relative">
        {/* Vertical connecting line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-16 bottom-16 w-0.5 bg-gray-400 opacity-60"></div>
        
        <div className="container mx-auto px-4 space-y-12 relative">
          
          {/* Main Description */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 relative z-10">
            {/* Connection dot */}
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed">
              The International Chemistry Tournament (IChTo) is a team competition for high school students, with a format based on scientific debates starting from problems with open solutions. Having a novel approach in education, as compared to classical Olympiads, the accent is on both scientific and soft skills. As a result, creativity, teamwork, critical thinking, and public speaking are very important to succeed in this contest.
            </p>
          </div>

          {/* Main Video */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 relative z-10">
            {/* Connection dot */}
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
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
          </div>

          {/* Two Videos Side by Side */}
          <div className="max-w-6xl mx-auto bg-white rounded-lg px-12 py-12 relative z-10">
            {/* Connection dot */}
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
            
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
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 relative z-10">
            {/* Connection dot */}
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-100 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-sm md:text-base font-semibold text-gray-900">What is the Chemistry Tournament?</span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 p-4 text-sm md:text-base text-gray-700">
                  The Chemistry Tournament is a team and quite creative competition.
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-100 rounded-lg hover:bg-gray-100 transition-colors">
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
          </div>
        </div>
      </div>
    </div>
  );
}