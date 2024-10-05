// @flow strict

import Image from "next/image";

function SkillSection({ sectionName, skillsData, skillsImage }) {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            {sectionName}
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>
      <div className="w-full my-12 flex overflow-x-auto justify-center">
        {skillsData.map((skill, id) => (
          <div
            className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
            key={id}
          >
            <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
              <div className="flex -translate-y-[1px] justify-center">
                <div className="w-3/4">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 p-6">
                <div className="h-8 sm:h-10">
                  <Image
                    src={skillsImage(skill)?.src}
                    alt={skill}
                    width={40}
                    height={40}
                    className="h-full w-auto rounded-lg"
                  />
                </div>
                <p className="text-white text-sm sm:text-lg">{skill}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SkillSection;
