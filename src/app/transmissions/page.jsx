import Breadcrumb from '@/components/Breadcrumb';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import ServiceDetails from '@/components/ServiceDetails';
import SubscribeOne from '@/components/SubscribeOne';
import Preloader from '@/helper/Preloader';

export const metadata = {
  title:
    'Transmission || Arlington Auto Repair - Car Repair & Auto Services',
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={'Transmissions'} />

      {/* Service Details */}
      <ServiceDetails
        title="Expert Transmission Services for Smooth Shifting"
        p1="Your transmission plays a vital role in your vehicle’s performance, ensuring smooth shifting and efficient power delivery. Our transmission services cover everything from routine maintenance to full rebuilds, helping you avoid costly breakdowns and ensuring your vehicle runs smoothly."
        p2="Whether you’re experiencing slipping gears, delayed shifting, or strange noises, our experienced technicians will diagnose and resolve the issue with precision. We’re committed to keeping your transmission in peak condition, extending the life of your vehicle and enhancing your driving experience."
        subtitle="Why Choose Our Transmission Services?"
        p3="Our transmission services combine advanced diagnostics with expert repairs, ensuring your vehicle’s transmission operates flawlessly. We’re here to keep you shifting smoothly and confidently on the road."
        b1="We use advanced tools to diagnose transmission issues accurately and recommend the best solutions."
        b2="Regular transmission fluid changes to keep your transmission lubricated and performing at its best."
        b3="We handle everything from minor repairs to complete transmission rebuilds with expert care."
        b4="We offer maintenance services designed to prevent transmission issues and extend its lifespan."
        img="assets/img/service/transmission.png"
      />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
