import HeroImage from "~/components/HeroImage";
import type { Route } from "./+types/participants";
import TeamCard from "~/components/TeamCard";

const teamMembers = {
  Radical: [
    { role: "Leader", members: ["Heejun An"] },
    {
      role: "Participant",
      members: [
        "Jaemin Shim (C)",
        "Dongha Kim",
        "Minjun Kang",
        "Seohun Kim",
        "Dongjae Ko",
        "Jeen Jeong",
      ],
    },
  ],
  "Andre's Heritage": [
    { role: "Leader", members: ["Chan-Gyu Park"] },
    {
      role: "Participant",
      members: [
        "Min-joung Kim (C)",
        "So-joung Lee",
        "Yena Choi",
        "Seoyoon Jeong",
      ],
    },
  ],
  PhOBIA: [
    { role: "Leader", members: ["Jinho Oh"] },
    {
      role: "Participant",
      members: [
        "Junmo Jeon (C)",
        "Hayeong Joo",
        "Seyeon Kim",
        "Yeon Yu",
        "Do Hyung Kim",
      ],
    },
  ],
  "d²sp³": [
    { role: "Leader", members: ["Dumitrescu Ștefan-Ionel"] },
    {
      role: "Participant",
      members: [
        "Chiper Matei (C)",
        "Luchian Anemona-Maria",
        "Alexe Mihnea-Gabriel",
        "Vitan Agata-Iulia",
        "Stanciu Mihai",
        "Neag Tudor-Brendan",
      ],
    },
  ],
  "Hungarian Team Green": [
    { role: "Leader", members: ["Dénes Buzafalvi"] },
    {
      role: "Participant",
      members: [
        "Péter Rőthy-Gruber (C)",
        "Dávid Gombos",
        "Péter Balajti",
        "Gréta Molnár",
        "Kinga Emese Bencze",
        "Kálmán István Bálint",
      ],
    },
  ],
  "Nomads A": [
    { role: "Leader", members: ["Rilaa Ahamed Mohamed Nisar"] },
    {
      role: "Participant",
      members: [
        "Diaz Mambetaliev (C)",
        "Dinara Bekova",
        "Samira Abdimalikova",
        "Ilyas Meirachev",
        "Samat Davletbekov",
      ],
    },
  ],
  "Nomads B": [
    { role: "Leader", members: ["Rilaa Ahamed Mohamed Nisar"] },
    {
      role: "Participant",
      members: [
        "Aibike Akzhigitova (C)",
        "Aysima Omokanova",
        "Raiana Sharabidinova",
        "Sanira Ulanovna Ulanova",
      ],
    },
  ],
  TenoCHtitlan: [
    {
      role: "Leader",
      members: ["Sandra Jara Castro", "Andrea Arreola Vargas"],
    },
    {
      role: "Participant",
      members: [
        "Alexis Ivan Hernandez Garcia (C)",
        "Alan Bustinduy Contreras",
        "Iris Barragan Vazquez",
        "Andrea Teresa Figueroa Gracia",
        "Kenya Ximena Vilchis Rivera",
      ],
    },
  ],
  "Hungarian Team Red": [
    { role: "Leader", members: ["Balázs Csoma"] },
    {
      role: "Participant",
      members: [
        "Petra Kovács (C)",
        "Minh Quan Hoang",
        "Bori Kemény",
        "Emma Leiner",
        "Viktória Halász",
        "Zora Borbála Barkó",
      ],
    },
  ],
  Nanohedgehogs: [
    { role: "Leader", members: ["Vasilii Krasnobrov"] },
    {
      role: "Participant",
      members: [
        "Valeriia Romankina (C)",
        "Sofiia Puskova",
        "Ilia Ponomarev",
        "Artur Mufteev",
        "Artur Zavorokhin",
        "Mikhail Panin",
      ],
    },
  ],
  "Periodic acid": [
    { role: "Leader", members: ["Fazliev Timur"] },
    {
      role: "Participant",
      members: [
        "Kazakov Fedor (C)",
        "Gringolts Matvei",
        "Kostromina Ekaterina",
        "Sykchina Sofia",
        "Povelitsina Polina",
        "Kalnaia Ekaterina",
      ],
    },
  ],
  NPMG: [
    { role: "Leader", members: ["Nasko Yuriev Stamenov"] },
    {
      role: "Participant",
      members: [
        "Ivan Asenov Ganchev (C)",
        "Martin Dimitrov Vasilev",
        "Boris Genchev Dobrev",
        "Boris Krasimirov Yankulov",
        "Boris Boyanov Petrov",
        "Philip Ivanov Tanchev",
      ],
    },
  ],
  "In Our Elements": [
    { role: "Leader", members: ["Dimitrije Gligorovski"] },
    {
      role: "Participant",
      members: [
        "Andrej Drobnjaković (C)",
        "Jovan Kulezić",
        "Mateja Radeta",
        "Irina Alimpijević",
        "Una Vujadinović",
      ],
    },
  ],
  "National College Sfantul Sava": [
    { role: "Leader", members: ["Daniela Bogdan"] },
    {
      role: "Participant",
      members: [
        "Diana Dumitrascu",
        "Mihnea Costin Gusita",
        "Daria Stefania Gheorghe",
        "Maria Ruxandra Salagean",
        "Maria Ioana Mircea",
        "Alexia Elena Ruxandra Iordache",
      ],
    },
  ],
  "The Perse-cipitates": [
    { role: "Leader", members: ["Ben Richard Merison"] },
    {
      role: "Participant",
      members: [
        "Rachel Liu (C)",
        "Chenning Liu",
        "Saisha Sarju Mehta",
        "Stephen Ngai",
        "Sophie Zhang",
        "Robert Zhu",
      ],
    },
  ],
  "St Paul's School": [
    { role: "Leader", members: ["Thomas Russell Orr"] },
    {
      role: "Participant",
      members: [
        "Joshua Knox (C)",
        "Ishan Madhok",
        "Haris Naser",
        "Eshan Park",
        "Jake Hope",
        "Richard Zhan",
      ],
    },
  ],
} as const;

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
        <p className="text-md sm:text-lg text-center sm:text-start">
          If a team has registered before but has not followed the process since
          then, please contact ichtokorea@gmail.com and we will take care of it.
        </p>

        <TeamCard
          name="Radical"
          nation="Republic Of Korea"
          roles={teamMembers.Radical}
        />
        <TeamCard
          name="PhOBIA"
          nation="Republic Of Korea"
          roles={teamMembers.PhOBIA}
        />
        <TeamCard
          name="Andre's Heritage"
          nation="Republic Of Korea"
          roles={teamMembers["Andre's Heritage"]}
        />
        {/* <TeamCard name="PoseidonX" nation="Bangladesh" /> */}
        <TeamCard name="NPMG" nation="Bulgaria" roles={teamMembers.NPMG} />
        {/* <TeamCard name="Team Canada" nation="Canada" /> */}
        {/* <TeamCard name="Bani Sweif STEM School" nation="Egypt" /> */}
        {/* <TeamCard name="Volt-X" nation="Egypt" /> */}
        <TeamCard
          name="Hungarian Team Red"
          nation="Hungary"
          roles={teamMembers["Hungarian Team Red"]}
        />
        <TeamCard
          name="Hungarian Team Green"
          nation="Hungary"
          roles={teamMembers["Hungarian Team Green"]}
        />
        {/* <TeamCard name="Unstable Isotope" nation="Kazakhstan" /> */}
        <TeamCard
          name="Nomads A"
          nation="Kyrgyzstan"
          roles={teamMembers["Nomads A"]}
        />
        <TeamCard
          name="Nomads B"
          nation="Kyrgyzstan"
          roles={teamMembers["Nomads B"]}
        />
        <TeamCard
          name="TenoCHtitlan"
          nation="Mexico"
          roles={teamMembers.TenoCHtitlan}
        />
        {/* <TeamCard name="WILLIAMS" nation="Nigeria" /> */}
        {/* <TeamCard name="Yobe State" nation="Nigeria" /> */}
        {/* <TeamCard name="Mr. Ryan fan club" nation="Philippines" /> */}
        <TeamCard
          name="National College Sfantul Sava"
          nation="Romania"
          roles={teamMembers["National College Sfantul Sava"]}
        />
        <TeamCard name="d²sp³" nation="Romania" roles={teamMembers["d²sp³"]} />
        <TeamCard
          name="Periodic acid"
          nation="Russian Federation"
          roles={teamMembers["Periodic acid"]}
        />
        <TeamCard
          name="Nanohedgehogs"
          nation="Russian Federation"
          roles={teamMembers.Nanohedgehogs}
        />
        <TeamCard
          name="In Our Elements"
          nation="Serbia"
          roles={teamMembers["In Our Elements"]}
        />
        {/* <TeamCard name="Allicin Research Group" nation="Thailand" /> */}
        <TeamCard
          name="St Paul's School"
          nation="United Kingdom"
          roles={teamMembers["St Paul's School"]}
        />
        <TeamCard
          name="The Perse-cipitates"
          nation="United Kingdom"
          roles={teamMembers["The Perse-cipitates"]}
        />
      </div>
    </div>
  );
}
