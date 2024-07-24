import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { content } from "../Content";
 

const Hero = () => {
  const { hero } = content;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"></div>

        {/* Content Column */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h1>Hi..</h1>
          <br />
          <br />
          <h1 className="text-[#490f9b]">
            <span className="font-Inria ">I am, </span>
            <br/>
            {hero.firstName}{"   "}
            <span className="text-[#490f9b]">{hero.LastName}</span>
          </h1>
          <br />

          {/* Display currentText in the same h2 */}
          <h2 className="text-2xl lg:text-5xl">
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "Software Engineer",
                2000,
                "",
              ]}
              speed={20}
              repeat={Infinity}
              className="text-[#490f9b]"
            />
          </h2>
          <br />
          <div className="flex items-center justify-between ">
            {/* Logos on the Left */}
            <div className="flex items-center animate-bounce">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/raushan-kumar-a7b646266/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center mr-4`}
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                  alt="LinkedIn"
                  className={`w-8 h-8 mr-2  hover:scale-125`}
                />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com/Raus82985"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center mr-4`}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="GitHub"
                  className={`w-8 h-8 mr-2 hover:scale-125`}
                />
              </a>
              {/* Gmail */}
              <a
                href="mailto:ece21144@iiitkalyani.ac.in"
                className={`flex items-center`}
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-new-logos-1/32/gmail_new_logo-512.png"
                  alt="Gmail"
                  className={`w-8 h-8 mr-2 hover:scale-125`}
                />
              </a>
            </div>
            {/* Resume Button */}
            <button
              className={`btn ${isHovered ? "bg-white" : ""} ${
                isHovered && window.innerWidth >= 768 ? "bg-blue-200" : ""
              } hover:scale-110`}
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1STPNwit4BczYirfZgYeJ-dgm0UIiIV1s/view?usp=sharing",
                  "_blank"
                )
              }
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {hero.btnText}
            </button>
          </div>
        </div>

        {/* Image Column */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

