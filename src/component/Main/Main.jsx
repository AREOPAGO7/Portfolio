import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, PresentationControls } from "@react-three/drei";
import AnimatedModel from "../3d/AnimatedModel";
import "./Main.css";
import Signature from "../Signature/Signature";

const Main = () => {
  return (
    <>
      <div className="main-container">
        <div className="text-content">
          <h1 className="h1 font-mono font-bold">Crafting code, </h1>
          <h1 className="h2 font-mono font-bold">shaping futures</h1>
          <br />

          <p className="description font-mono">
            Passionate full stack web developer with a knack for turning ideas
            into immersive online experiences. From sleek, responsive designs to
            robust backend solutions, I specialize in creating digital
            landscapes.
          </p>

          <Signature className="Signature"></Signature>
        </div>
        <div className="canvas-container">
          <Canvas
            dpr={[1, 2]}
            camera={{ fov: 65, position: [0, 0, 5] }}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <PresentationControls speed={1} global zoom={10}>
              <Stage>
                <AnimatedModel scale={1} />
              </Stage>
            </PresentationControls>
          </Canvas>
        </div>
      </div>
      <div className="flex justify-center items-center h-48 mb-100px">
        <div className="space-x-4 2xl:mt-16 md:mt-24">
          <button className="px-6 py-3  bg-green text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition ease-in-out duration-300">
            <a href="mailto:your-anaskalkhi123@gmail.com">Hire Me</a>
          </button>

          <button className="px-6 py-3   mb-3 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition ease-in-out duration-300">
            Document
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
