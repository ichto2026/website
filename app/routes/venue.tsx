import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/venue";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About the Venue - IChTo 2026" },
    {
      name: "description",
      content: "The Venue of International Chemistry Tournament 2026",
    },
  ];
}

export default function Venue() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="About the Venue" imageUrl="/venue.jpg" />

      {/* Venue Section */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            About the Venue
          </h2>
          <div className="p-8">
            <div className="flex flex-col md:flex-row items-center md:justify-around mb-8 space-y-4 md:space-y-0">
              <img
                src="/kmla_logo.png"
                alt="Korean Minjok Leadership Academy Logo"
                className="h-16"
              />
              <h3 className="text-2xl font-bold text-gray-900 text-center">
                민족사관고등학교
                <br />
                Korean Minjok Leadership Academy
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="kmlaphotos/kmla_photo.jpg"
                  alt="Korean Minjok Leadership Academy Photo"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.0783221896318!2d128.14311121157678!3d37.45887263017781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3563affa2612a7cd%3A0xab647412adc594ac!2z66-87KGx7IKs6rSA6rOg65Ox7ZWZ6rWQ!5e0!3m2!1sko!2sus!4v1756712708143!5m2!1sko!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div>
                <img
                  src="/kmlaphotos/dasan.jpg"
                  alt="Korean Minjok Leadership Academy Photo"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src="/kmlaphotos/chungmu.png"
                  alt="Korean Minjok Leadership Academy Photo"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src="/kmlaphotos/minkyo.png"
                  alt="Korean Minjok Leadership Academy Photo"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src="/kmlaphotos/kmlamap.png"
                  alt="Korean Minjok Leadership Academy Photo"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-16 flex flex-col items-center justify-around space-x-4 space-y-4 w-full">
          <div className="flex items-start justify-center space-x-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Welli Hilli Park
              </h3>
              <p className="text-gray-700 mb-8">
                Welli Hilli Park, located in Hoengseong, Gangwon Province, is a
                four-season mountain resort best known in winter for its ski and
                snowboard slopes, terrain park, and international-standard
                halfpipe. Opened in 1995, the resort offers 20 runs and a
                gondola on the northern slopes of Suri Peak, along with hotels,
                leisure facilities, and walking trails that make it a popular
                destination for both winter sports and year-round recreation.
              </p>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Transportation
              </h3>
              <p className="text-gray-700 mb-8">
                Transportation between Welli Hilli Park and Korean Minjok
                Leadership Academy will be provided twice daily according to a
                fixed schedule, which will be announced once it has been
                finalized.
              </p>
            </div>
          </div>
          <div className="flex items-between space-x-8 w-full">
            <img
              src="/accommodation_outdoor.jpg"
              alt="The way from the airport"
              className="mt-4 w-full h-60 rounded-lg flex-1"
            />
            <div className="flex-1 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.7360679335534!2d128.2478774115781!3d37.49055422836467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3563b41ee4654b0f%3A0x4f163452017ba699!2z7Juw66as7Z6Q66as7YyM7YGs!5e0!3m2!1sko!2sus!4v1756708926328!5m2!1sko!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

