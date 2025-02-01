import React from "react";
import SkillsPer from "./SkillsPer";

function SkillCard({ tech, src }) {
  return (
    <div className=" bg-black/30 border-white/50 rounded border-2 backdrop-blur-sm  p-6 space-y-4 w-80 mt-3  hover:scale-105 shadow-lg">
      <img src={`${src}`} alt="" className="size-32 ml-16" />
      <h1 className="text-center text-2xl font-bold">{tech}</h1>
      <SkillsPer per={70} name={"html & css"} />
      <SkillsPer per={70} name={"javacript"} />
    </div>
  );
}

export default SkillCard;
