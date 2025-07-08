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
              src="https://images.unsplash.com/photo-1600574691453-499962cc0611?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text content - kept full width and properly contained */}
        <div className="w-full text-center mb-8">
          <p className="text-base sm:text-lg leading-relaxed mb-4">
            I’m a final-year Computer Science undergraduate with a strong
            passion for building and problem-solving. I enjoy turning ideas into
            real-world applications through code—crafting solutions that are
            both functional and impactful. For me, coding isn’t just about
            logic; it’s a creative process that transforms ideas into reality.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Beyond coding, you'll find me on the football field, enjoying a game
            of cricket, or immersed in video games. I'm always eager to learn,
            create, and push boundaries!
          </p>
        </div>

        {/* Image - centered and properly constrained */}
      </div>
    </div>
  );
}

export default About;
