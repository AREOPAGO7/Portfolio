import React, { useEffect, useState } from "react";

const Quote = () => {
  const [isVisible, setIsVisible] = useState(false);

 
  const handleScroll = () => {
    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
      const rect = quoteElement.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1
        id="quote"
        style={{
          textShadow: "0px 0px 9px rgba(255,255,255,0.5)",
          transition: "opacity 1.5s ease-out, transform 1s ease-out",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(80px)"
        }}
        className="text-white 2xl:mt-28  h-10  text-center sm:text-5xl sm:mb-44  2xl:text-6xl
         text-4xl p-10 md:mb-24 mb-20 font-extrabold text-wrap"
      >
        Building ideas, Empowering The Future.
      </h1>
    </div>
  );
};

export default Quote;