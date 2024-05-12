import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Welcome to my portfolio",
          "Hope you're doing fine",
          "Do checkout my projects",
          "Let's connect",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        delay: 25
      }}
    />
  );
}

export default Type;
