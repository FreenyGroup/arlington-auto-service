import AboutOne from '@/components/AboutOne';
import Breadcrumb from '@/components/Breadcrumb';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import ProcessAreaOne from '@/components/ProcessAreaOne';
import SubscribeOne from '@/components/SubscribeOne';
import Preloader from '@/helper/Preloader';
import ClientAreaOne from '@/components/ClientAreaOne';

export const metadata = {
  title:
    'About || Arlington Auto Service - Car Repair & Auto Services',
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={'About Us'} />

      <AboutOne />

      {/* Process Area One */}

      <ProcessAreaOne />

      <div className="space-bottom">
        <ClientAreaOne />
      </div>

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
