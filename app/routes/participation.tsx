import type { Route } from "./+types/participation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Participation - IChTo 2026" },
    { name: "description", content: "Participation information for International Chemistry Tournament 2026" },
  ];
}

export default function Participation() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with minsa.jpg background */}
      <div 
        className="h-screen flex items-center justify-center relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/minsa.jpg')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            Participation
          </h1>
        </div>
        {/* Gradient overlay to transition to gray background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-200"></div>
      </div>

      {/* Content Section */}
      <div className="bg-gray-200 py-16 relative">
        <div className="container mx-auto px-4 space-y-12 relative">
          
          {/* Who can participate section */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">Who can participate in IChTo?</h2>
            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6">
              A team consists of 4-6 high school students representing the same country. They do not have to be enrolled in the same high school. Each country can register up to 2 teams, besides the host country, which can register up to 3 teams.
            </p>
            <a 
              href="/register"
              className="inline-block bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Register Now
            </a>
          </div>

          {/* Problems section */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">Problems</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">IChTo 2026</h3>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded transition-colors">
                  Download Problems (Coming Soon)
                </button>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Past Tournaments</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded transition-colors text-sm">
                    IChTo 2024
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded transition-colors text-sm">
                    IChTo 2023
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded transition-colors text-sm">
                    IChTo 2022
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded transition-colors text-sm">
                    IChTo 2020/2021
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded transition-colors text-sm">
                    IChTo 2019
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded transition-colors text-sm">
                    IChTo 2018
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded transition-colors text-sm">
                    IChTo 2017
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Rules section */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">Rules</h2>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded transition-colors">
              Rules Book (Coming Soon)
            </button>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-100 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-sm md:text-base font-semibold text-gray-900">What role can a participant perform?</span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 p-4 text-sm md:text-base text-gray-700">
                  <p className="mb-4">There are four main roles one can perform:</p>
                  <p className="mb-2"><strong>A Reporter</strong>: introduces and defends the task solution</p>
                  <p className="mb-2"><strong>An Opponent</strong>: gives a brief description of the solution, points out the shortcomings of the report, discusses it with the reporter and makes a conclusion about how good the task was solved.</p>
                  <p className="mb-2"><strong>A Reviewer</strong>: evaluates the performance of the reporter and the opponent, points out main shortcomings of the report and the opposition.</p>
                  <p><strong>An Observer</strong>: can ask questions to anyone. This role exists only in four or five team sections.</p>
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-100 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-sm md:text-base font-semibold text-gray-900">What do the teams do before the Tournament?</span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 p-4 text-sm md:text-base text-gray-700">
                  Each team solves the tasks and makes a presentation for every task (except the tasks from which team is going to refuse) to introduce and defend solutions.
                </div>
              </details>

              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none p-4 bg-gray-100 rounded-lg hover:bg-gray-100 transition-colors">
                  <span className="text-sm md:text-base font-semibold text-gray-900">What happens in the Tournament?</span>
                  <span className="transform group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="mt-4 p-4 text-sm md:text-base text-gray-700">
                  <p className="mb-4">Here is a scheme that should help you to understand how the Round goes.</p>
                  <img 
                    src="/scheme-1024x909.png" 
                    alt="Tournament Round Scheme" 
                    className="w-full max-w-md mx-auto rounded-lg"
                  />
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}