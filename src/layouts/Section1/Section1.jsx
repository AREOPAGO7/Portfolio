/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import logo from "/public/logo.png";

const Section1 = () => {
  const texts = ["I'm Anass Kalkhi", "I'm 19 years old"];
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        if (isErasing) {
          // Erase the text
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
            setDisplayText((prev) => prev.slice(0, charIndex - 1));
          } else {
            // Switch to the next text after erasing
            setIsErasing(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
            setCharIndex(0);
          }
        } else {
          // Type the text
          if (charIndex < texts[textIndex].length) {
            setCharIndex((prev) => prev + 1);
            setDisplayText(() => texts[textIndex].slice(0, charIndex + 1));
          } else {
            // Start erasing after a delay
            // eslint-disable-next-line no-unused-vars
            const eraseTimeout = setTimeout(() => {
              setIsErasing(true);
            }, 2000);
          }
        }
      },
      isErasing ? 120 : 100
    ); // Speed of typing and erasing

    return () => clearInterval(interval);
  }, [isErasing, charIndex, textIndex]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 2xl:grid-rows-12 md:grid-rows-16 pt-6 m-7 h-fit gap-6 2xl:m-20">
      <div
        style={{
          border: "1px solid #3b3b3b",
          zIndex: "11",
          position: "relative",
        }}
        className="bg-[#050505] row-span-1 md:row-span-7 lg:row-span-4 2xl:row-span-4 h-full text-center text-white rounded-2xl"
      >
        <div className=" flex items-center justify-start gap-8 p-16 pt-24 w-full">
          <img
            style={{
              boxShadow:
                "0 4px 7px rgba(128, 128, 128, 0.4), 0 8px 30px rgba(128, 128, 128, 0.15)",
              borderRadius: "50%",
            }}
            className="hover:scale-[1.1] transition-all ease-linear duration-200"
            src={logo}
            width={"80px"}
            alt="Logo"
          />
          <div className="text-[1rem] font-bold text-white/70 text-left overflow-hidden">
            <span className="text-[1rem] whitespace-nowrap">{displayText}</span>
            <br />
            <span>Fullstack Web Developer</span>
            <br />
            <span> ISTA NTIC SAFI</span>
          </div>
        </div>
      </div>

      {/* Other elements remain unchanged */}
      <div
        style={{
          border: "1px solid #3b3b3b",
          zIndex: "10",
        }}
        className="text-center bg-[#050505] text-white/90 rounded-2xl xl:row-span-6 md:row-span-9"
      >
        <div className="mt-16">
          <span
            style={{ textShadow: "0px 0px 2px rgba(255,255,255,0.7)" }}
            className="text-4xl font-bold px-1"
          >
            MERN Stack
          </span>
        </div>
        <img
          className="m-auto 2xl:-mb-60 hover:scale-[1.05] transition-all ease-linear duration-200"
          src="./Tech/mern.png"
          width={"340px"}
          alt="MERN Stack"
        />
      </div>

      <div
        style={{
          border: "1px solid #3b3b3b",
          overflow: "hidden",
          zIndex: "10",
        }}
        className="bg-[#050505]  text-center text-white/60 2xl:row-span-3 md:row-span-8 row-span-9 rounded-xl"
      >
        <div className="w-[100%] flex items-center justify-center mt-6 mb-6">
                    <div className="text-center mr-5">
                    <img
                        src="./public/Tech/docker.png"
                        alt="Docker Icon"
                        className="w-14 h-auto mb-2 mr-4"
                    />
                    </div>
                    / 
                    <div className="text-center mx-5">
                    <img
                        src="./public/Tech/aws.png"
                        alt="AWS Icon"
                        className="w-14 h-auto mb-2 ml-4"
                    />
                    </div>
         </div>
        <div className="text-center flex-grow">
          <p className=" font-bold text-white/60 md:text-[1.8em] text-2xl">
            Ship apps, deploy effortlessly.
          </p>
        
        </div>
      </div>

      <div
        style={{
          border: "1px solid #3b3b3b",
          zIndex: "10",
        }}
        className="bg-[#050505] text-center text-white rounded-2xl 2xl:row-span-8 md:row-span-9 h-full"
      >
        <p className="m-5 mt-10 text-2xl font-bold text-left pl-5 text-white/60 md:text-[1.8em] leading-9">
          I have extensive experience in Tailwind CSS and Bootstrap, using their
          powerful utility classes to create responsive, mobile-first websites.
          I focus on efficient design and seamless user experiences across
          devices.
        </p>

        <div className="flex gap-10 justify-center mb-10">
          <img
            width={"90px"}
            className="mt-8 hover:scale-[1.1] transition-all ease-linear duration-200"
            src="./public/Tech/tailwind.png"
            alt="Tailwind CSS"
          />
          <img
            width={"90px"}
            className="mt-8 hover:scale-[1.1] transition-all ease-linear duration-200"
            src="./public/Tech/bootstrap.png"
            alt="Bootstrap"
          />
        </div>
      </div>

      <div
        style={{
          border: "1px solid #3b3b3b",
          zIndex: "10",
        }}
        className="bg-[#050505] text-center text-white rounded-2xl 2xl:row-span-7 md:row-span-9 h-full"
      >
        <p className="m-9 text-2xl font-bold text-white/60 text-left md:text-[1.7em] leading-9">
          Skilled in Laravel and MySQL, I build dynamic web applications with
          streamlined database interactions, optimized performance, and secure
          data management, ensuring efficient handling of complex queries and
          operations.
        </p>

        <div className="flex items-center justify-center gap-20">
          <img
            width={"90px"}
            className="mb-10 hover:scale-[1.1] transition-all ease-linear duration-200"
            src="./Tech/mysql.png"
            alt="MySQL"
          />
          <img
            width={"60px"}
            className="mb-6 hover:scale-[1.1] transition-all ease-linear duration-200"
            src="./Tech/laravel.png"
            alt="Laravel"
          />
        </div>
      </div>

      <div
        style={{
          border: "1px solid #3b3b3b",

          zIndex: "0",
        }}
        className="bg-[#050505] text-center text-white 2xl:row-span-5 md:row-span-6 rounded-2xl"
      >
        <div className="mt-4 2xl:text-5xl sm:text-5xl text-4xl w-[100%] font-bold">
          <h1 className="text-white/60 w-[100%] mt-8">
            <span
              style={{ textShadow: "0px 0px 2px rgba(255,255,255,0.7)" }}
              className="text-white/90"
            >
              Git
            </span>{" "}
            <span className="text-white/60 text-[34px] font-roboto">& </span>
            <span
              style={{ textShadow: "0px 0px 2px rgba(255,255,255,0.7)" }}
              className="text-white/90"
            >
              GitHub
            </span>
          </h1>

          <p className="text-[16px] text-white/55 font-normal mt-3">
            For Version Control System
          </p>

          <img
            className="2xl:w-4/6 sm:w-2/6 w-3/6 md:mb-5 2xl:mb-9 m-auto 2xl:mt-10 mt-8 mb-6"
            src="./images/git.png"
            alt="Git"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
