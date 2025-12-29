import Image from 'next/image';
import React from 'react';
import WhiteLogo from '@/assets/brand/logo-white.png';
 

function LogoSection() {
  return (
    <div className='text-white flex-col'>
      <Image src={WhiteLogo} alt='Greaterlife Ministries International' className='h-[138px] w-auto' />
      <p className='font-normal mt-[34px] mb-[27px] text-sm'>
        Greaterlife Ministries International strongly believes in the Missions assignment of the New
        Testament Church and in impacting lives in our immediate community through
        provision, meeting basic needs, and putting in place empowerment programmes and
        activities.
      </p>
      
    </div>
  );
}

export default LogoSection;
