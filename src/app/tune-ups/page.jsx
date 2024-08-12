import Breadcrumb from '@/components/Breadcrumb';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import ServiceDetails from '@/components/ServiceDetails';
import SubscribeOne from '@/components/SubscribeOne';
import Preloader from '@/helper/Preloader';

export const metadata = {
  title:
    'Tune Ups || Arlington Auto Repair - Car Repair & Auto Services',
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={'Tune Ups'} />

      {/* Service Details */}
      <ServiceDetails
        title="Comprehensive Tune-Ups for Peak Performance"
        p1="Regular tune-ups are essential for maintaining your vehicle's performance and preventing costly breakdowns. At our shop, we provide thorough tune-up services that include inspecting and replacing vital components like spark plugs, filters, and ignition systems. Our goal is to keep your engine running smoothly and efficiently, ensuring optimal fuel economy and power."
        p2="A well-maintained vehicle not only performs better but also lasts longer. Our expert technicians will tailor the tune-up to your vehicle’s specific needs, addressing any potential issues before they become major problems."
        subtitle="Why Choose Our Tune-Up Services?"
        p3="Our tune-up services are designed to bring out the best in your vehicle, enhancing its reliability and longevity. We focus on every detail to ensure your car performs at its peak, giving you peace of mind on the road."
        b1="We replace worn spark plugs to ensure efficient combustion and smooth engine operation."
        b2="We inspect and replace air, fuel, and oil filters to keep your engine clean and running efficiently."
        b3="We test and maintain the ignition system to ensure reliable starting and consistent performance."
        b4="We perform a thorough inspection to identify and address any potential issues, keeping your vehicle in top shape."
        img="assets/img/service/tune.png"
      />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
