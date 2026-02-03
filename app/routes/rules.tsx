import HeroImage from "~/components/HeroImage";
import ImageNText from "~/components/ImageNText";
import type { Route } from "./+types/rules";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rules and Format - IChTo 2026" },
    {
      name: "description",
      content: "Rules and Format of International Chemistry Tournament 2026",
    },
  ];
}

function Btn({
  selected = false,
  onClick,
  children,
}: {
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      className={`h-12 min-w-12 px-5 py-2 rounded-2xl transition-colors font-medium text-md lg:text-lg ${selected ? "bg-blue-800 text-white" : "bg-gray-100 text-gray-800 hover:bg-blue-100"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function Rules() {
  const contentRules = `The tournament itself consists of several stages. The first five rounds are called the “Semi-Final Stages”. They can be compared to the group phase of soccer competitions. All teams participate in five Selective Fights. The three teams with the highest total sum of points after the “Semi-Final Stages” reach the “Final Stage”, which eventually determines the winning team.

During one Stage each team has a specific role to play. These roles are exchanged after each Stages each team has played each role exactly once.

The roles are:
  • Reporter
  • Opponent
  • Reviewer
  • In groups with four teams: Observer

Each participating student may take the role of Reporter, Opponent, and Reviewer only once for each role during the Semi-finals or else the team receives a penalty.
`;
  const contentProcedure = `The course of a stage is precisely regulated by the tournament regulations. Each of the phases described here has a maximum duration. This maximum duration may not be exceeded. Usually, there is a special monitor available which displays a graphical representation of how much time is left in the current phase. 

CHALLENGE 
After the mentioned introduction, the Opponent-Team must challenge the Reporter-Team for one of the 17 tasks. Reporter-Team can accept or reject the challenge. There is a regulation in how many times a team can reject.
If a problem has been selected, the Reporter Team and the Opponent Team announce the name of the speakers.

REPORT 
After the preparation time, the Reporter presents the Report. The presentation is strictly monologue and no one except the reporter can intervene. The reporter presents its original solution to the problem. 

OPPOSE 
After the presentation of the Report, the Opponent gets preparation time before opposing the reporter’s solution. The opponent must be relevant, clear and precise This speech is also strictly monologue. No one except the opponent can intervene.
After the opponent's speech, the reporter has to defend the opponent's claim. Then, the reporter and opponent have an open discussion. Both teams can freely raise concerns and refute each other’s claims.

REVIEW 
After a short preparation time, the Reviewer Team can ask questions to present an overview of the performance of the Opponent.
And finally, the jurors may ask some short questions to all three teams. After that the performance of the teams in the current Stage is graded.
For a more detailed overview of the Stage regulations please confer the official tournament regulations.
`;
  const contentReporter = `The Reporter represents the team during the presentation of a selected problem. After the Opponent issues a challenge and the team accepts it, the Reporter gives a full report on the problem. It must be a monologue, and no other team members can assist. The Reporter outlines the theoretical basis, describes the experiment, presents the results, and explains the conclusion. The main goal is to communicate what was done, how it was done, and what was found. The explanation must be direct and accurate.

After the presentation, the Opponent delivers a statement of comments and criticism. When the Opponent finishes, the Reporter responds. During this time, the Reporter answers the main objections, corrects misunderstandings, and clarifies essential points.

Once the defense speech is complete, the Reporter engages in a short scientific dialogue with the opponent. The Reporter must address technical questions, explain limitations, and justify the model or results when asked. 

In summary, the Reporter’s role is to present the team’s research, respond to opposition, and display clear chemical reasoning. The task demands careful preparation, complete knowledge of the problem, and the ability to defend all parts of the solution logically.
`;
  const contentOpponent = `The Opponent evaluates and critiques the Reporter’s presentation. After the Reporter team accepts a challenge, the Opponent becomes responsible for analyzing the chosen problem and preparing comments on the presented solution. The role begins after the Reporter’s report. The Opponent then delivers a structured critique. This critique is a monologue and must focus on the scientific content of the Reporter’s work.

The purpose of the Opponent’s speech is to identify strengths and weaknesses in the Reporter’s theory, experiment, and interpretation. The Opponent must point out possible errors, unclear assumptions, or missing reasoning, while recognizing correct results when appropriate. Introducing the opponent's own solution is not allowed. The opponent must discuss only the points covered by the reporter.

After the main critique, the Reporter gives a defense. Then the open discussion begins. In this phase, the Opponent must ask clear and relevant questions, respond to the Reporter’s explanations, and guide the discussion toward the key physical issues. The Opponent should test the coherence of the Reporter’s findings and ensure that claims are consistent with the presented data and models.

In summary, the Opponent’s role is to assess the Reporter’s solution, reveal its strengths and weaknesses, and maintain a scientific debate that improves the understanding of the problem presented.
`;
  const contentReviewer = `The Reviewer acts as the third participant in the stage. The Reviewer listens to both the Reporter’s presentation and the Opponent’s critique. Their task is to evaluate the quality and relevance of both performances and to summarize the scientific discussion. The Reviewer must remain neutral and objective, avoiding any involvement during the previous exchanges.

After the discussion between the Reporter and Opponent ends, the Reviewer gives a short presentation. This speech is also a monologue. The Reviewer must provide a concise overview of the stage, first outlining the main points of the Reporter’s solution and the Opponent’s comments. The Reviewer emphasizes whether the physical model, experimental approach, and data interpretation were solid, and whether the discussion addressed the key scientific aspects of the problem.

The Reviewer’s statement should identify where the Reporter’s work was strong or weak and whether the Opponent’s critique was appropriate and scientifically supported. The goal is not to introduce new arguments but to assess the balance and depth of the discussion. The Reviewer must demonstrate understanding of the problem and the ability to judge scientific argumentation fairly.
`;
  const images = [
    "/procedure.jpg",
    "/reporter.jpg",
    "/opponent.jpg",
    "/reviewer.jpg",
    "/jury.jpg",
  ];

  let [selected, setSelected] = useState("General Rules");
  const [content, setContent] = useState(contentRules);
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Rules and Format" imageUrl="/rules.jpg" />

      {/* Rules Section */}
      <div className="container mx-auto px-4 lg:px-20 text-center my-16 flex justify-around items-center">
        <Btn
          selected={selected === "General Rules"}
          onClick={() => {
            setSelected("General Rules");
            setContent(contentRules);
          }}
        >
          <span className="hidden md:inline">General Rules</span>
        </Btn>
        <div className="flex-1 h-px bg-gray-300 md:mx-4"></div>
        <Btn
          selected={selected === "Procedure"}
          onClick={() => {
            setSelected("Procedure");
            setContent(contentProcedure);
          }}
        >
          <span className="hidden md:inline">Procedure</span>
        </Btn>
        <div className="flex-1 h-px bg-gray-300 md:mx-4"></div>
        <Btn
          selected={selected === "Reporter"}
          onClick={() => {
            setSelected("Reporter");
            setContent(contentReporter);
          }}
        >
          <span className="hidden md:inline">Reporter</span>
        </Btn>
        <div className="flex-1 h-px bg-gray-300 md:mx-4"></div>
        <Btn
          selected={selected === "Opponent"}
          onClick={() => {
            setSelected("Opponent");
            setContent(contentOpponent);
          }}
        >
          <span className="hidden md:inline">Opponent</span>
        </Btn>
        <div className="flex-1 h-px bg-gray-300 md:mx-4"></div>
        <Btn
          selected={selected === "Reviewer"}
          onClick={() => {
            setSelected("Reviewer");
            setContent(contentReviewer);
          }}
        >
          <span className="hidden md:inline">Reviewer</span>
        </Btn>
      </div>
      <ImageNText
        title={selected}
        description={content}
        imageUrl={
          images[
            Math.max(
              0,
              [
                "General Rules",
                "Procedure",
                "Reporter",
                "Opponent",
                "Reviewer",
              ].indexOf(selected),
            )
          ]
        }
        imageAlt={selected}
        reverse={true}
      />
      <h2 className="text-2xl sm:text-3xl text-center text-gray-600 px-8 sm:px-16 sm:mb-8">
        Example Videos
      </h2>
      <div className="min-h-[600px] px-4 sm:px-20 mb-12 w-full flex flex-col lg:flex-row justify-around space-y-8">
        <iframe
          src="https://drive.google.com/file/d/1tdqWNpXyhw0jY5OkFg2Bxw6ubjYqrIlS/preview"
          className="w-full h-[240px] lg:w-[600px] md:h-[420px]"
        ></iframe>
        <iframe
          src="https://drive.google.com/file/d/1cH51_nOOAfborAeicx6ljNWySmxMzdVP/preview"
          className="w-full h-[240px] lg:w-[600px] md:h-[420px]"
        ></iframe>
      </div>
    </div>
  );
}
