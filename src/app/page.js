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
    'Home || Fixturbo - Car Repair & Auto Services NEXT Js Template',
  description:
    'Fixturbo is a clean and modern React Template suitable for any type of Auto Servicing, Car Repair & Maintenance website. It is created for automobile servicing providers who offer car wash, car service, routine maintenance, truck service, etc. This HTML template can be used for car servicing, car repairing, car wash, auto shop, mechanic shop, batteries shop, tire / wheel shop, and multipurpose businesses. We have used comment on codes and also decorated the codes beautifully so one can find it very easy to customize.',
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
