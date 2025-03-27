import React from "react";

function About() {
  return (
    <div className="px-8 py-12">
      <div className="flex flex-col items-center">
        {/* About me heading */}
        <h1 className="text-6xl font-bold mb-30">About me</h1>

        {/* Container for text and image */}
        <div className="flex items-center justify-center gap-8">
          {/* Text Section */}
          <div className="max-w-lg">
            <h3 className="font-bold mb-2 text-2xl">Welcome!</h3>
            <p className="text-lg leading-relaxed">
              I am a third-year Computer Science undergraduate with a passion
              for building and problem-solving. I love turning ideas into
              reality through code, crafting solutions that make a real impact.
              Coding is not just writing logic—it's a way to express creativity
              and bring <span className="font-bold">thoughts to life</span>.
              <br />
              <br /> Beyond coding, you’ll find me on the football field,
              immersed in video games, or sharpening my mind with a game of
              chess. Always eager to learn, create, and push boundaries!
            </p>
          </div>

          {/* Image Section */}
          <div className="h-[22vw] w-[19vw] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
