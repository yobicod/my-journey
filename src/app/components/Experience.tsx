"use client";
import { TypeAnimation } from "react-type-animation";

const Experience = () => {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "http://someurl/image.jpg",
        },
      },
    },
  ];

  return (
    <div className={`container h-[550px] mt-24 `}>
      <div className='flex justify-center align-center'>
        {/* <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Experiences",
            2500, // wait 1s before replacing "Mice" with "Hamsters"
            // "Full Snack Engineer 🍿",
            // 2500,
          ]}
          wrapper='span'
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        /> */}
        <p className='text-4xl font-semibold'>Experience</p>
      </div>
    </div>
  );
};

export default Experience;
