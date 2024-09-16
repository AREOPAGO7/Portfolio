import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stage, PresentationControls } from '@react-three/drei';
import AnimatedModel from '../3d/AnimatedModel';
import './Main.css';
import Signature from '../Signature/Signature';

const Main = () => {
  return (
    <>
    <div className='main-container'>
      <div className='text-content'>
        <h1 className='h1'>Building sites fast</h1>
        
        <h1 className='h2'>Efficient and </h1>
        <h1 className='h3'> With ease</h1>
        
        <p className='description'>
          Passionate full stack web developer with a knack for
          turning ideas into immersive online experiences.
          From sleek, responsive designs to robust backend solutions,
          I specialize in creating digital landscapes.
        </p>
      </div>
      <div className='canvas-container'>
        <Canvas
          dpr={[1, 2]}
          camera={{ fov: 65, position: [0, 0, 5] }}
          style={{
            width: '100%',
            height: '100%',
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
     <Signature></Signature>
    </>
  );
};

export default Main;
