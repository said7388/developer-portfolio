import { FaCode, FaPlay } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

const SingleProject = ({ id, name, desc, tags, code, demo, image, theme }) => {

  return (
    <div key={id}
      className='singleProject bg-[#121835] rounded-lg border border-[#1f223c]'
    >
      <div className='projectContent'>
        <h2 className='text-[#EFF3F4]'>
          {name}
        </h2>
        <img
          src={image ? image?.src : placeholder}
          alt={name}
        />
        <div className='project--showcaseBtn flex justify-center items-center w-full'>
          <a
            href={demo}
            target='_blank'
            rel='noreferrer'
            className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110 cursor-pointer decoration-clone">
            <FaPlay
              id={`${name
                .replace(' ', '-')
                .toLowerCase()}-demo`}
              aria-label='Demo'
            />
          </a>
          <a
            href={code}
            target='_blank'
            rel='noreferrer'
            className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110">
            <FaCode
              id={`${name
                .replace(' ', '-')
                .toLowerCase()}-code`}
              aria-label='Code'
            />
          </a>
        </div>
      </div>
      <p className='project--desc bg-[#0f0b24] text-[#EFF3F4]'>
        {desc}
      </p>
      <div className='project--lang bg-[#0f0b24] text-[#EFF3F4]'>
        {tags.map((tag, id) => (
          <span className='font-medium break-words' key={id}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SingleProject;