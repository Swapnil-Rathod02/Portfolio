import React from "react";

function SkillsPer({ name, per }) {
  return (
    <div id="htmlcss">
      <label htmlFor="html" className="ml-4">
        {name}
      </label>
      <div
        id="html"
        className="h-5 bg-purple-100 rounded-3xl flex items-center "
      >
        <div
          id="inner"
          className={`h-full bg-green-300 w-[${per}%] rounded-3xl shrink-0`}
        ></div>
        <h1 className="text-black font-bold ">{per}%</h1>
      </div>
    </div>
  );
}

export default SkillsPer;
