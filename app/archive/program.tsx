// import type { Route } from "./+types/program";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "Program - IChTo 2026" },
//     { name: "description", content: "Program schedule for International Chemistry Tournament 2026" },
//   ];
// }

export default function Program() {
  return (
    <div className="min-h-screen">
      <div 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/mountain.jpg')`,
          backgroundAttachment: 'fixed',
          filter: 'blur(0px)'
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold">Programs</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50"></div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
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

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Accommodation</h2>
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center md:justify-around mb-8 space-y-4 md:space-y-0">
                  <img 
                    src="/accomodation_logo.svg" 
                    alt="Welli Hilli Park Logo" 
                    className="h-16"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 text-center">웰리힐리파크 Welli Hilli Park</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <img 
                      src="/accomodation_outdoor.jpg" 
                      alt="Welli Hilli Park Outdoor View" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <img 
                      src="/accomodation_indoor.jpg" 
                      alt="Welli Hilli Park Indoor View" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div className="h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.7360679335534!2d128.2478774115781!3d37.49055422836467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3563b41ee4654b0f%3A0x4f163452017ba699!2z7Juw66as7Z6Q66as7YyM7YGs!5e0!3m2!1sko!2sus!4v1756708926328!5m2!1sko!2sus"
                    width="100%"
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">About the Venue</h2>
              <div className="p-8">
                <div className="flex flex-col md:flex-row items-center md:justify-around mb-8 space-y-4 md:space-y-0">
                  <img 
                    src="/kmla_logo.png" 
                    alt="Korean Minjok Leadership Academy Logo" 
                    className="h-16"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 text-center">
                    민족사관고등학교<br />
                    Korean Minjok Leadership Academy
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <img 
                      src="/kmla_photo.jpg" 
                      alt="Korean Minjok Leadership Academy Photo" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div className="h-64 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.0783221896318!2d128.14311121157678!3d37.45887263017781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3563affa2612a7cd%3A0xab647412adc594ac!2z66-87KGx7IKs6rSA6rOg65Ox7ZWZ6rWQ!5e0!3m2!1sko!2sus!4v1756712708143!5m2!1sko!2sus"
                      width="100%"
                      height="100%"
                      style={{border:0}}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}