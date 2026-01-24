'use client';

import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { useState, useRef } from 'react';

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const sliderRef = useRef(null);

  const scrollToEnd = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-brand-primary rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>

        {projectsData.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => {
                setShowMore(!showMore);
                if (!showMore) setTimeout(scrollToEnd, 100);
              }}
              className="px-6 lg:px-8 py-2 lg:py-3 rounded-lg bg-brand-gradient text-white font-medium hover:shadow-lg hover:shadow-brand-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              {showMore ? 'Show Less' : 'View More Projects'}
            </button>
          </div>
        )}
      </div>

      {showMore && projectsData.length > 4 && (
        <div className="pt-12">
          <div className="relative">
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
              style={{ scrollBehavior: 'smooth' }}
            >
              {projectsData.slice(4).map((project, index) => (
                <div
                  key={index + 4}
                  className="flex-shrink-0 w-full max-w-2xl"
                >
                  <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                    <ProjectCard project={project} />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: Math.ceil((projectsData.length - 4) / 1) }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-2 w-2 rounded-full bg-brand-primary opacity-50"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;