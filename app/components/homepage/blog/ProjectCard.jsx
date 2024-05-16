import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaCommentAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <div className='border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group'>
      <div className='h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg'>
        <Image
          src={project.image}
          height={1080}
          width={1920}
          alt={project.title}
          className='h-full w-full group-hover:scale-110 transition-all duration-300'
        />
      </div>
      <div className='p-2 sm:p-3 flex flex-col'>
        <Link href={`/projects/${project._id}`} target='_blank'>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {project.title}
          </p>
        </Link>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {project.description}
        </p>
        <div className='flex justify-between items-center text-[#16f2b3] text-sm'>
          <div className='flex items-center gap-1'>
            <FaHeart />
            <span>{project.likes.length}</span>
          </div>
          <div className='flex items-center gap-1'>
            <FaCommentAlt />
            <span>{project.comments.length}</span>
          </div>
          <p>{project.views} views</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
