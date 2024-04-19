// @flow strict

import * as React from "react";
import Image from "next/image";

function ProjectCard({
  imgSrc,
  title,
  description,
  live,
  livetext,
  git,
  gittext,
}) {
  return (
    <div className="max-w-sm  overflow-hidden shadow border border-violet-700 rounded-lg hover:border hover:border-violet-400">
      <Image
        src={imgSrc}
        alt={title}
        width={400}
        height={260}
        className="w-full hover:opacity-80"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-300 text-base hover:text-white">
          {description}
        </p>
      </div>

      <div className="px-6 pb-6  pt-2 grid-cols-2 space-x-4">
        <a
          href={live}
          className="inline-block bg-blue-800 hover:bg-blue-700 rounded-md px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
        >
          {livetext}
        </a>
        <a
          href={git}
          className="inline-block bg-gray-700 hover:bg-gray-600 rounded-md px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
        >
          {gittext}
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
