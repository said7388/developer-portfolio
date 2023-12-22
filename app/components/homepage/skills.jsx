// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skillImage";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 h-36 flex flex-col items-center justify-center transition-all duration-500 m-6 rounded-[10px] hover:scale-[1.15] cursor-pointer bg-[#0c0b33] shadow-[0px_0px_16px_#1D9BF0] gap-3"
              key={id}>
              <div className="h-10">
                <Image
                  src={skillsImage(skill)?.src}
                  alt={skill}
                  width={40}
                  height={40}
                  className="h-full w-auto rounded-lg"
                />
              </div>
              <h3 className="text-[#EFF3F4] text-xl font-medium">
                {skill}
              </h3>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;