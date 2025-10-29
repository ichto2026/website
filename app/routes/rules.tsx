import HeroImage from "~/components/HeroImage";
import ImageNText from "~/components/ImageNText";
import type { Route } from "./+types/rules";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rules and Format - IChTo 2026" },
    { name: "description", content: "Rules and Format of International Chemistry Tournament 2026" },
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
    <button className={`min-h-12 min-w-12 px-5 py-2 rounded-2xl transition-colors font-medium text-lg ${selected ? "bg-blue-800 text-white" : "bg-gray-100 text-gray-800 hover:bg-blue-100"}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default function Rules() {
  const contentProcedure = "Content for Procedure";
  const contentReporter = "Content for Reporter";
  const contentOpponent = "Content for Opponent";
  const contentReviewer = "Content for Reviewer";
  const contentJury = "Content for Jury";
  const images = ["/procedure.jpg", "/reporter.jpg", "/opponent.jpg", "/reviewer.jpg", "/jury.jpg"];

  let [selected, setSelected] = useState("Procedure");
  const [content, setContent] = useState(contentProcedure);
  return (
    <div className="min-h-screen">
      {/* Hero Section with About.jpg background */}
      <HeroImage title="Rules and Format" imageUrl="/rules.jpg" />

      {/* Rules Section */}
      <div className="container mx-auto px-4 text-center my-16 flex justify-around items-center">
        <Btn selected={selected === "Procedure"} onClick={() => {setSelected("Procedure"); setContent(contentProcedure);}}>
          <span className="hidden md:inline">Procedure</span>
        </Btn>
        <div className="flex-1 h-px bg-gray-300 md:mx-4"></div>
        <Btn selected={selected === "Reporter"} onClick={() => {setSelected("Reporter"); setContent(contentReporter);}}>
          <span className="hidden md:inline">Reporter</span>
        </Btn>
        <div className="flex-1 h-px bg-gray-300 md:mx-4"></div>
        <Btn selected={selected === "Opponent"} onClick={() => {setSelected("Opponent"); setContent(contentOpponent);}}>
          <span className="hidden md:inline">Opponent</span>
        </Btn>
        <div className="flex-1 h-px bg-gray-300 md:mx-4"></div>
        <Btn selected={selected === "Reviewer"} onClick={() => {setSelected("Reviewer"); setContent(contentReviewer);}}>
          <span className="hidden md:inline">Reviewer</span>
        </Btn>
        <div className="flex-1 h-px bg-gray-300 md:mx-4"></div>
        <Btn selected={selected === "Jury"} onClick={() => {setSelected("Jury"); setContent(contentJury);}}>
          <span className="hidden md:inline">Jury</span>
        </Btn>
      </div>
      <ImageNText
        title={selected}
        description={content}
        imageUrl={images[Math.max(0, ["Procedure", "Reporter", "Opponent", "Reviewer", "Jury"].indexOf(selected))]}
        imageAlt={selected}
        reverse={true}
        imageMaxHeight={400}
      />
    </div>
  );
}
