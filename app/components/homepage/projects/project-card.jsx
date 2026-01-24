// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-gray-400">{` '`}</span>
            <span className="text-cyan-400">{project.description}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>
          {project.achievements && project.achievements.length > 0 && (
            <div className="ml-4 lg:ml-8 mr-2">
              <span className="text-white">achievements:</span>
              <span className="text-gray-400">{' ['}</span>
              <div className="ml-4 lg:ml-8 mt-1 flex flex-col gap-1">
                {project.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-gray-400 mr-2">{'•'}</span>
                    <span className="text-gray-400">{`"`}</span>
                    <span className="text-green-400">{achievement}</span>
                    <span className="text-gray-400">{`"`}</span>
                    {i < project.achievements.length - 1 && (
                      <span className="text-gray-400">{','}</span>
                    )}
                  </div>
                ))}
              </div>
              <span className="text-gray-400">{'],'}</span>
            </div>
          )}
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
      
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-6 flex flex-wrap gap-4 items-center justify-start">
        {project.googlePlay && (
          <a 
            href={project.googlePlay} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
              alt="Get on Google Play" 
              width="150"
              className="h-10 w-auto"
            />
          </a>
        )}
        
        {project.appStore && (
          <a 
            href={project.appStore} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:scale-105"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
              alt="Get on App Store" 
              width="150"
              className="h-10 w-auto"
            />
          </a>
        )}
        
        {project.pubDev && (
          <a 
            href={project.pubDev} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Pub.dev
          </a>
        )}
        
        {project.website && (
          <a 
            href={project.website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-700 transition-colors"
          >
            Website
          </a>
        )}
        
        {project.code && (
          <a 
            href={project.code} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded bg-gray-700 text-white text-sm font-medium hover:bg-gray-600 transition-colors"
          >
            Source
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;