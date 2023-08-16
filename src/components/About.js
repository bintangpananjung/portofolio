import React from "react";
import stars from "../assets/mult-stars.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col py-24 min-h-[30rem] h-fit relative"
    >
      <div className="flex flex-row justify-between">
        <p className="bg-gradient-to-r from-[#edca85] to-[#a162e8] bg-clip-text text-transparent text-6xl pb-2 sm:w-fit xs:w-full sm:text-left xs:text-center">
          About
        </p>
        <img
          src={stars}
          alt=""
          className="h-20 xs:hidden sm:block sm:text-left xs:text-center"
        />
      </div>

      <p className=" text-justify sm:pr-20  xs:pr-0">
        Hello, I'm Bintang, a fresh graduate in Informatics Engineering from
        ITB. I have spent 3 years learning into full-stack web development, with
        a significant portion dedicated to projects, internships, and part-time
        positions. During my internships and part-time roles, I gained valuable
        insights into the realm of frontend engineering, particularly in
        collaborative team environments. Several fullstack development projects
        have further enhanced my skills. I hold a keen interest in mobile app
        development for the future, which I plan to initiate through personal
        projects.
      </p>
    </div>
  );
};

export default About;
