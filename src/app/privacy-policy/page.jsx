import Breadcrumb from '@/components/Breadcrumb';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import Preloader from '@/helper/Preloader';
import PrivacyPolicy from '@/components/PrivacyPolicy';

export const metadata = {
  title:
    'Contact || Arlington Auto Service - Car Repair & Auto Services',
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={'Contact'} />

      <PrivacyPolicy />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
