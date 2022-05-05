import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="flex lg:flex-row xs:flex-col py-10 min-h-[10rem] h-fit relative items-center border-t-2 border-[#edca85]">
      <p>Excited about having new project experience</p>
      <div className="flex lg:flex-row ml-auto lg:w-[30rem] xs:w-full xs:flex-col justify-between items-center lg:mt-0 xs:mt-3">
        <div className="flex items-end">
          <FontAwesomeIcon icon={faMobileAlt} className="h-6 text-white" />
          <p className="ml-4">(+62) 87782396891</p>
        </div>
        <div className="flex items-end">
          <FontAwesomeIcon icon={faEnvelope} className="h-6 text-white" />
          <p
            className="ml-4"
            onClick={e => {
              window.location.href = "mailto:pananjungbintang@gmail.com";
              e.preventDefault();
            }}
          >
            pananjungbintang@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
