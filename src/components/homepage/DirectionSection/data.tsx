import React from 'react';

const timelines: { title: string; time: string }[] = [
  {
    title: 'Worship with Us Every Sunday',
    time: 'Sundays - 12:00pm to 2:00pm',
  },
  {
    title: 'Join Us Every Tuesday for a Midweek service',
    time: 'Tuesdays - 5:30pm to 7:00pm',
  },
];

export const serviceTimelines = timelines.map((timeline) => (
  <div key={timeline.title} className='h-[calc(8rem)] overflow-y-hidden'>
    <h2 className='text-[30px] md:text-[40px] lg:text-[50px] mb-[19px] font-normal font-secondary leading-4'>
      {timeline.title}
    </h2>
    <p className='font-secondary text-lg md:text-xl lg:text-[28px] leading-4'>
      {timeline.time}
    </p>
  </div>
));
