// components/ProjectCard.js
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import axios from 'axios';
import CommentModal from './CommentModal';

function ProjectCard({ project, handleLikedProject, handleIncrementView }) {
  const [isLiked, setIsLiked] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);

  const handleLike = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return res.status(404).send('you need to login');
      }
      // Make a POST request to the backend to like the project
      const response = await fetch(
        'https://portfolio-api-8sz6.onrender.com/api/like-project',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ projectId: project._id }),
        }
      );

      if (response.status === 200) {
        setIsLiked(true);
        handleLikedProject(project._id, response.data.userId);
      } else {
        console.error('Failed to like project');
      }
    } catch (error) {
      console.error('Error liking project:', error);
    }
  };

  const handleShowCommentModal = () => {
    setShowCommentModal(true);
  };

  const handleCloseCommentModal = () => {
    setShowCommentModal(false);
  };

  const handleViewIncrement = () => {
    handleIncrementView(project._id);
  };
  return (
    <div className='border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group'>
      <div className='h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg'>
        <Image
          src={project.image}
          height={1080}
          width={1920}
          alt=''
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className='p-2 sm:p-3 flex flex-col'>
        <div className='flex justify-between items-center text-[#16f2b3] text-sm'>
          <div className='flex items-center gap-3'>
            <button onClick={handleLike}>
              <BsHeartFill
                className={`${isLiked ? 'text-red-500' : ''} cursor-pointer`}
              />
              <span>{project.likes?.length || 0}</span>
            </button>
            <button onClick={handleShowCommentModal}>
              <FaCommentAlt className='cursor-pointer' />
              <span>{project.comments?.length || 0}</span>
            </button>
            {showCommentModal && (
              <CommentModal
                project={project}
                onClose={handleCloseCommentModal}
              />
            )}
          </div>
          <div className='flex justify-end'>
            <p>{project.views || 0} views</p>
          </div>
        </div>
        <Link target='_blank' href={project.url} onClick={handleViewIncrement}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {project.title}
          </p>
        </Link>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {project.description}
        </p>
        {
          <div className=''>
            <Link target='_blank' href={project.url}>
              <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
                View Documentation
              </button>
            </Link>
          </div>
        }
      </div>
    </div>
  );
}
export default ProjectCard;
