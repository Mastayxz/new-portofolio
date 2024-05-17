import React from "react";
import profilepic from "../assets/transparant.png";
import blob from "../assets/blob.svg";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div>
      <div className="my-7 sm:my-0 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center" id="home">
        <div className=" flex-col my-auto mx-auto">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">
            Hi I'm Genta
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            <TypeAnimation
              sequence={[
                "Full Stack Dev",
                1000,
                "Sistem Analyst",
                1000,
                "Web designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-300 ">
              With  5+ project experience
            </p>
          </div>
          <div className="text-5xl flex justify-start gap-16 my-7 text-purple-600">
            <AiFillGithub />
            <AiFillInstagram />
            <AiFillLinkedin />
          </div>
          <div className="relative inline-flex group my-3">
            <div className="absolute transition-all duration-1000 opacity-70 inset-px bg-gradient-to-r from-[#448cff] via-[#ff44ec] to-[#ff675e] rounded-xl blur-lg group-hover:opacity-100 group-hover:inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="/"
              title="Download CV"
              role="button"
              class="bg-primary-color w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Downoad CV
            </a>
          </div>
        </div>

        <div className="mb-5 flex justify-center">
          <div className="relative">
            <img
              className="w-[300px] sm:w-[500px] mx-auto h-auto rounded-full"
              src={profilepic}
              alt="profile pic"
            />
            <img
              className="absolute top-14 left-0 w-[400px] sm:w-[600px] mx-auto h-auto rounded-full -z-10"
              src={blob}
              alt="profile pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
