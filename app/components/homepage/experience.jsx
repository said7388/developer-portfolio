// @flow strict

import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../animation-lottie";
import GlowCard from "../glow-card";
import experience from '/public/lottie/development.json';

function Experience() {
  return (
    <div className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">

      <div class="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div class="flex justify-center -translate-y-[1px]">
        <div class="w-3/4">
          <div class="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-10">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experience
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div class="flex flex-col gap-6">
              <GlowCard identifier={1}>
                <div className="p-3">
                  <div className="flex justify-center">
                    <p className="text-sm text-[#16f2b3]">(Jan 2022 - Present)</p>
                  </div>
                  <div class="flex items-center gap-x-8 p-4">
                    <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div className="">
                      <p className="text-xl mb-2 font-medium  uppercase">Software Engineer I</p>
                      <p className="text-base">Teton Private Ltd.</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
              <GlowCard identifier={2}>
                <div className="p-3">
                  <div className="flex justify-center">
                    <p className="text-sm text-[#16f2b3]">(Jan 2022 - Present)</p>
                  </div>
                  <div class="flex items-center gap-x-8 p-4">
                    <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div className="">
                      <p className="text-xl mb-2 font-medium  uppercase">Software Engineer I</p>
                      <p className="text-base">Teton Private Ltd.</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
              <GlowCard identifier={3}>
                <div className="p-3">
                  <div className="flex justify-center">
                    <p className="text-sm text-[#16f2b3]">(Jan 2022 - Present)</p>
                  </div>
                  <div class="flex items-center gap-x-8 p-4">
                    <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div className="">
                      <p className="text-xl mb-2 font-medium  uppercase">Software Engineer I</p>
                      <p className="text-base">Teton Private Ltd.</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;