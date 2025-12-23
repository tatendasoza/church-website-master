import Image from 'next/image';
import React, { useRef } from 'react';
import PlayIcon from '@/assets/svgs/home/play-icon.svg';

const staticVideos = [
  { id: 'Awxl_zAfmAI', link: 'https://www.youtube.com/live/Awxl_zAfmAI?feature=shared' },
  { id: '_UhiDc5U9_U', link: 'https://youtu.be/_UhiDc5U9_U?si=cIwC4FxEkP94-Ux5' },
  { id: '-ouHx2KUwqM', link: 'https://youtu.be/-ouHx2KUwqM?si=ImOYLqqBCkLYeHwc' },
];

const MessagesList = () => {
  const sectionRef = useRef<null | HTMLDivElement>(null);

  return (
    <section
      id='messages-list'
      className='px-primary pb-[93px] !scroll-smooth'
      ref={sectionRef}
    >
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px]  mb-[30px]'>
        Recent Messages
      </h2>
      <div className='gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
        {staticVideos.map((video) => (
          <div
            key={video.id}
            className='flex flex-col gap-[17px] text-center md:text-left  w-full '
          >
            <a
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(https://img.youtube.com/vi/${video.id}/hqdefault.jpg)`,
              }}
              href={video.link}
              target='_blank'
              className='flex items-center justify-center w-full h-[316px] max-h-screen group bg-center bg-no-repeat bg-cover rounded-[20px]'
            >
              <Image
                src={PlayIcon}
                alt='Play'
                className='group-hover:sepia duration-300'
                width={95}
                height={95}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MessagesList;
