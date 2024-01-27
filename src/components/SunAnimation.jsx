import React, { useState } from 'react';
import './SunCss.css'

const SunAnimation = ({theme}) => {
//   const [animationRunning, setAnimationRunning] = useState(false);

//   const toggleAnimation = () => {
//     setAnimationRunning(prevState => !prevState);
//   };

  return (
    <div className="sun" >
    <svg className="eclipse-container" viewBox="0 0 100 100">
      <circle className="eclipse" cx="50" cy="50" r="49" transform="rotate(-90 50 50)" />
    </svg>
  </div>
  );
};

export default SunAnimation;
