// src/AnimatedText.jsx

import React from 'react';
import ReactTyped from 'react-typed';

const AnimatedText = () => {
  return (
    <div className="animated-text-container">
      <ReactTyped
        strings={[
          "Hi, my name is Nathan Thamtoro.",
          "I'm a third year Computer Science student at SFU.",
          "I'm from Langley, British Columbia."
        ]}
        typeSpeed={50} // Speed of typing
        backSpeed={30} // Speed of backspacing
        backDelay={1500} // Delay before backspace starts
        startDelay={500} // Delay before typing starts
        loop={true} // Loops the animation
        showCursor={true} // Show the typing cursor
      />
    </div>
  );
};

export default AnimatedText;
