type Link = {
  title: string;
  destination: string;
  external?: boolean;
};

const links: Link[] = [
  {
    title: 'HOME',
    destination: '/',
  },
  {
    title: 'ABOUT',
    destination: '/about',
  },
  {
    title: 'MESSAGES',
    destination: '/messages',
  },
  {
    title: 'EVENTS',
    destination: '/events',
  },
  {
    title: 'CONTACT',
    destination: '/contact',
  },
  {
    title: 'INSPIRATION',
    destination: '/devotional',
  },
  {
    title: 'COMMUNITY',
    destination: '/church-locations',
  },
  {
    title: 'STORE',
    destination: '/resources',
  },
  {
    title: 'DONATE',
    destination: '/giving',
  },
];

export default links;
