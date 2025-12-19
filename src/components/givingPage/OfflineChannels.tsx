import React from 'react';
import offlineChannels from './data';
import Image from 'next/image';
import { copyToClipboard } from '@/functions/utils';
import { removeSpacesFromString } from '@/functions/stringManipulations';
import { sendFeedback } from '@/functions/feedback';
import Link from 'next/link';
import Button from '@/common/Button';

const OfflineChannels = () => {
  return (
    <div id='offline-giving-channels' className='px-primary py-[100px]'>
      <h2 className='text-primary font-bold text-[30px] lg:text-[40px] text-center font-secondary  mb-3'>
        Offline Giving Channels
      </h2>
      <p className='text-lg lg:text-2xl text-center font-medium mb-[113px]'>
        GOODNEWS GREATERLIFE FAMILY — Tithe, Partner or Sow your seeds
      </p>
      <ul className='flex flex-col gap-[66px] items-center w-full'>
        {offlineChannels.map((item, index) => (
          <li
            key={index}
            className='flex items-stretch gap-5 w-full flex-wrap justify-center'
          >
            <Image
              src={item.icon}
              width={200}
              height={200}
              className='object-contain w-[152px] h-[152px] max-w-full'
              alt='bank'
            />
            <div
              className='bg-white px-[34px] w-[478px] max-w-full py-5 rounded-[5px] flex flex-col justify-center gap-[5px] border cursor-pointer hover:bg-primary hover:!text-white duration-300 group'
              style={{
                borderColor: item.color,
              }}
              onClick={() => {
                copyToClipboard(removeSpacesFromString(item.accountNumber));
                sendFeedback('Account number copied', 'info');
              }}
            >
              <p
                style={{
                  color: item.color,
                }}
                className='font-bold text-[30px] lg:text-[40px] group-hover:!text-white font-secondary'
              >
                {item.accountNumber}
              </p>
              <span className='text-lg lg:text-2xl font-bold'>{item.accountName}</span>
              <span className='text-base lg:text-lg'>
                Bank: {item.bankName} • Type: {item.accountType}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className='mt-[80px] flex flex-col items-center text-center gap-4'>
        <p className='text-lg lg:text-xl font-medium max-w-[780px]'>
          You can also give online securely via Paynow using cards or mobile money
          (EcoCash, Telecash, Netcash, OneMoney, Omari).
        </p>
        <a
          href='https://www.paynow.co.zw/greaterlife'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button className='!w-[280px]'>Pay Online (Paynow)</Button>
        </a>
        <p className='text-sm lg:text-base'>
          For prayers and blessing after giving, message us on WhatsApp:&nbsp;
          <a
            href='https://wa.me/263771922995'
            target='_blank'
            rel='noopener noreferrer'
            className='text-secondary underline'
          >
            wa.me/263771922995
          </a>
        </p>
      </div>
    </div>
  );
};

export default OfflineChannels;
