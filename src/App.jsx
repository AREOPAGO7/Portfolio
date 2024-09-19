import React, { useEffect, useState } from 'react';
import Navbar from './component/Header/Navbar';
import Main from './component/Main/Main';
import Tech from './component/Tech/Tech';
import Section1 from './component/Section1/Section1';




function App() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <Main size={size} ></Main>
      
      <br />
      <Section1 />
    
      
    </>
  );
}

export default App;
