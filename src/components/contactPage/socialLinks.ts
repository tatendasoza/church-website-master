import InstagramIcon from '@/assets/svgs/contact/socials/instagram.svg';
import FacebookIcon from '@/assets/svgs/contact/socials/facebook.svg';
import YoutubeIcon from '@/assets/svgs/contact/socials/youtube.svg';

interface Link {
  alt: string;
  src: string;
  destination: string;
}

const socialLinks: Link[] = [
  {
    alt: 'Facebook Page',
    src: FacebookIcon,
    destination: 'https://www.facebook.com/share/17VZ41VaZ2/?mibextid=wwXIfr',
  },
];

export default socialLinks;
