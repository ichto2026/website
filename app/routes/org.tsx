import HeroImage from "~/components/HeroImage";
import ImageNText from "~/components/ImageNText";
import type { Route } from "./+types/org";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Organizing Committee - IChTo 2026" },
    { name: "description", content: "Organizing Committee for International Chemistry Tournament 2026" },
  ];
}

function PeopleList({
  title,
  imageUrls,
  names,
  roles = [],
  cols = 3
}: {
  title: string;
  imageUrls: string[];
  names: string[];
  roles?: string[];
  cols?: number;
}) {
  const cards = names.map((name, index) => (
    <div key={index} className="w-40 text-blue-800 mb-4 flex flex-col items-center">
      <img src={imageUrls[index]} alt={name} className="w-40 h-40 object-cover rounded-full" />
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      {roles.length > index && <p className="text-gray-600">{roles[index]}</p>}
    </div>
  ));
  return (
    <>
      <h2 className="text-3xl lg:text-5xl font-bold px-4 my-8 md:text-center text-blue-800">
          {title}
      </h2>
      <div className={`container mx-auto px-4 text-center mb-16 grid grid-cols-1 md:grid-cols-${cols.toString()} place-content-start justify-items-center min-h-40`}>
        {cards}
      </div>
    </>
  );
}

export default function OrganizingCommittee() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Organizing Committee" imageUrl="/org.jpg" />

      {/* Organizing Committee Section */}
      <ImageNText
        title="Organizer"
        subtitle="Korean Minjok Leadership Academy"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        imageUrl="/kmla_logo_icon.png"
        imageAlt="Korean Minjok Leadership Academy Logo"
        reverse
      />
      <PeopleList
        title="IChTo 2026 Steering Committee"
        imageUrls={Array(3).fill("/kmla_logo_icon.png")}
        names={["Won-Hyeong Jang", "Jae-Hyun Won", "Dy-Hye Kim"]}
      />
      <PeopleList
        title="Chief Moderators"
        imageUrls={Array(4).fill("/kmla_logo_icon.png")}
        names={["Yeong-Hyun Chun", "Do-Hye Kim", "Jae-Hyun Won", "Song-Hyun Shin"]}
        cols={4}
      />
      <PeopleList
        title="Media & Support"
        imageUrls={Array(6).fill("/kmla_logo_icon.png")}
        names={["Jeong-Uk Choi", "Seong-Bin Heo", "Jin-Woo Ahn", "Anon", "Anon", "Anon"]}
        cols={3}
      />
      <PeopleList
        title="Volunteers"
        imageUrls={Array(22).fill("/kmla_logo_icon.png")}
        names={Array(22).fill("Anon")}
        cols={4}
      />
    </div>
  );
}