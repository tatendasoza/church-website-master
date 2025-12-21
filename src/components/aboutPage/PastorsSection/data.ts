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
    title: 'Prophet',
  },
  
];
