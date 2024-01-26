import React, { useState } from 'react';
import './SunCss.css'

const SunAnimation = () => {
  const [animationRunning, setAnimationRunning] = useState(false);

  const toggleAnimation = () => {
    setAnimationRunning(prevState => !prevState);
  };

  return (
    <div className="sun-container">
      <div className={`sun ${animationRunning ? 'running' : ''}`} onClick={toggleAnimation}>
        <svg className="eclipse-container" viewBox="0 0 100 100">
          <circle className="eclipse" cx="50" cy="50" r="49" transform="rotate(-90 50 50)" />
        </svg>
      </div>
    </div>
  );
};

export default SunAnimation;
