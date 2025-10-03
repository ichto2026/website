import HeroImage from "~/components/HeroImage";
import ImageNText from "~/components/ImageNText";
import type { Route } from "./+types/about";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rules - IChTo 2026" },
    { name: "description", content: "Rules and Format of International Chemistry Tournament 2026" },
  ];
}

function Btn({
    text,
    selected = false,
    onClick,
  }: {
    text: string;
    selected?: boolean;
    onClick?: () => void;
  }) {
  return (
    <button className={`px-5 py-2 rounded-2xl transition-colors font-medium text-lg ${selected ? "bg-blue-800 text-white" : "bg-gray-100 text-gray-800 hover:bg-blue-100"}`} onClick={onClick}>
      {text}
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
      <HeroImage title="Rules and Format" imageUrl="/about.jpg" />

      {/* Rules Section */}
      <div className="container mx-auto px-4 text-center my-16 h-xl flex justify-around items-center">
        <Btn text="Procedure" selected={selected === "Procedure"} onClick={() => {setSelected("Procedure"); setContent(contentProcedure);}} />
        <div className="flex-1 h-px bg-gray-300 mx-4"></div>
        <Btn text="Reporter" selected={selected === "Reporter"} onClick={() => {setSelected("Reporter"); setContent(contentReporter);}} />
        <div className="flex-1 h-px bg-gray-300 mx-4"></div>
        <Btn text="Opponent" selected={selected === "Opponent"} onClick={() => {setSelected("Opponent"); setContent(contentOpponent);}} />
        <div className="flex-1 h-px bg-gray-300 mx-4"></div>
        <Btn text="Reviewer" selected={selected === "Reviewer"} onClick={() => {setSelected("Reviewer"); setContent(contentReviewer);}} />
        <div className="flex-1 h-px bg-gray-300 mx-4"></div>
        <Btn text="Jury" selected={selected === "Jury"} onClick={() => {setSelected("Jury"); setContent(contentJury);}} />
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
