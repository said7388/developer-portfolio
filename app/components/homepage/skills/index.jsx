// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-gray-700"
    >
      <div className="w-[100px] h-[100px] bg-gray-400 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-gray-600"></span>
          <span className="bg-gray-800 w-fit text-gray-200 p-2 px-5 text-xl rounded-md font-semibold border border-gray-600">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-gray-600"></span>
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
          {skillsData.map((skill, id) => {
            const skillImg = skillsImage(skill);
            return (
              <div
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}
              >
                <div className="h-full w-full rounded-lg border border-gray-600 bg-gray-800 shadow-lg group-hover:border-gray-400 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      {skillImg ? (
                        <Image
                          src={skillImg.src}
                          alt={skill}
                          width={40}
                          height={40}
                          className="h-full w-auto rounded-lg"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center text-gray-300 text-xs font-medium">
                          {skill}
                        </div>
                      )}
                    </div>
                    <p className="text-gray-200 text-sm sm:text-lg font-medium">
                      {skill}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
