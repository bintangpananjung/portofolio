import { projectData } from "../data/projectData";
import ProjectCard from "./ProjectCard";
import stars from "../assets/mult-stars.png";

const Projects = ({ ref }) => {
  return (
    <div
      id="projects"
      className="flex flex-col py-32 min-h-[42rem] h-fit relative"
    >
      <div className="flex flex-row justify-between">
        <p className="bg-gradient-to-r from-[#edca85] to-[#a162e8] bg-clip-text text-transparent text-6xl pb-2 sm:w-fit xs:w-full sm:text-left xs:text-center">
          Projects
        </p>
        <img src={stars} alt="" className="h-20 xs:hidden sm:block" />
      </div>
      <p className="mt-2 mb-8 sm:text-left xs:text-center">
        These are my projects during my study in Bandung of Institute
        Technology.
      </p>
      {projectData.map((el, idx) => {
        return (
          <ProjectCard
            reversed={el.reversed}
            title={el.title}
            job={el.job}
            desc={el.desc}
            imgSource={el.imgSource}
            tags={el.tags}
            sourceLink={el.sourceLink}
            visitLink={el.visitLink}
            key={idx}
          />
        );
      })}
    </div>
  );
};

export default Projects;
