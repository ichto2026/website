import HeroImage from "~/components/HeroImage";
import TextNMap from "~/components/TextNMap";
import type { Route } from "./+types/past";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Past Competitions - IChTo 2026" },
    { name: "description", content: "Past Competitions of International Chemistry Tournament 2026" },
  ];
}

export default function PastCompetitions() {
  const winner2025 = `Gold Medal: TOMCTO
Silver Medal: d²sp³, Hungarian Team Red
Bronze Medal: Hungarian Team Green, In our elements
Honourable Mention: The Moles, National College Sfântul Sava
Participation: Cr₆Cl₆, Aztec Alchemists, Veritas Chemica`
  const winner2024 = `Finalists: The Hungarian Hex, Radioactive Chilaquiles, In Olli Kuahtli`
  const winner2023 = `Finalists: Hungarian Team Red, OgaNUSHon, Hungarian Team Green`
  const winner2022 = `Finalists: Nushium Hydride, Hungarian Team Red, Hungarian Team Green`
  const winner2021 = `Finalists: n-undecanethiol, Hungarian Team Green, KVIS Team`
  const winner2019 = `Finalists: NUS H, Hungarian Team Red, In Our Elements`
  const winner2018 = `Finalists: NUS H, Hungarian Team Red, KVIS`
  const winner2017 = `Finalists: Rozhasin Chillampony, Samruk, Tin Plague`
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Past Competitions" imageUrl="/past.jpg" />

      {/* Jury Section */}
      <div className="container mx-auto px-4">
        <TextNMap
          title="IChTo 2025"
          subtitle="Took place in Bucharest, Romania"
          description={winner2025}
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182321.0554501341!2d25.92948691398853!3d44.43795191839808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2z66Oo66eI64uI7JWEIOu2gOy_oOugiOyKiO2LsA!5e0!3m2!1sko!2skr!4v1759593290436!5m2!1sko!2skr"
          revTextColor={false}
          lgMy={20}
        />
        <TextNMap
          title="IChTo 2024"
          subtitle="Took place in Guadalajara, Mexico"
          description={winner2024}
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119452.51307775249!2d-103.41797109489639!3d20.674011710802706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b18cb52fd39b%3A0xd63d9302bf865750!2z66mV7Iuc7L2UIO2VoOumrOyKpOy9lCDso7wg6rO864us65287ZWY6528!5e0!3m2!1sko!2skr!4v1759594244281!5m2!1sko!2skr"
          revTextColor={false}
          lgMy={36}
        />
        <TextNMap
          title="IChTo 2023"
          subtitle="Took place in Tbilisi, Georgia"
          description={winner2023}
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190570.22479711098!2d44.6416125815543!3d41.72786016310777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2z7KGw7KeA7JWEIO2KuOu5jOumrOyLnA!5e0!3m2!1sko!2skr!4v1759594301900!5m2!1sko!2skr"
          revTextColor={false}
          lgMy={36}
        />
        <TextNMap
          title="IChTo 2022"
          subtitle="Took place in Budapest, Hungary"
          description={winner2022}
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345153.19631758484!2d18.507217803466336!3d47.47999006202723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c334d1d4cfc9%3A0x400c4290c1e1160!2z7Zed6rCA66asIOu2gOuLpO2OmOyKpO2KuA!5e0!3m2!1sko!2skr!4v1759594343966!5m2!1sko!2skr"
          revTextColor={false}
          lgMy={36}
        />
        <TextNMap
          title="IChTo 2020/2021"
          subtitle="Online"
          description={winner2021}
          mapUrl=""
          revTextColor={false}
          lgMy={36}
        />
        <TextNMap
          title="IChTo 2019"
          subtitle="Took place in Moscow, Russia"
          description={winner2019}
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577337.1424527738!2d36.72453727171817!3d55.5807223399157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z65-s7Iuc7JWEIOuqqOyKpO2BrOuwlA!5e0!3m2!1sko!2skr!4v1759594461329!5m2!1sko!2skr"
          revTextColor={false}
          lgMy={36}
        />
        <TextNMap
          title="IChTo 2018"
          subtitle="Took place in Moscow, Russia"
          description={winner2018}
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577337.1424527738!2d36.72453727171817!3d55.5807223399157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z65-s7Iuc7JWEIOuqqOyKpO2BrOuwlA!5e0!3m2!1sko!2skr!4v1759594461329!5m2!1sko!2skr"
          revTextColor={false}
          lgMy={36}
        />
        <TextNMap
          title="IChTo 2017"
          subtitle="Took place in Moscow, Russia"
          description={winner2017}
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577337.1424527738!2d36.72453727171817!3d55.5807223399157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z65-s7Iuc7JWEIOuqqOyKpO2BrOuwlA!5e0!3m2!1sko!2skr!4v1759594461329!5m2!1sko!2skr"
          revTextColor={false}
          lgMy={36}
        />
      </div>
    </div>
  );
}