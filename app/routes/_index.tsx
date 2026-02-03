import type { Route } from "./+types/_index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "IChTo 2026 - International Chemistry Tournament" },
    {
      name: "description",
      content:
        "International Chemistry Tournament 2026 in Hoengseong, KR - August 15-19, 2026",
    },
  ];
}

export default function Home() {
  return (
    <div className="landing-container bg-gray-50">
      {/* Hero Section */}
      <section
        className="hero-section min-h-screen flex items-center justify-start relative bg-cover bg-center bg-no-repeat overflow-hidden"
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
            transform: "scale(1.1)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,1) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,1) 100%)", // 블러 처리 퍼센트 (현재 30%) 는 나중에 의견 수렴 후 조정
          }}
        />
        <div className="container relative z-10 text-left text-white mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            International
            <br />
            Chemistry
            <br />
            Tournament 2026
          </h1>
          <p className="text-xl md:text-2xl">
            15-19 August 2026
            <br />
            in Hoengseong, KR
          </p>
          <p className="text-xl mt-4 text-red-400 bg-gray-200 sm:w-98 text-center">
            Problem Sets and Schedules are released!
          </p>
        </div>
      </section>
    </div>
  );
}
