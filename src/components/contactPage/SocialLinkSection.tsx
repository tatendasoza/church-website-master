import React from 'react';
import Image from 'next/image';
import contactInfo from '@/components/layout/Footer/contactInfo';
import PhoneIcon from '@/assets/svgs/contact/phone.svg';

const SocialLinkSection = () => {
  return (
    <>
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary  mb-3'>
        Contact Details
      </h2>
      <p className='text-lg lg:text-2xl text-center font-medium mb-[59px]'>
        Reach us directly via our address and phone contacts below.
      </p>
      <ul className='flex flex-col items-center gap-[24px]'>
        {contactInfo.map((item) => (
          <li key={item.text} className='flex items-center gap-4'>
            <Image src={item.icon} alt={item.alt} />
            {item.type === 'email' && (
              <a
                target='_blank'
                rel='noreferrer'
                href={'mailto:' + item.text}
                className='text-primary'
              >
                {item.text}
              </a>
            )}
            {item.type === 'phone' && (
              <a
                target='_blank'
                rel='noreferrer'
                href={'tel:' + item.text}
                className='text-primary'
              >
                {item.text}
              </a>
            )}
            {!item.type && <span className='text-primary'>{item.text}</span>}
          </li>
        ))}
      </ul>
      <div className='mt-6 text-center'>
        <a
          href='https://wa.me/263771922995'
          target='_blank'
          rel='noreferrer'
          className='text-secondary underline inline-flex items-center gap-2'
        >
          <Image src={PhoneIcon} alt='WhatsApp' />
          WhatsApp: wa.me/263771922995
        </a>
      </div>
    </>
  );
};

export default SocialLinkSection;
