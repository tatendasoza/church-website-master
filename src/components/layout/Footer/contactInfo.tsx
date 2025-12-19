import Location from '@/assets/svgs/contact/location.svg';
import Email from '@/assets/svgs/contact/email.svg';
import Phone from '@/assets/svgs/contact/phone.svg';

interface Info {
  icon: string;
  text: string;
  type?: 'email' | 'phone';
  alt: string;
}

const contactInfo: Info[] = [
  {
    icon: Location,
    text: 'Rainbow Cinema 1, Corner Angwa and Robert, next to Edgars',
    alt: 'Address',
  },
  {
    icon: Phone,
    text: '+263 771 922 995',
    type: 'phone',
    alt: 'Phone',
  },
];

export default contactInfo;
