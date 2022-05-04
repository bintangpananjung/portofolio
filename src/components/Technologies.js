import React from "react";
import stars from "../assets/mult-stars.png";
import reacticon from "../assets/reacticon.png";
import codeignitericon from "../assets/codeignitericon.png";
import nextjsicon from "../assets/nextjsicon.png";
import firebaseicon from "../assets/firebaseicon.png";
import kotlinicon from "../assets/kotlinicon.png";
import expressjsicon from "../assets/expressjsicon.png";
import figmaicon from "../assets/figmaicon.png";
import unityicon from "../assets/unityicon.png";
const Technologies = () => {
  return (
    <div
      id="technologies"
      className="flex flex-col py-24 min-h-[30rem] h-fit relative"
    >
      <div className="flex flex-row-reverse justify-between">
        <p className="bg-gradient-to-r from-[#edca85] to-[#a162e8] bg-clip-text text-transparent text-6xl pb-2 sm:w-fit xs:w-full sm:text-right xs:text-center">
          Technologies
        </p>
        <img src={stars} alt="" className="h-20 xs:hidden sm:block" />
      </div>
      <p className="mt-2 mb-8 sm:text-right xs:text-center">
        These are the technologies i've learned and used during my study in
        Bandung of Institute Technology.
      </p>
      <div className="flex sm:flex-row xs:flex-col flex-wrap w-full justify-around mt-10 xs:max-h-60">
        <div className="flex flex-row items-center text-lg mb-3">
          <img src={reacticon} alt="" className="h-11 mr-3" />
          <p>React JS</p>
        </div>
        <div className="flex flex-row items-center text-lg mb-3">
          <img src={nextjsicon} alt="" className="h-11 mr-3" />
          <p>Next JS</p>
        </div>
        <div className="flex flex-row items-center text-lg mb-3">
          <img src={expressjsicon} alt="" className="h-11 mr-3" />
          <p>Express JS</p>
        </div>
        <div className="flex flex-row items-center text-lg mb-3">
          <img src={firebaseicon} alt="" className="h-11 mr-3" />
          <p>Firebase</p>
        </div>
        <div className="flex flex-row items-center text-lg mb-3">
          <img src={codeignitericon} alt="" className="h-11 mr-3" />
          <p>CodeIgniter4</p>
        </div>
        <div className="flex flex-row items-center text-lg mb-3">
          <img src={figmaicon} alt="" className="h-11 mr-3" />
          <p>Figma</p>
        </div>
        <div className="flex flex-row items-center text-lg mb-3">
          <img src={kotlinicon} alt="" className="h-11 mr-3" />
          <p>Kotlin</p>
        </div>
        <div className="flex flex-row items-center text-lg mb-3">
          <img src={unityicon} alt="" className="h-11 mr-3" />
          <p>Unity</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
