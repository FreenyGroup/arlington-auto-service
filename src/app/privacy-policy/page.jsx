import Breadcrumb from '@/components/Breadcrumb';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import Preloader from '@/helper/Preloader';
import PrivacyPolicy from '@/components/PrivacyPolicy';

export const metadata = {
  title:
    'Contact || Fixturbo - Car Repair & Auto Services NEXT Js Template',
  description:
    'Fixturbo is a clean and modern React Template suitable for any type of Auto Servicing, Car Repair & Maintenance website. It is created for automobile servicing providers who offer car wash, car service, routine maintenance, truck service, etc. This HTML template can be used for car servicing, car repairing, car wash, auto shop, mechanic shop, batteries shop, tire / wheel shop, and multipurpose businesses. We have used comment on codes and also decorated the codes beautifully so one can find it very easy to customize.',
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
