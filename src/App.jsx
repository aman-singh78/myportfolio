// App.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedModel from "./AnimatedModel";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer"

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
        <section id="home" className="h-screen w-full flex justify-center items-center relative">
          {/* 3D Canvas */}
          <Canvas
            camera={{ position: [0, 0.4, 3], fov: 30 }}
            className="absolute top-0 left-0 w-full h-full overflow-hidden"
          >
            <color attach="background" args={["white"]} />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 5, 5]} />
            <AnimatedModel />
            <OrbitControls enableZoom={false} />
          </Canvas>
          

          {/* Overlay to improve text visibility */}
          <div className="absolute top-0 left-0 w-full h-full bg-white-500 z-10 pointer-events-none"></div>

          {/* Intro Text (Same Alignment as You Had) */}
          <div className="h-screen w-full z-10 absolute translate-x-[42%] translate-y-[27%] pointer-events-none">
            <Intro />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-white">
          <About />
        </section>
        <section id="experience" className="flex items-center justify-center bg-white">
          <Experience />
        </section>
        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center justify-center bg-white">
          <Skills />
        </section>

        {/* Projects Section */}
        <section className=" flex flex-wrap items-start justify-center bg-white">
          <Projects />
        </section>
        <section className="flex flex-wrap items-start justify-center bg-white">
          <Footer />
        </section>
      </div>
      
    </div>
  );
}
