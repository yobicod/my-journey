import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import AnimatedCursor from "react-animated-cursor";
export default function Home() {
  return (
    <div className='container mx-auto h-screen 80 w-8/12 bg-white'>
      <AnimatedCursor
        innerSize={10}
        outerSize={15}
        color={"51, 182, 174"}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2.25}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Navbar />
      <Hero />
      {/* <Experience /> */}
    </div>
  );
}
