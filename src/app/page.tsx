import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div className='container mx-auto h-dvh 80 w-8/12 bg-white'>
      <Navbar />
      <Hero />
    </div>
  );
}
