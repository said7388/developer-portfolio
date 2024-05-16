'use client';
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard.jsx';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          'https://portfolio-api-8sz6.onrender.com/api/projects'
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className='py-8'>
      <div className='flex justify-center my-5 lg:py-8'>
        <div className='flex items-center'>
          <span className='w-24 h-[2px] bg-[#1a1443]'></span>
          <span className='bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md'>
            All Projects
          </span>
          <span className='w-24 h-[2px] bg-[#1a1443]'></span>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10'>
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
