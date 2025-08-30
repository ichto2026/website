import type { Route } from "./+types/home";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IChTo 2026 - International Chemistry Tournament" },
    { name: "description", content: "International Chemistry Tournament 2026 in Hoengseong, KR - August 15-19, 2026" },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />
      <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-start relative bg-cover bg-center bg-no-repeat snap-start overflow-hidden"
        style={{
          backgroundImage: "url('/landing.jpg')",
          filter: "blur(0px)",
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/landing.jpg')",
            filter: "blur(4px)",
            transform: "scale(1.1)"
          }}
        />
        <div className="relative z-10 text-left text-white px-4 ml-8 md:ml-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            International<br />Chemistry<br />Tournament 2026
          </h1>
          <p className="text-xl md:text-2xl">
            15-19 August 2026<br />in Hoengseong, KR
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section min-h-screen flex items-center py-20 snap-start relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/home_about.jpg')",
            filter: "blur(4px)",
            transform: "scale(1.1)"
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white bg-opacity-90 py-24 px-12 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  About <span className="emphasis">IChTo 2026</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  is a team competition for high school students, 
                  with a format based on scientific debates starting from problems with open solutions. Having a 
                  novel approach in education, as compared to classical Olympiads, the accent is on both scientific 
                  and soft skills. As a result, creativity, teamwork, critical thinking, and public speaking are 
                  very important to succeed in this contest.
                </p>
                <a 
                  href="/about" 
                  className="inline-flex items-center text-blue-900 hover:text-blue-100 underline mt-4 text-lg"
                >
                  View details
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="text-center">
                <img 
                  src="/logo_2025.png" 
                  alt="IChTo 2026 Logo" 
                  className="max-w-full h-auto mx-auto"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors-section min-h-screen flex items-center py-20 snap-start bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
            Our Sponsors
          </h2>
          <div className="text-gray-600">
            <p>Sponsor information will be updated soon.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer-section h-auto snap-start">
        <Footer />
      </section>
      </div>
    </div>
  );
}
