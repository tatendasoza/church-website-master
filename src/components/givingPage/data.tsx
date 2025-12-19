import zenithIcon from '@/assets/images/giving/zenith.svg';
import { StaticImageData } from 'next/image';

const offlineChannels: {
  color: string;
  icon: StaticImageData;
  accountName: string;
  bankName: string;
  accountType: string;
  accountNumber: string;
}[] = [
  {
    accountName: 'GREATERLIFE EMBASSY',
    bankName: 'CABS',
    accountType: 'NOSTRO FCA',
    accountNumber: '1154788016',
    color: '#002F72',
    icon: zenithIcon,
  },
  {
    accountName: 'GREATERLIFE EMBASSY',
    bankName: 'CABS',
    accountType: 'ZWG ACCOUNT',
    accountNumber: '1154788008',
    color: '#002F72',
    icon: zenithIcon,
  },
];

export default offlineChannels;
