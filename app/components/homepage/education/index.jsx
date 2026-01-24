"use client"
// @flow strict
import { useState } from "react";
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import Link from "next/link";
import { BsPersonWorkspace } from "react-icons/bs";
import { SiYoutube, SiUdemy } from "react-icons/si";
import { MdOpenInNew } from "react-icons/md";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

const INITIAL_DISPLAY_COUNT = 6;

function Education() {
  const [showAll, setShowAll] = useState(false);
  const displayedEducations = showAll ? educations : educations.slice(0, INITIAL_DISPLAY_COUNT);

  const getLinkIcon = (type) => {
    switch (type) {
      case "youtube":
        return <SiYoutube className="text-red-500" size={18} />;
      case "udemy":
        return <SiUdemy className="text-purple-500" size={18} />;
      default:
        return <MdOpenInNew className="text-blue-400" size={18} />;
    }
  };

  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates & Courses
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-4">
              {displayedEducations.map(education => (
                <GlowCard key={education.id} identifier={`education-${education.id}`}>
                  <div className="p-3 relative text-white">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex items-start justify-between gap-3 px-3 py-3">
                      <div className="flex items-start gap-3 flex-1">
                        <div className="text-violet-500 transition-all duration-300 hover:scale-125 mt-1">
                          <BsPersonWorkspace size={24} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm sm:text-base mb-1 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-400 mb-1">
                            {education.institution}
                          </p>
                          <p className="text-xs text-[#16f2b3]">
                            {education.duration}
                          </p>
                        </div>
                      </div>
                      {education.links && education.links.length > 0 && (
                        <div className="flex flex-col gap-1 flex-shrink-0">
                          {education.links.map((link, idx) => (
                            link.url && (
                              <Link
                                key={idx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all duration-300 hover:scale-110"
                                title={link.label || link.type}
                              >
                                {getLinkIcon(link.type)}
                              </Link>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
            
            {educations.length > INITIAL_DISPLAY_COUNT && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-2 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {showAll ? "Show Less" : `View More (${educations.length - INITIAL_DISPLAY_COUNT} more)`}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
