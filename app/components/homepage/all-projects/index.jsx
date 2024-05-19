'use client';
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard.jsx';
import { FaArrowRight } from 'react-icons/fa';

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `https://portfolio-api-8sz6.onrender.com/api/projects?page=${currentPage}`
        );
        const data = await response.json();
        console.log('API response data:', data);

        // Reset the projects state with the new data
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, [currentPage]);

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
        {/* Check if projects is an array and has at least one element */}
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project, i) => (
            <ProjectCard key={i} project={project} /> // Pass the project object as a prop
          ))
        ) : (
          <p>Loading projects...</p> // Display a loading message when projects is empty
        )}
      </div>
      {currentPage < totalPages && (
        <div className='flex justify-center mt-5 lg:mt-12'>
          <button
            className='flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold'
            onClick={handleViewMore}>
            <span>View More</span>
            <FaArrowRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default AllProjects;
