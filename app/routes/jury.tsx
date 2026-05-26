import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/jury";
import JuryCard from "~/components/JuryCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jury Members - IChTo 2026" },
    {
      name: "description",
      content: "Jury Members of International Chemistry Tournament 2026",
    },
  ];
}

export default function Jury() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with jury_page.jpg background */}
      <HeroImage title="Jury Members" imageUrl="/jury_page.jpg" />

      <div className="container mx-auto px-8 lg:px-24 my-24 grid grid-cols-1 md:grid-cols-2 gap-4">
        <JuryCard
          name="Gleb Aleshin"
          institute="King’s Ely"
          nation="United Kingdom"
        />

        <JuryCard
          name="Changyoun Lee"
          institute="Korean Minjok Leadership Academy"
          nation="Republic of Korea"
        />

        <JuryCard
          name="Heejun An"
          institute="Korean Minjok Leadership Academy"
          nation="Republic of Korea"
        />

        <JuryCard
          name="Sangtae Oh"
          institute="Korean Minjok Leadership Academy"
          nation="Republic of Korea"
        />

        <JuryCard
          name="Hyeonseo Jung"
          institute="Korean Minjok Leadership Academy"
          nation="Republic of Korea"
        />

        <JuryCard
          name="Nasko Yuriev Stamenov"
          institute="National High School of Science and Mathematics"
          nation="Bulgaria"
        />

        <JuryCard
          name="Ádám Márk Pálvölgyi"
          institute="Raiffeisen Software GmbH"
          nation="Hungary"
        />

        <JuryCard
          name="Bence Nagy"
          institute="Semmelweis University"
          nation="Hungary"
        />

        <JuryCard
          name="Francesca Alexandra Constantin"
          institute="Carol Davila University of Medicine and Pharmacy"
          nation="Romania"
        />

        <JuryCard
          name="Ștefan Dimitriu"
          institute="University of Bucharest"
          nation="Romania"
        />

        <JuryCard
          name="Fazliev Timur"
          institute="SESC NSU"
          nation="Russian Federation"
        />

        <JuryCard
          name="Anamarija Nikoletić"
          institute="University of Basel"
          nation="Serbia"
        />

        <JuryCard
          name="Dimitrije Gligorovski"
          institute="University of Belgrade"
          nation="Serbia"
        />

        <JuryCard
          name="Filip Koldzic"
          institute="École polytechnique fédérale de Lausanne"
          nation="Switzerland"
        />

        <JuryCard
          name="Matthew John Paul Smith"
          institute="St Paul's School"
          nation="United Kingdom"
        />
      </div>
    </div>
  );
}

