// @flow strict
'use client';

import { softSkillsData } from "@/utils/data/softSkills";

function SoftSkills() {
  return (
    <div id="soft-skills" className="relative z-50 my-12 lg:my-24">
      <div className="w-[100px] h-[100px] bg-brand-primary rounded-full absolute -top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-brand-primary to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Soft Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-12 px-2">
        {softSkillsData.map((skill, id) => (
          <div
            key={id}
            className="group relative"
            style={{
              animation: `fadeInUp 0.6s ease-out ${id * 0.05}s both`,
            }}
          >
            <style jsx>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>

            <div className="absolute inset-0 bg-brand-gradient rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>

            <div className="relative bg-[#0f1419] border border-[#1f223c] rounded-lg p-6 transition-all duration-300 group-hover:border-brand-primary group-hover:shadow-lg group-hover:shadow-brand-primary/50">
              <div className="flex items-center justify-between">
                <p className="text-white font-medium text-sm sm:text-base group-hover:text-brand-secondary transition-colors duration-300">
                  {skill}
                </p>
                <div className="w-8 h-8 bg-brand-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-4 h-4 text-white"
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
              </div>

              <div className="mt-4 h-1 bg-gradient-to-r from-brand-primary/50 to-brand-secondary/50 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SoftSkills;

