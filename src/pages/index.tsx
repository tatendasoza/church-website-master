// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
import AnnouncementSection from '@/components/homepage/AnnouncementSection';
import DevotionalSection from '@/components/homepage/DevotionalSection';
import DirectionSection from '@/components/homepage/DirectionSection';
import EventSection from '@/components/homepage/EventSection';
import HeroSection from '@/components/homepage/HeroSection';
import LinkSection from '@/components/homepage/LinkSection';
import SubscribeSection from '@/components/homepage/SubscribeSection';
import WelcomeSection from '@/components/homepage/WelcomeSection';
import WorshipExperienceSection from '@/components/homepage/WorshipExperienceSection';
import WorshipSection from '@/components/homepage/WorshipSection';
import AppLayout from '@/components/layout/AppLayout';

export default function Home() {
  return (
    <AppLayout>
      <HeroSection />
      <WelcomeSection />
      <LinkSection />
      <DevotionalSection />
      <WorshipSection />
      <WorshipExperienceSection />
      <EventSection />
      <AnnouncementSection />
    </AppLayout>
  );
}
