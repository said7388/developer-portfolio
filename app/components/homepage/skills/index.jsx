// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  const getSkillIcon = (skill) => {
    const icon = skillsImage(skill);
    return icon?.src || null;
  };

  const renderSkillCard = (skill, id) => {
    const iconSrc = getSkillIcon(skill);
    const hasIcon = iconSrc !== null;

    return (
      <div
        className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
        key={id}
      >
        {hasIcon ? (
          // Card with icon
          <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-brand-primary transition-all duration-500">
            <div className="flex -translate-y-[1px] justify-center">
              <div className="w-3/4">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 p-6">
              <div className="h-8 sm:h-10">
                <Image
                  src={iconSrc}
                  alt={skill}
                  width={40}
                  height={40}
                  className="h-full w-auto rounded-lg"
                />
              </div>
              <p className="text-white text-sm sm:text-lg text-center">
                {skill}
              </p>
            </div>
          </div>
        ) : (
          // Badge-style card for skills without icons
          <div className="h-full w-full rounded-lg border border-[#1f223c] bg-gradient-to-br from-[#1a1f3a] to-[#11152c] shadow-none shadow-gray-50 group-hover:border-brand-primary group-hover:shadow-lg group-hover:shadow-brand-primary/50 transition-all duration-500 p-4 flex items-center justify-center min-h-[140px]">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-white text-xs sm:text-sm font-medium group-hover:text-brand-secondary transition-colors duration-300">
                {skill}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-brand-primary rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-primary to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Technical Skills
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
          {skillsData.map((skill, id) => renderSkillCard(skill, id))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;