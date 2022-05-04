import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import style from "../styles/style";

const Header = () => {
  return (
    <div className="w-screen h-24 bg-[#111111] flex flex-row text-white text-[1.3rem] items-center px-16 fixed z-20 overflow-x-auto left-0 top-0 box-border max-w-[100vw] min-w-[100vw]">
      <a className={style.header.navText} href={"#projects"}>
        Projects
      </a>
      <a className={style.header.navText} href={"#technologies"}>
        Technologies
      </a>
      <a className={style.header.navText} href={"#about"}>
        About
      </a>
      <Link to="//github.com/bintangpananjung/" className="ml-auto">
        <FontAwesomeIcon
          icon={faGithub}
          className="h-10 p-3 hover:bg-slate-800 hover:h-11 hover:cursor-pointer rounded-full transition-all duration-300 ease-in-out"
        />
      </Link>
    </div>
  );
};

export default Header;
