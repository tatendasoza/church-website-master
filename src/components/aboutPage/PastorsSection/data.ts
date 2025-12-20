import { StaticImageData } from 'next/image';
import revUdohImage from '@/assets/images/about/pastors/apostle-udoh.webp';

export type PastorType = {
  image: StaticImageData;
  name: string;
  title: string;
};

export const pastorData: PastorType[] = [
  {
    image: revUdohImage,
    name: 'PROPHET TRY IMMANUEL',
    title: 'Senior Pastor',
  },
  {
    image: revUdohImage,
    name: 'PROPHET TRY IMMANUEL',
    title: 'Co-founding Pastor',
  },
  {
    image: revUdohImage,
    name: 'PROPHET TRY IMMANUEL',
    title: 'Pastor',
  },
  {
    image: revUdohImage,
    name: 'PROPHET TRY IMMANUEL',
    title: 'Pastor',
  },
  {
    image: revUdohImage,
    name: 'PROPHET TRY IMMANUEL',
    title: 'Pastor',
  },
  {
    image: revUdohImage,
    name: 'PROPHET TRY IMMANUEL',
    title: 'Pastor',
  },
  {
    image: revUdohImage,
    name: 'PROPHET TRY IMMANUEL',
    title: 'Pastor',
  },
  {
    image: revUdohImage,
    name: 'PROPHET TRY IMMANUEL',
    title: 'Pastor',
  },
];
