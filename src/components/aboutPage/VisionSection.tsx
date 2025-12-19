import React from 'react';
import VisionImage from '@/assets/images/about/vision.webp';
import Image from 'next/image';

const VisionSection = () => {
  return (
    <section id='vision' className='px-primary mt-[118px]'>
      <h2 className='text-center font-bold text-primary text-[30px] md:text-[35px] lg:text-[40px] mb-[51px] font-secondary'>
        The Vision and Mission
      </h2>

      <div className='flex flex-col gap-8 md:flex-row items-center md:items-start text-center md:text-left'>
        <div className='-mt-10 md:flex-[50%]'>
          <Image src={VisionImage} alt='vision' />
        </div>
        <div className='flex flex-col gap-[56px] text-[#00050D] md:flex-[50%]'>
          <div className='flex flex-col gap-1'>
            <p className='font-lg font-secondary font-bold uppercase'>Vision</p>
            <p className='text-2xl'>
              Create a community of authentic believers and witness a people transformed
              by the life-changing reality of the Gospel, as people come to know Jesus as
              Lord and Saviour.
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-lg font-secondary font-bold uppercase'>Mission</p>
            <p className='text-2xl'>
              Go therefore and make disciples of all nations, baptizing them in the name
              of the Father and of the Son and of the Holy Spirit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
