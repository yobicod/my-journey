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

  const onButtonClick = () => {
    const pdfUrl = "public/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='container h-auto mt-24 flex flex-col md:flex-row justify-evenly overflow-hidden'>
      <div className='h-full w-full md:w-5/12'>
        <div className='w-full flex justify-center md:justify-start'>
          <Image
            src='/me.png'
            width={150}
            height={150}
            alt='Picture of the author'
          />
        </div>
        <p className='text-base md:text-4xl font-bold mt-8 text-center md:text-left'>
          {`I'm Visal aka yobicod.`}
        </p>
        <div className='text-center md:text-left scale-50 md:scale-100'>
          <TypeAnimation
            sequence={[
              "Full Stack Engineer 💻",
              2500, // wait 2.5s before replacing
              "Full Snack Engineer 🍿",
              2500,
            ]}
            wrapper='span'
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <div className='flex justify-center md:justify-start mt-4'>
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
        <div className='text-center md:text-left mt-4'>
          <a
            href='resume.pdf'
            className='text-sm font-thin'
            onClick={onButtonClick}
          >
            Get my resume
          </a>
        </div>
      </div>
      <div className='h-full w-full hidden md:w-5/12 mt-8 md:mt-0 md:block'>
        <div className='md:scale-110 mt-4'>
          <CopyBlock
            text={`console.log("My routine...")\n\nfunction eat(){\n    console.log("eating...")\n}\n\nfunction sleep(){\n    console.log("sleeping...")\n}\n\nfunction code(){\n    console.log("coding...")\n}\n\nconst alive = true;\nwhile (alive) {\n    eat();\n    sleep();\n    code();\n}`}
            language={"javascript"}
            showLineNumbers={true}
            theme={atomOneDark}
            wrapLongLines={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
