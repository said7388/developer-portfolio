// @flow strict

import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../animation-lottie";
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
              <div class=" border border-[#1f223c] transition-all duration-300 hover:border-pink-500 relative bg-[radial-gradient(145.05%_100%_at_55%_0%,#221c4a_0%,#0B1627_60.38%,#142133_78.16%)] text-gray-200 rounded-md w-full">
                <div className=" bg-[url('/card.png')] absolute bottom-0 left-0 w-full h-full -z-10 bg-top bg-no-repeat"></div>
                <div class="flex justify-center -translate-y-[1px]">
                  <div class="w-3/4">
                    <div class="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent w-full">
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex justify-center">
                    <p className="text-sm text-pink-500">(Jan 2022 - Present)</p>
                  </div>
                  <div class="flex items-center gap-x-8 p-4">
                    <div className="text-pink-500  transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div className="">
                      <p className="text-xl mb-2 font-medium  uppercase">Software Engineer I</p>
                      <p className="text-base">Teton Private Ltd.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class=" border border-[#1f223c] transition-all duration-300 hover:border-[#16f2b3] bg-[radial-gradient(145.05%_100%_at_55%_0%,#221c4a_0%,#0B1627_60.38%,#142133_78.16%)] text-gray-200 rounded-md w-full">
                <div class="flex justify-center -translate-y-[1px]">
                  <div class="w-3/4">
                    <div class="h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent w-full">
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <div className="flex justify-center">
                    <p className="text-sm text-[#16f2b3]">(Jun 2021 - January 2022)</p>
                  </div>
                  <div class="flex items-center gap-x-8 p-4">
                    <div className="text-[#16f2b3]  transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div className="">
                      <p className="text-xl mb-2 font-medium  uppercase">Full-Stack Developer</p>
                      <p className="text-base">Fiverr(freelance)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class=" border border-[#1f223c] transition-all duration-300 hover:border-violet-500 bg-[radial-gradient(145.05%_100%_at_55%_0%,#221c4a_0%,#0B1627_60.38%,#142133_78.16%)] text-gray-200 rounded-md w-full">
                <div class="flex justify-center -translate-y-[1px]">
                  <div class="w-3/4">
                    <div class="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full">
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <div className="flex justify-center">
                    <p className="text-sm text-violet-500">(Jan 2018 - Present)</p>
                  </div>
                  <div class="flex items-center gap-x-8 p-4">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div className="">
                      <p className="text-xl mb-2 font-medium  uppercase">Self Employed</p>
                      <p className="text-base">Trying to build something and contribute open source!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;