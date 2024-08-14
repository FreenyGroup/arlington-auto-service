import AboutTwo from '@/components/AboutTwo';
import ClientAreaOne from '@/components/ClientAreaOne';
import CounterOne from '@/components/CounterOne';
import FaqAreaOne from '@/components/FaqAreaOne';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import HeroOne from '@/components/HeroOne';
import ProcessAreaOne from '@/components/ProcessAreaOne';
import SubscribeOne from '@/components/SubscribeOne';
import Animation from '@/helper/Animation';
import WhyChooseUsOne from '@/components/WhyChooseUsOne';
import Preloader from '@/helper/Preloader';

export const metadata = {
  title:
    'Home || Arlington Auto Service - Car Repair & Auto Services',
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />
      {/* Animation init */}
      <Animation />
      {/* Header one */}
      <HeaderOne />
      {/* Hero One */}
      <HeroOne />
      {/* Counter One */}
      <CounterOne />
      {/* About Two */}
      <AboutTwo />
      {/* Marquee One */}
      <ClientAreaOne />
      {/* Why Choose Us One */}
      <WhyChooseUsOne />
      {/* Process Area One */}
      <ProcessAreaOne />
      {/* Faq Area One */}
      <FaqAreaOne />
      {/* Subscribe One */}
      <SubscribeOne />
      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
