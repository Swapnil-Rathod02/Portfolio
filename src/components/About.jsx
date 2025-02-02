import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { RiNodejsLine } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";

function About() {
  return (
    <div className=" text-white/90 h-screen">
      <div className="relative top-24 p-2 sm:flex gap-1">
        <div>
          <img
            className="size-[30rem]  brightness-100 blocks"
            src="/working.png"
            alt=""
          />
        </div>
        <div id="skillcontainer" className="p-3">
          <div id="skillset">
            <h1 className="text-3xl font-bold  ml-3 blocks">Frontend</h1>
            <p className="ml-3 blocks">Frontend Skillset</p>
            <div
              id="skills"
              className="  grid grid-cols-1 gap-6 sm:grid-cols-2 p-3 text-white"
            >
              <div
                id="outer1"
                className="blocks h-12  shadow-lg rounded-md bg-gradient-to-r from-[#133E87] to-[#3d75d7df]"
              >
                <div
                  id="inner1"
                  className="h-full w-[70%] font-bold text-xl  flex p-3 gap-2"
                >
                  <img className="size-7" src="/web2.png" alt="" />
                  Html & Css
                </div>
              </div>
              <div
                id="outer1"
                className="bg-gradient-to-r from-[#133E87] to-[#3d75d7df] h-12  shadow-lg rounded-md blocks"
              >
                <div
                  id="inner1"
                  className="h-full w-[70%] font-bold text-xl  flex p-2 gap-2"
                >
                  <TbBrandJavascript className="size-8" />
                  Javascript
                </div>
              </div>
              <div
                id="outer2"
                className="bg-gradient-to-r from-[#133E87] to-[#3d75d7df] h-12  shadow-lg rounded-md blocks"
              >
                <div
                  id="inner2"
                  className="h-full w-[70%] font-bold text-xl  flex p-3 gap-2"
                >
                  <FaReact className="size-7 " />
                  ReactJs
                </div>
              </div>
              <div
                id="outer"
                className="bg-gradient-to-r from-[#133E87] to-[#3d75d7df] h-12  shadow-lg rounded-md blocks"
              >
                <div
                  id="inner"
                  className="h-full w-[70%] font-bold text-xl  flex p-3 gap-2"
                >
                  <SiTailwindcss className="size-8" />
                  Tailwind
                </div>
              </div>
            </div>
          </div>
          <div id="skillset">
            <h1 className="text-3xl font-bold  ml-3 blocks">Backend</h1>
            <p className="blocks ml-3">Gained skills on Backend</p>
            <div
              id="skills"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 p-3 text-white"
            >
              <div
                id="outer1"
                className="bg-gradient-to-r from-[#133E87] to-[#3d75d7df] h-12  shadow-lg rounded-md blocks"
              >
                <div
                  id="inner1"
                  className="h-full w-[70%] font-bold text-xl  flex p-3 gap-2"
                >
                  <RiNodejsLine className="size-8" />
                  NodeJs
                </div>
              </div>
              <div
                id="outer1"
                className="bg-gradient-to-r from-[#133E87] to-[#3d75d7df] h-12  shadow-lg rounded-md blocks"
              >
                <div
                  id="inner1"
                  className="h-full w-[70%] font-bold text-xl  flex p-2 gap-2"
                >
                  <RiNodejsLine className="size-8" />
                  ExpressJs
                </div>
              </div>
              <div
                id="outer1"
                className="bg-gradient-to-r from-[#133E87] to-[#3d75d7df] h-12  shadow-lg rounded-md blocks"
              >
                <div
                  id="inner1"
                  className="h-full w-[70%] font-bold text-xl  flex p-2 gap-2"
                >
                  <FaPython className="size-8" />
                  Python
                </div>
              </div>
            </div>
          </div>
          <div id="skillset">
            <h1 className="text-3xl font-bold  ml-3 blocks">
              Database Technologies and Tools{" "}
            </h1>

            <div
              id="skills"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 p-3 text-white"
            >
              <div
                id="outer1"
                className="bg-gradient-to-r from-[#133E87] to-[#3d75d7df] h-12  shadow-lg rounded-md blocks"
              >
                <div
                  id="inner1"
                  className="h-full w-[70%] font-bold text-xl  flex p-3 gap-2"
                >
                  <BiLogoMongodb className="size-8" />
                  MongoDB
                </div>
              </div>
              <div
                id="outer1"
                className="bg-gradient-to-r from-[#133E87] to-[#3d75d7df] h-12  shadow-lg rounded-md blocks"
              >
                <div
                  id="inner1"
                  className="h-full w-[70%] font-bold text-xl  flex p-2 gap-2"
                >
                  <GrMysql className="size-8" />
                  MySQL
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

{
  /* <h1 className="text-center  m-auto max-w-full text-3xl ">
Technologies I Learnt
</h1>
<div>
<h1>Web Devlopment</h1>
<div
  id="skill_section"
  className="mt-4 grid columns-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3"
>
  <SkillCard tech={"Web Devlopment"} src={"/web2.png"} />
  <SkillCard tech={"ReactJs"} src={"/reacticon.png"} />
  <SkillCard tech={"Web Devlopment"} src={"/icon1.png"} />
  <SkillCard tech={"Web Devlopment"} src={"/working.png"} />
</div>
</div> */
}
