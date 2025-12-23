import TikTokIcon from '@/assets/svgs/social/tiktok.svg';
import FacebookIcon from '@/assets/svgs/social/facebook.svg';
import YoutubeIcon from '@/assets/svgs/social/youtube.svg';

interface Link {
  alt: string;
  src: string;
  destination: string;
}

const socialLinks: Link[] = [
  {
    alt: 'Youtube Channel',
    src: YoutubeIcon,
    destination: 'https://youtube.com/@prophettakura?si=UjIxeJjGqmnZ38Zv',
  },
  {
    alt: 'Facebook Profile',
    src: FacebookIcon,
    destination: 'https://www.facebook.com/share/17VZ41VaZ2/?mibextid=wwXIfr',
  },
  {
    alt: 'TikTok Profile',
    src: TikTokIcon,
    destination:
      'https://www.tiktok.com/@immanueltakuragaadzikwa1?_r=1&_d=efil7m6lf90ja0&sec_uid=MS4wLjABAAAA-lt9OzaaEuieQ1-FIR1bvVmn_QdEYbwMOfYw-Jh48vLXA3eoxAIFX6WL9QIarxo-&share_author_id=7050579493555700741&sharer_language=en&source=h5_m&u_code=dmghjkg9k4ma38&ug_btm=b8727,b0&sec_user_id=MS4wLjABAAAA-lt9OzaaEuieQ1-FIR1bvVmn_QdEYbwMOfYw-Jh48vLXA3eoxAIFX6WL9QIarxo-&utm_source=whatsapp&social_share_type=5&utm_campaign=client_share&utm_medium=ios&tt_from=whatsapp&user_id=7050579493555700741&enable_checksum=1&share_link_id=5D214B05-0FB4-41DC-8B87-6D73E9795BD4&share_app_id=1233',
  },
];

export default socialLinks;
