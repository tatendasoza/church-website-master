import React from 'react';

const HistorySection = () => {
  return (
    <section id='history' className='px-primary mt-[107px]'>
      <h2 className='font-bold text-xl md:text-2xl text-center mb-5'>SHILOH PRAYER MOUNTAIN</h2>
      <p className='text-center font-bold text-primary text-[30px] md:text-[35px] lg:text-[40px] mb-10 font-secondary'>
        Prayer Mountain & Camping Site
      </p>
      <div className='flex flex-col gap-5 md:text-lg w-full'>
        <p>
          Shiloh Prayer Mountain and Camping site exist as an extension of the mandate on
          Prophet Takura Immanuel Gaadzikwa’s life to “Go and deliver my people” and to
          take the Gospel to every corner of the earth. The Prayer Centre trains men and
          women to go into the world with the integrity of the Word and the move of the
          Holy Spirit, exercising the priesthood ministry of prayer.
        </p>
        <p>In so doing, these men and women will be known for:</p>
        <ul className='list-disc pl-6'>
          <li>Honoring the Word</li>
          <li>Loving Like Christ</li>
          <li>Living by Faith</li>
          <li>Healing the sick</li>
          <li>Delivering the Captive</li>
          <li>Exercising the Believer’s Authority</li>
          <li>Being led by the Spirit</li>
          <li>Doing everything with excellence & Integrity</li>
        </ul>
      </div>
    </section>
  );
};

export default HistorySection;
