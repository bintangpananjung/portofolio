import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  reversed,
  imgSource,
  desc,
  tags,
  title,
  job,
  sourceLink,
}) => {
  return (
    <div
      className={
        "flex justify-between mb-8 bg-[#191919] p-5 rounded-lg pb-7 xs:flex-col " +
        (reversed ? "lg:flex-row-reverse" : "lg:flex-row")
      }
    >
      <div className="flex xs:min-w-0 sm:min-w-[30rem] max-w-2xl justify-center items-center">
        <img src={imgSource} alt="" className="" />
      </div>
      <div className="w-16 min-w-[4rem]"></div>
      <div className="flex flex-col max-w-[52rem]">
        <p className="text-3xl border-b-2 border-[#edca85] w-fit mb-3 text-[#edca85]">
          {title}
        </p>
        <p className=" italic">{job}</p>
        <p className=" text-justify">{desc}</p>
        <div className="flex flex-row my-7 flex-wrap">
          {tags?.map((el, idx) => {
            return (
              <p key={el + idx} className="text-[#edca85] mr-8">
                {el.toUpperCase()}
              </p>
            );
          })}
        </div>
        {sourceLink ? (
          sourceLink.map((el, idx) => {
            var linksource = "Source";
            if (sourceLink.length > 1) {
              if (idx == 0) {
                linksource = "Frontend Source";
              }
              if (idx == 1) {
                linksource = "Backend Source";
              }
            }
            return (
              <Link
                key={idx}
                to={el}
                className=" self-center bg-[#a162e8] rounded-md hover:bg-[#edca85] px-4 py-2 transition-all duration-150 mb-2"
              >
                {linksource}
              </Link>
            );
          })
        ) : (
          <p className="self-center italic text-red-500 py-2">Private Source</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
