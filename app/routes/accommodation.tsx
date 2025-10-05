import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/accommodation";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Accommodation - IChTo 2026" },
    { name: "description", content: "Accommodation for International Chemistry Tournament 2026" },
  ];
}

export default function Accommodation() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Accommodation" imageUrl="/about.jpg" />

      {/* Accommodation Section */}
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Accommodation</h2>
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center md:justify-around mb-8 space-y-4 md:space-y-0">
              <img 
                src="/accommodation_logo.svg" 
                alt="Welli Hilli Park Logo" 
                className="h-16"
              />
              <h3 className="text-2xl font-bold text-gray-900 text-center">웰리힐리파크 Welli Hilli Park</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <img 
                  src="/accommodation_outdoor.jpg" 
                  alt="Welli Hilli Park Outdoor View" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <img 
                  src="/accommodation_indoor.jpg" 
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
            <p className="mt-8 text-gray-700" style={{ textAlign: "start" }}>
              Welli Hilli Park is a comprehensive four-season resort located near Seoul, situated in the pristine Suribong area of Hoengseong, Gangwon Province—a pollution-free natural zone. Here, you can enjoy elevated relaxation amid stunning natural surroundings that showcase distinct beauty in each season. The resort is surrounded by exceptional natural environments, including nearby Cheongtaesan Natural Recreation Forest, Forest Therapy Center, and Chiaksan National Park. Accommodation options include youth hostels in 3 different styles and condominiums in 16 different types.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}