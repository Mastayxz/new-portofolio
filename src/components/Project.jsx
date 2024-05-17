import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/jendelawisata.png";
import proj4 from "../assets/tindog.png";
import proj5 from "../assets/fluent.png";
import proj6 from "../assets/porto.png";
const Project = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-10" id="project">
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Projects</p>
        <p className="text-gray-400">Check out some of my recent projects</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={proj1} alt="project2" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-3xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="https://kelas2a04.lab-trpl.id/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative ">
          <img src={proj2} layout="fill"  objectFit="cover" alt="project2" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-3xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="https://kelas2a04.lab-trpl.id/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative ">
          <img src={proj3} layout="fill"  objectFit="cover" alt="project2" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-3xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="https://kelas2a04.lab-trpl.id/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative ">
          <img src={proj4} layout="fill"  objectFit="cover" alt="project2" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-3xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="https://kelas2a04.lab-trpl.id/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative ">
          <img src={proj5} layout="fill"  objectFit="cover" alt="project2" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-3xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="https://kelas2a04.lab-trpl.id/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  live
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative ">
          <img src={proj6} layout="fill"  objectFit="cover" alt="project6" />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-3xl font-bold text-white tracking-wider"></span>
            <div className="pt-8 text-center">
              <a href="https://kelas2a04.lab-trpl.id/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  live
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
