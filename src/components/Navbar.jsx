import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l">
            <h1 className="text-3xl font-bold primary-color ml-4">Genta Arimbawa</h1>
            <ul className="hidden md:flex">
                <li className="p-5"><a href="#home">Home</a></li>
                <li className="p-5"><a href="#about">About</a></li>
                <li className="p-5"><a href="#project">Project</a></li>
                <li className="p-5"><a href="#contact">Contact</a></li>
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? " z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500" : "fixed left-[-100%] "}>
                <h1 className="text-3xl font-bold primary-color m-4">Genta Arimbawa</h1>
                <ul className="p-8 text-2xl">
                    <li className="p-2">Home</li>
                    <li className="p-2">About</li>
                    <li className="p-2">Project</li>
                    <li className="p-2">Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
