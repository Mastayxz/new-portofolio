import React from "react";

const Contact = () => {
  return (
    <div className=" mx-auto text-white bg-[#232325] py-8" id="contact">
      <div className="p-5 text-center">
        <h2 className="text-4xl mb-3 font-bold primary-color">Contact Me</h2>
        <p className="text-gray-400">Check out some of my recent projects</p>
      </div>

      <div className="max-w-[800px] mx-auto">
        <div className="mt-4 bg-[#161616] rounded-xl">
          <div className="p-10">
            <form action="#" method="post">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Your Name"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-purple-600"
                    />
                  </div>
                </div>

                <div>
                  <div className="mt-2.5 relative">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Your Email"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-purple-600"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="mt-2.5 relative">
                    <textarea
                      name="Message"
                      id=""
                      placeholder="Your Message"
                      className="bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-purple-600 "
                      rows="4"
                    ></textarea>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="mt-2.5 relative">
                    <button
                      type="submit"
                      className="text-xl w-full p-4 font-semibold text-white bg-primary-color rounded-md hfocus:outline-none focus:border-white"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
