// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from "./contact-form";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-gray-800 w-fit text-gray-200 rotate-90 p-2 px-5 text-xl rounded-md font-semibold border border-gray-600">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-gray-600"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-gray-600 p-2 rounded-full hover:bg-gray-400 hover:scale-110 transition-all duration-300 text-gray-200 cursor-pointer"
                size={36}
              />
              <span className="text-gray-200">{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-gray-600 p-2 rounded-full hover:bg-gray-400 hover:scale-110 transition-all duration-300 text-gray-200 cursor-pointer"
                size={36}
              />
              <span className="text-gray-200">{personalData.phone}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-gray-600 p-2 rounded-full hover:bg-gray-400 hover:scale-110 transition-all duration-300 text-gray-200 cursor-pointer"
                size={36}
              />
              <span className="text-gray-200">{personalData.address}</span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-gray-600 p-3 rounded-full hover:bg-gray-400 hover:scale-110 transition-all duration-300 text-gray-200 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-gray-600 p-3 rounded-full hover:bg-gray-400 hover:scale-110 transition-all duration-300 text-gray-200 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.twitter}>
              <FaXTwitter
                className="bg-gray-600 p-3 rounded-full hover:bg-gray-400 hover:scale-110 transition-all duration-300 text-gray-200 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.stackOverflow}>
              <FaStackOverflow
                className="bg-gray-600 p-3 rounded-full hover:bg-gray-400 hover:scale-110 transition-all duration-300 text-gray-200 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.facebook}>
              <FaFacebook
                className="bg-gray-600 p-3 rounded-full hover:bg-gray-400 hover:scale-110 transition-all duration-300 text-gray-200 cursor-pointer"
                size={48}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
