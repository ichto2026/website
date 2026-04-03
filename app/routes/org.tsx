import HeroImage from "~/components/HeroImage";
import ImageNText from "~/components/ImageNText";
import type { Route } from "./+types/org";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Organizing Committee - IChTo 2026" },
    {
      name: "description",
      content:
        "Organizing Committee for International Chemistry Tournament 2026",
    },
  ];
}

function PeopleList({
  title,
  imageNames,
  names,
  roles = [],
}: {
  title: string;
  imageNames: string[];
  names: string[];
  roles?: string[];
}) {
  const cards = names.map((name, index) => (
    <div
      key={index}
      className="w-40 text-blue-800 mb-4 flex flex-col items-center"
    >
      <picture>
        <source
          srcSet={`/org/${imageNames[index]}.avif`}
          type="image/avif"
          className="w-40 h-40 object-cover rounded-full"
        />
        <img
          src={`/org/${imageNames[index]}.jpg`}
          alt={name}
          loading="lazy"
          className="w-40 h-40 object-cover rounded-full"
        />
      </picture>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      {roles.length > index && <p className="text-gray-600">{roles[index]}</p>}
    </div>
  ));
  return (
    <>
      <h2 className="text-3xl lg:text-5xl font-bold px-4 my-8 md:text-center text-blue-800">
        {title}
      </h2>
      <div
        className={`container mx-auto px-4 text-center mb-16 min-h-40 peoplelist-container`}
      >
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
        description="Korean Minjok Leadership Academy (KMLA), founded in 1996, is a selective residential school dedicated to developing leaders who serve Korea and the world. It emphasizes discussion-driven, research-oriented learning with Korean and international college-level materials, paired with daily physical training, rich arts education, active volunteer service, and strong English usage. Grounded in Korean history and values, KMLA nurtures well-rounded students whose creativity and scholarship are reflected in outstanding results."
        imageUrl="/kmla_logo_icon.png"
        imageAlt="Korean Minjok Leadership Academy Logo"
        reverse
      />
      <PeopleList
        title="IChTo 2026 Steering Committee"
        imageNames={["wonhyeong_jang", "jaehyun_won", "dohui_kim"]}
        names={["Wonhyeong Jang", "Jaehyun Won", "Dohui Kim"]}
        roles={[
          "KMLA Chemistry Teacher",
          "IChTo-2025 Gold Medalist",
          "IChTo-2025 Gold Medalist",
        ]}
      />
      <PeopleList
        title="Chief Moderators"
        imageNames={[
          "jaehyun_won",
          "dohui_kim",
          "songyeon_shin",
          "allison_chun",
        ]}
        names={["Jaehyun Won", "Dohui Kim", "Songyeon Shin", "Allison Chun"]}
        roles={[
          "IChTo-2025 Gold Medalist",
          "IChTo-2025 Gold Medalist",
          "IChTo-2025 Gold Medalist",
          "IChTo-2025 Gold Medalist",
        ]}
      />
      <PeopleList
        title="Media & Support"
        imageNames={[
          "jeonguk_choi",
          "seungbeen_hur",
          "jinwoo_an",
          "sungyeol_choi",
        ]}
        names={["Jeonguk Choi", "Seungbeen Hur", "Jinwoo An", "Sungyeol Choi"]}
        roles={["Technology Head", "OutReach Head", "Contents Head", "Advisor"]}
      />
      <PeopleList
        title="Volunteers"
        imageNames={[
          "chaeah_lee",
          "dajeong_youn",
          "eunbi_choi",
          "haseong_jung",
        ]}
        names={["Chaeah Lee", "Dajeong Youn", "Eunbi Choi", "Haseong Jung"]}
      />
    </div>
  );
}
