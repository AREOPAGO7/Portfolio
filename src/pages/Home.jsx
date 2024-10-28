// src/pages/Home.jsx
import  { useEffect, useState } from "react";
import Main from "../component/Main/Main";
import Quote from "../component/quote/Quote.jsx";
import Section1 from "../layouts/Section1/Section1";
import Section3 from "../layouts/Section3/Section3";

function Home() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Main size={size} />
      <br />
      <Quote />
      <Section1 />
      <Section3 />
    </>
  );
}

export default Home;
