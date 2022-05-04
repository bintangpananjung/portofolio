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
        I'm Bintang, an Informatics Engineering student at Bandung Institute of
        Technology. I've spent 2 years of learning on full-stack development. I
        started to explore more of website development after I received class
        material about website development. I've done multiple project given by
        my class so I decided to create my own projects. I've created three
        personal projects, but mostly I didn't finish it perfectly. With my
        experience on personal projects, I've my first project given by Liga
        Film Mahasiswa. My second project was given by class with course
        "Software Project". This project linked to a start-up outside the campus
        named Jaramba.id. This is also my first project that I've done with
        teams. That's all about my experiences in developing a website.
      </p>
    </div>
  );
};

export default About;
