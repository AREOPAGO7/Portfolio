import React from "react";
import logo from "/public/logo.png";

const Light = () => {
  return (
    <div className="absolute top-[80%] w-full h-[900px] light blur-3xl opacity-30"></div>
  );
};

const Section1 = () => {
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 2xl:grid-rows-12 md:grid-rows-16 pt-6 m-7 h-screen gap-6 2xl:m-20"
        style={{ zIndex: "1" }}
      >
        <div
          style={{
            border: "1px solid #3b3b3b",
            backgroundColor: "#0e0e0e",
            zIndex: "11",
          }}
          className="row-span-1 md:row-span-7 lg:row-span-4 2xl:row-span-4 h-full text-center text-white rounded-2xl shadow-custom"
        >
          <div className="flex items-center justify-center gap-8 p-16 pt-20 w-full flex-wrap">
            <img
              className="hover:scale-[1.1] transition-all ease-linear duration-200"
              src={logo}
              width={"80px"}
              alt=""
            />
            <div className="text-[1rem] font-bold text-white/70 w-fit">
              <span>Anass Kalkhi</span>
              <br />
              <span>Fullstack Web Developer</span>
              <br />
              <span>ISTA NTIC SAFI </span>
            </div>
          </div>
        </div>

        <div
          style={{
            border: "1px solid #3b3b3b",
            backgroundColor: "#0e0e0e",
            zIndex: "10",
          }}
          className="text-center text-white/80 rounded-2xl xl:row-span-6 md:row-span-9 shadow-custom"
        >
          <div className="mt-16">
            <span
              style={{ textShadow: "0px 0px 5px rgba(255,255,255,0.7)" }}
              className="text-4xl font-bold px-1"
            >
              MERN Stack
            </span>
          </div>
          <img
            className="m-auto 2xl:-mb-60 hover:scale-[1.05] transition-all ease-linear duration-200"
            src="./Tech/mern.png"
            width={"340px"}
            alt=""
          />
        </div>

        <div
          style={{
            border: "1px solid #3b3b3b",
            overflow: "hidden",
            backgroundColor: "#0e0e0e",
            zIndex: "10",
          }}
          className="bg-tahiti flex text-center text-white 2xl:row-span-3 md:row-span-8 row-span-9 rounded-xl shadow-custom"
        ></div>

        <div
          style={{
            border: "1px solid #3b3b3b",
            backgroundColor: "#0e0e0e",
            zIndex: "10",
          }}
          className="bg-tahiti text-center text-white rounded-2xl 2xl:row-span-8 md:row-span-9 h-full shadow-custom"
        >
          <p className="m-5 mt-10 text-2xl font-bold text-left pl-5 text-white/60 md:text-[1.8em] leading-9">
            Tailwind's utility-first approach allows for rapid customization,
            while Bootstrap provides a professional websites efficiently.
          </p>

          <div className="flex gap-10 justify-center mb-10">
            <img
              width={"90px"}
              className="mt-8 hover:scale-[1.1] transition-all ease-linear duration-200"
              src="./public/Tech/tailwind.png"
              alt=""
            />
            <img
              width={"90px"}
              className="mt-8 hover:scale-[1.1] transition-all ease-linear duration-200"
              src="./public/Tech/bootstrap.png"
              alt=""
            />
          </div>
        </div>

        <div
          style={{
            border: "1px solid #3b3b3b",
            backgroundColor: "#0e0e0e",
            zIndex: "10",
          }}
          className="bg-tahiti text-center text-white rounded-2xl 2xl:row-span-7 md:row-span-9 h-full shadow-custom"
        >
          <p className="m-9 text-2xl font-bold text-white/60 text-left md:text-[1.7em] leading-9">
            A powerful PHP framework, where I’ve built{" "}
            <span className="text-white">scalable</span> web applications. My
            work includes developing RESTful APIs, using SQL for database
            management.
          </p>

          <div className="flex items-center justify-center gap-20">
            <img
              width={"90px"}
              className="mb-10 hover:scale-[1.1] transition-all ease-linear duration-200"
              src="./Tech/mysql.png"
              alt=""
            />
            <img
              width={"60px"}
              className="mb-6 hover:scale-[1.1] transition-all ease-linear duration-200"
              src="./Tech/laravel.png"
              alt=""
            />
          </div>
        </div>

        <div
          style={{
            border: "1px solid #3b3b3b",
            backgroundColor: "#0e0e0e",
            zIndex: "0",
          }}
          className="bg-tahiti text-center text-white 2xl:row-span-5 md:row-span-6 rounded-2xl shadow-custom"
        >
          <div className="mt-4 2xl:text-5xl sm:text-5xl text-4xl w-[100%] font-bold">
            <h1 className="text-white/60 w-[100%] mt-8">
              <span
                style={{ textShadow: "0px 0px 4px rgba(255,255,255,0.7)" }}
                className="text-white/90"
              >
                Git
              </span>{" "}
              <span className="text-white/60 text-[34px] font-roboto">& </span>
              <span
                style={{ textShadow: "0px 0px 4px rgba(255,255,255,0.7)" }}
                className="text-white/90"
              >
                GitHub
              </span>
            </h1>

            <p className="text-[16px] text-white/55 font-normal mt-3">
              For Version Control System
            </p>

            <img
              className="2xl:w-4/6 sm:w-2/6 w-3/6 md:mb-5 m-auto 2xl:mt-10 mt-8"
              src="./images/git.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
