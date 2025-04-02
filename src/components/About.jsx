import React from "react";

function About() {
  return (
    <div className="w-full px-4 sm:px-6 py-8 sm:py-12">
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        {/* About me heading - kept centered and properly sized */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
          About me
        </h1>

        {/* Welcome heading */}
        <h3 className="font-bold mb-4 text-2xl text-center w-full">Welcome!</h3>

        <div className="w-full flex justify-center mb-5">
          <div className="h-56 w-48 sm:h-64 sm:w-56 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text content - kept full width and properly contained */}
        <div className="w-full text-center mb-8">
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            I am a third-year Computer Science undergraduate with a passion for
            building and problem-solving. I love turning ideas into reality
            through code, crafting solutions that make a real impact. Coding is
            not just writing logic—it's a way to express creativity and bring{" "}
            <span className="font-bold">thoughts to life</span>.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Beyond coding, you'll find me on the football field, immersed in
            video games, or sharpening my mind with a game of chess. Always
            eager to learn, create, and push boundaries!
          </p>
        </div>

        {/* Image - centered and properly constrained */}
      </div>
    </div>
  );
}

export default About;
