// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-gray-800 w-fit text-gray-200 rotate-90 p-2 px-5 text-xl rounded-md font-semibold border border-gray-600">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-gray-600"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-gray-300 text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-300 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="MudPirate"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer border-2 border-gray-600"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
