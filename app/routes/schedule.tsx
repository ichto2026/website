import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/schedule";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Schedule - IChTo 2026" },
    {
      name: "description",
      content: "Schedule of International Chemistry Tournament 2026",
    },
  ];
}

export default function Schedule() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Schedule" imageUrl="/schedule.jpg" />
      {/* Schedule Section */}
      {/*
      <div className="container mx-auto px-4 text-center overflow-auto">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Schedule</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-400"></div>
            
            <div className="space-y-8">
              <div className="relative flex items-center">
                <div className="flex-1 pr-8">
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                    <div className="font-bold text-lg text-gray-900 mb-2">8/15</div>
                    <p className="text-gray-700">Opening Ceremony, Quiz, School Tour, Team Introduction and Round 1</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                    <div className="font-bold text-lg text-gray-900 mb-2">8/16</div>
                    <p className="text-gray-700">Round 2 and Water Park Breaks</p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pr-8">
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                    <div className="font-bold text-lg text-gray-900 mb-2">8/17</div>
                    <p className="text-gray-700">Round 3 and 4</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                    <div className="font-bold text-lg text-gray-900 mb-2">8/18</div>
                    <p className="text-gray-700">Final Round, Closing Ceremony and Cultural Exchange</p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pr-8">
                  <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
                    <div className="font-bold text-lg text-gray-900 mb-2">8/19</div>
                    <p className="text-gray-700">A Tour of Seoul</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-400 rounded-full"></div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
      <div className="container mx-auto px-4 text-center my-32">
        Schedule will be posted when finalized
      </div>
    </div>
  );
}

