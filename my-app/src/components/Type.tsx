import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "DevOps/Cloud Enginner",
          "AI Driven Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      
    />
  );
}

export default Type;
