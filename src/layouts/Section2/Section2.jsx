import React, { useEffect, useRef } from 'react';
import './Section2.css'; // Import your CSS file for styling
import Tdivs from './Tdivs/Tdivs'

const Section2 = () => {
  const svgRef = useRef(null);
  const hasAnimated = useRef(false); // To prevent reanimation on multiple scrolls

  useEffect(() => {
    const svg = svgRef.current;

    // Function to trigger the stroke animation
    const animateStroke = () => {
      const rect = svg.getBoundingClientRect();
      // Check if the SVG is in the viewport
      if (rect.top < window.innerHeight && rect.bottom >= 0 && !hasAnimated.current) {
        hasAnimated.current = true; // Prevent further animations
        svg.classList.add('animate-stroke'); // Add animation class
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', animateStroke);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', animateStroke);
    };
  }, []);

  return (
    <>
   
    <div className=' h-svh  items-center justify-center'>
      <svg
        ref={svgRef}
        className='w-1/2 m-auto '
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 782 284"
        fill="none"
      >
        <path  d="M388 9V201.5L21.5259 201.026C10.4701 201.012 1.5 209.97 1.5 221.026L1.5 263.5" className="path"  />
        <path d="M388 9V201.5L760.989 201.295C772.039 201.289 781 210.245 781 221.295V 263.5" className="path" />
        <path d="M392.5 5C392.5 7.48528 390.485 9.5 388 9.5C385.515 9.5 383.5 7.48528 383.5 5C383.5 2.51472 385.515 0.5 388 
        0.5C390.485 0.5 392.5 2.51472 392.5 5Z" className="path" />
      </svg>
       <Tdivs/>
    </div>
  
    </>
  );
};

export default Section2;
