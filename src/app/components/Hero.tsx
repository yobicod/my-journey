"use client";
import Image from "next/image";
import { STYLE } from "../constants/style";
import { CodeBlock, CopyBlock, atomOneDark } from "react-code-blocks";
import { TypeAnimation } from "react-type-animation";
// import { INTRODUCTION, MOTTO } from "../constants/introduction";
import AnimatedCursor from "react-animated-cursor";
const Hero = () => {
  interface IIcon {
    id: number;
    path: string;
    url: string;
  }

  const icons: IIcon[] = [
    {
      id: 1,
      path: "/github.png",
      url: "https://github.com/yobicod",
    },
    {
      id: 2,
      path: "/linkedin.png",
      url: "https://www.linkedin.com/in/visal-suwanarat-6175ab257/",
    },
    {
      id: 3,
      path: "/instagram.png",
      url: "google.com",
    },
  ];

  return (
    <div className='container h-[617px] mt-24 flex justify-evenly'>
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
      <div className='h-full w-5/12'>
        <div className='w-full flex'>
          <Image
            src='/me.png'
            width={150}
            height={150}
            alt='Picture of the author'
          />
        </div>
        <p className='text-4xl font-bold mt-8'>I'm Visal aka yobicod</p>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Full Stack Engineer 💻",
            2500, // wait 1s before replacing "Mice" with "Hamsters"
            "Full Snack Engineer 🍿",
            2500,
          ]}
          wrapper='span'
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        <p
          className={`text-sm mt-4 text-[${STYLE.content}] font-thin leading-6`}
        >
          🚀 Hey, I'm Visal, also known as yobicod, a graduated IT student from
          KMITL. 🌟 My journey in IT has been thrilling, diving deep into
          software development since I got hooked on programming at 15. I've
          explored various languages and frameworks, crafting code and solving
          puzzles along the way. 🌐 I'm eager to dive into the ever-evolving
          tech world, aiming to use emerging technologies to make a real impact.
          🔍 I'm actively seeking opportunities to bring my passion and skills
          to a professional space, collaborating, innovating, and contributing
          meaningfully. If you're an enthusiast, mentor, or industry
          professional, let's connect and explore the endless possibilities in
          tech! 🚀✨
        </p>

        <div className='flex mt-4'>
          {icons.map((el) => (
            <a
              href={el.url}
              target='_blank'
              rel='noopener noreferrer'
              key={el.id}
            >
              <Image
                src={el.path}
                width={32}
                height={32}
                alt='contact'
                className={`${el.id !== 1 ? "ml-4" : ""} hover:scale-110`}
              />
            </a>
          ))}
        </div>
      </div>
      <div className='h-full w-5/12'>
        {/* <Image
          src='/developer.png'
          width={150}
          height={150}
          alt='contact'
          // className={`${el.id !== 1 ? "ml-4" : ""} hover:scale-110`}
          className='h-[700px] w-full scale-50'
        /> */}
        <div className='scale-75 mt-4'>
          <CopyBlock
            text={`console.log("Connecting to server...")\n\nfunction eat(){\n    console.log("eating...")\n}\n\nfunction sleep(){\n    console.log("sleeping...")\n}\n\nfunction code(){\n    console.log("coding...")\n}\n\nconst alive = true;\nwhile (alive) {\n    eat();\n    sleep();\n    code();\n}\n\nconsole.log("Disconnected from server...")`}
            language={"javascript"}
            showLineNumbers={true}
            theme={atomOneDark}
            wrapLongLines={true}
            // highlight='1'
            // onCopy
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
