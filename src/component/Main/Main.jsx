import { useState, useEffect } from "react";

const Main = () => {
  const texts = ["Full Stack Developer.", "UI/UX Designer."];
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isErasing) {
        // Erase text
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
          setDisplayText((prev) => prev.slice(0, charIndex - 1));
        } else {
          // Switch to the next text
          setIsErasing(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
        }
      } else {
        // Type text
        if (charIndex < texts[textIndex].length) {
          setCharIndex((prev) => prev + 1);
          setDisplayText(() => texts[textIndex].slice(0, charIndex + 1));
        } else {
          // Start erasing after a delay
          setTimeout(() => setIsErasing(true), 2000);
        }
      }
    }, isErasing ? 120 : 100);

    return () => clearInterval(interval);
  }, [isErasing, charIndex, textIndex, texts]);

  return (
    <>
      <div className="main-container block mt-[170px] h-[45vh] text-white">
        <h1 className="h1 font-mono font-bold text-center pt-[8%] text-[5rem]">Hello,</h1>
        <h1 className="h2 font-mono font-bold text-center text-[4.5rem]">I'm Anass , I'm a</h1>
        <h1 className="h3 font-mono text-center pt-[17px] text-[2rem]">
          {displayText}
          <span className="cursor">|</span>
        </h1>
        <br />

        <div className="canvas-container">
          {/* Uncomment and add 3D model Canvas code here if needed */}
        </div>
      </div>

      <div className="flex justify-center items-center h-48 mb-100px">
        <div className="space-x-4">
          <button className="px-6 py-3 bg-[#919191] text-white font-semibold rounded-xl shadow-md hover:bg-[#cfcfcf] transition ease-in-out duration-300">
            <a href="mailto:your-anaskalkhi123@gmail.com">Lets work</a>
          </button>
          <button className="px-5 py-3 font-bold mb-3 bg-white text-black/80 rounded-xl shadow-md hover:bg-green hover:text-white transition ease-in-out duration-300">
            Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
