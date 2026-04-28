import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/participants";
import TeamCard from "~/components/TeamCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Participants - IChTo 2026" },
    {
      name: "description",
      content: "Participants for International Chemistry Tournament 2026",
    },
  ];
}

export default function Participants() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with participants.jpg background */}
      <HeroImage title="Participants" imageUrl="/participants.jpg" />

      <div className="container mx-auto px-8 lg:px-24 my-24 grid grid-cols-1 md:grid-cols-2 gap-4">
        <TeamCard name="Radical" nation="Republic Of Korea" />
        <TeamCard name="PhOBIA" nation="Republic Of Korea" />
        <TeamCard name="Andre's Heritage" nation="Republic Of Korea" />
        <TeamCard name="PoseidonX" nation="Bangladesh" />
        <TeamCard name="NPMG" nation="Bulgaria" />
        <TeamCard name="Team Canada" nation="Canada" />
        <TeamCard name="Bani Sweif STEM School" nation="Egypt" />
        <TeamCard name="Volt-X" nation="Egypt" />
        <TeamCard name="Hungarian Team Red" nation="Hungary" />
        <TeamCard name="Hungarian Team Green" nation="Hungary" />
        <TeamCard name="Unstable Isotope" nation="Kazakhstan" />
        <TeamCard name="Nomads" nation="Kyrgyzstan" />
        <TeamCard name="TenoCHtitlan" nation="Mexico" />
        <TeamCard name="WILLIAMS" nation="Nigeria" />
        <TeamCard name="Yobe State" nation="Nigeria" />
        <TeamCard name="Mr. Ryan fan club" nation="Philippines" />
        <TeamCard name="National College Sfantul Sava" nation="Romania" />
        <TeamCard name="d2sp3" nation="Romania" />
        <TeamCard name="Periodic acid" nation="Russian Federation" />
        <TeamCard name="Nanohedgehogs" nation="Russian Federation" />
        <TeamCard name="In Our Elements" nation="Serbia" />
        <TeamCard name="Allicin Research Group" nation="Thailand" />
        <TeamCard name="Astateam" nation="United Kingdom" />
        <TeamCard name="Perse-cipitates" nation="United Kingdom" />
      </div>
    </div>
  );
}
