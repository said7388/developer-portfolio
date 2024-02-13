import Image from 'next/image';
import Link from 'next/link';
import { FaCode, FaPlay } from 'react-icons/fa';
import placeholder from '/public/png/placeholder.png';

const SingleProject = ({ id, name, desc, tags, code, demo, image, theme }) => {

  return (
    <div className='singleProject w-full h-[360px] flex flex-col items-center justify-center relative cursor-text overflow-hidden px-8 py-[1.4rem] bg-[#1d293a] shadow-2xl rounded-lg border border-[#1a1443]'
    >
      <div className='projectContent flex flex-col items-center justify-between w-full h-full'>
        <h2 className='text-[#EFF3F4] not-italic font-semibold text-[1.525rem] leading-[110%] text-center'>
          {name}
        </h2>
        <Image
          src={image ? image?.src : placeholder}
          alt={name}
          width={1080}
          height={720}
          className='w-full h-3/5 transition-opacity duration-[0.7s] delay-[0.3s]'
        />
        <div className='project--showcaseBtn flex items-center justify-between w-full'>
          <Link
            href={demo}
            target='_blank'
            className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110  decoration-clone cursor-pointer no-underline delay-[0.3s]">
            <FaPlay />
          </Link>
          <Link
            href={code}
            target='_blank'
            className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-[#EFF3F4] text-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41] hover:scale-110 cursor-pointer no-underline  delay-[0.3s]">
            <FaCode />
          </Link>
        </div>
      </div>
      <p className='project--desc absolute w-[95%] h-40 translate-x-[-110%] translate-y-[40%] transition-transform duration-[0.9s] leading-[110%] flex items-center justify-center p-[15px] rounded-[0_20px_20px_0] left-0 top-0 bg-[#0f0b24] text-[#EFF3F4]'>
        {desc}
      </p>
      <div className='project--lang absolute w-[140px] text-[0.8rem] flex justify-center gap-2 flex-col translate-x-full transition-transform duration-[0.5s] delay-[0.3s] p-[0.825rem] rounded-[10px_0_0_10px] right-0 bottom-5 bg-[#0f0b24] text-[#EFF3F4]'>
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