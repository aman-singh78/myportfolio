// App.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedModel from "./AnimatedModel";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="relative w-full">
      {/* Sticky Navbar (Stays at top while scrolling) */}
      <div className="sticky top-0 w-full z-50 bg-white/30 backdrop-blur-lg px-4">
        <Navbar />
      </div>

      {/* Scrollable Content */}
      <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
        {/* Hero Section */}
        <section className="h-screen w-full flex justify-center items-center relative">
          {/* 3D Canvas */}
          {/* <Canvas
            camera={{ position: [0, 0.4, 3], fov: 30 }}
            className="absolute top-0 left-0 w-full h-full overflow-hidden"
          >
            <color attach="background" args={["white"]} />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 5, 5]} />
            <AnimatedModel />
            <OrbitControls enableZoom={false} />
          </Canvas> */}
          <img className="h-72 w-72 rounded-full ml-100 mt-0" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWwlMjBtYWxlfGVufDB8fDB8fHww" alt="" />

          {/* Overlay to improve text visibility */}
          <div className="absolute top-0 left-0 w-full h-full bg-white-500 z-10 pointer-events-none"></div>

          {/* Intro Text (Same Alignment as You Had) */}
          <div className="h-screen w-full z-10 absolute translate-x-[42%] translate-y-[27%] pointer-events-none">
            <Intro />
          </div>
        </section>

        {/* About Section */}
        <section className="min-h-screen flex items-center justify-center bg-white">
          <About />
        </section>

        {/* Skills Section */}
        <section className="min-h-screen flex items-center justify-center bg-white">
          <Skills />
        </section>

        {/* Projects Section */}
        <section className=" flex flex-wrap items-start justify-center bg-white">
          <Projects />
        </section>
      </div>
    </div>
  );
}
