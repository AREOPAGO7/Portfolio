import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Tdivs = () => {
  const [scrolling, setScrolling] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  // Create a spring animation based on the scrolling state
  const animatedStyles = useSpring({
    transform: triggerAnimation ? 'translateY(0)' : 'translateY(100px)',
    opacity: triggerAnimation ? 1 : 0,
    config: { tension: 170, friction: 26 },
  });

  // Handle scroll events
  const handleScroll = () => {
    if (!scrolling) {
      setScrolling(true);
      // Set a timeout to trigger the animation after 2 seconds
      setTimeout(() => {
        setTriggerAnimation(true);
      }, 1200); // 2000 ms = 2 seconds
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Attach scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up on component unmount
    };
  }, [scrolling]);

  return (
    <animated.div style={animatedStyles} className='grid grid-cols-3 m-auto -mt-6 w-3/4 h-2/3 gap-4'>
      <div style={{border: '1px solid #3b3b3b'}} className='bg-tahiti overflow-hidden h-full w-[90%] border-2 border-white rounded-[1rem] hover:bg-gris transition-all ease-linear duration-300' >
        <div className=' h-full text-white text-center '>
           <h1 style={{fontFamily:''}} className=' text-5xl font-roboto font-bold pt-[7rem]'>Git <span className='text-4xl text-white/70  '>&</span> GitHub </h1>

           <div  className='h-3/4'>
            <img className=' items-end h-96 w-full mt-28' src="./public/images/github.png"  alt="" />
           </div> 
        </div>
      </div>
      <div style={{border: '1px solid #3b3b3b'}} className='bg-tahiti h-full w-[90%] border-2 border-white rounded-[1rem] hover:bg-gris transition-all ease-linear duration-300' />
      <div style={{border: '1px solid #3b3b3b'}} className='bg-gris h-full w-[90%] border-2 border-white rounded-[1rem] hover:bg-tahiti transition-all ease-linear duration-300' />
    </animated.div>
  );
};

export default Tdivs;
