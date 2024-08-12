import Breadcrumb from '@/components/Breadcrumb';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import ServiceDetails from '@/components/ServiceDetails';
import SubscribeOne from '@/components/SubscribeOne';
import Preloader from '@/helper/Preloader';

export const metadata = {
  title:
    'Diagnostics || Arlington Auto Repair - Car Repair & Auto Services',
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={'Diagnostics'} />

      {/* Service Details */}
      <ServiceDetails
        title="Precision Diagnostics for Accurate Repairs"
        p1="At our shop, we understand that accurate diagnostics are the foundation of effective auto repair. Our team utilizes state-of-the-art equipment to thoroughly inspect and diagnose your vehicle’s issues, ensuring no problem goes unnoticed."
        p2="With our expert diagnostics, you can trust that we’ll pinpoint the exact cause of any malfunction, allowing us to recommend the right repair solutions. We’re committed to getting you back on the road safely and efficiently."
        subtitle="Why Choose Our Diagnostics?"
        p3="Our diagnostic services are second to none, offering you peace of mind with a clear understanding of your vehicle’s condition. We take the guesswork out of auto repair, providing you with reliable and precise results every time."
        b1="We use cutting-edge diagnostic tools to accurately identify vehicle issues."
        b2="Our skilled technicians are trained to interpret diagnostic results with precision."
        b3="We thoroughly inspect every aspect of your vehicle to ensure no issue is missed."
        b4="You’ll receive clear, detailed reports on the findings and recommended repairs."
        img="assets/img/service/diagnostics.png"
      />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
