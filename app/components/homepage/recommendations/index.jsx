// @flow strict
'use client';

import { testimonialsData } from "@/utils/data/testimonials";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";

function RecommendationCard({ testimonial }) {
  const renderHighlightedText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <span key={index} className="font-semibold text-violet-400">
            {part.slice(2, -2)}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>

      <div className="relative bg-[#0f1419] border border-[#1f223c] rounded-xl p-6 transition-all duration-300 group-hover:border-violet-500 group-hover:shadow-lg group-hover:shadow-violet-500/50">
        {/* Header with Profile */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/64?text=" + testimonial.name.charAt(0);
              }}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold text-base group-hover:text-violet-400 transition-colors">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-400">{testimonial.position}</p>
            <p className="text-xs text-gray-500">{testimonial.relation}</p>
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {renderHighlightedText(testimonial.testimonial)}
        </p>

        {/* LinkedIn Button */}
        <div className="flex justify-end pt-4 border-t border-[#1f223c]">
          <Link
            href={testimonial.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 group/btn"
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.5a1.5 1.5 0 00-3 0V19h-3v-9h3v1.5a3 3 0 015.6 1.3z" />
            </svg>
            LinkedIn
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function Recommendations() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div id="recommendations" className="relative z-50 my-12 lg:my-24">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute -top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Recommendations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 my-12 px-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        {testimonialsData.map((testimonial) => (
          <RecommendationCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </motion.div>

      {/* Call to Action Button */}
      <div className="flex justify-center mt-12">
        <Link
          href={personalData.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-violet-500/50 transition-all duration-300 flex items-center gap-2"
        >
          <span>For further recommendations, please visit my LinkedIn page</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l6 6m0 0l-6 6m6-6H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Recommendations;
