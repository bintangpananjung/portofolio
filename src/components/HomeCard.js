import React from "react";
import multStars from "../assets/stars.png";

const HomeCard = () => {
  return (
    <div className="flex flex-row py-32 min-h-[42rem] h-screen relative items-center overflow-hidden">
      <div className="flex flex-col max-w-4xl w-full">
        <p className="bg-gradient-to-r from-[#edca85] to-[#a162e8] bg-clip-text text-transparent text-6xl pb-2 sm:w-fit xs:w-full sm:text-left xs:text-center">
          Hi, I'm Bintang
        </p>
        <p className="mt-2 sm:text-left xs:text-center">
          a fresh graduate in Informatics Engineering from ITB (Bandung
          Institute of Technology) with a strong enthusiasm for gaining
          experience, particularly in the role of a fullstack engineer.
        </p>
      </div>
      <div className="w-full justify-around xs:hidden xl:flex">
        <div className=" rounded-full h-20 w-20 bg-white self-end bg-gradient-to-r from-[#edca85] to-[#a162e8] "></div>
        <img src={multStars} alt="" className="h-96 " />
        <div className=" rounded-full xl:h-20 xl:w-20 bg-white bg-gradient-to-r from-[#edca85] to-[#a162e8] "></div>
      </div>
    </div>
  );
};

export default HomeCard;
