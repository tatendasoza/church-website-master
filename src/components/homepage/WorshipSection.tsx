import React from 'react';
import PlayIcon from '@/assets/svgs/home/play-icon.svg';
import Image from 'next/image';

const WorshipSection = () => {
  const latest = {
    id: 'Awxl_zAfmAI',
    link: 'https://www.youtube.com/live/Awxl_zAfmAI?feature=shared',
  };

  return (
    <section id='worship' className='message-bg px-primary py-[93px]'>
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary  mb-[11px]'>
        Our Last Worship Experience
      </h2>
      <a
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(https://img.youtube.com/vi/${latest.id}/hqdefault.jpg)`,
        }}
        href={latest.link}
        target='_blank'
        className='flex items-center justify-center w-full h-[316px] lg:h-[640px] max-h-screen group bg-center bg-no-repeat bg-cover rounded-[40px]'
      >
        <Image
          src={PlayIcon}
          alt='Play'
          className='group-hover:sepia duration-300 h-[98px] w-[98px] lg:h-auto lg:w-auto'
        />
      </a>
    </section>
  );
};

export default WorshipSection;
