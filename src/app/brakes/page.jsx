import Breadcrumb from '@/components/Breadcrumb';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import ServiceDetails from '@/components/ServiceDetails';
import SubscribeOne from '@/components/SubscribeOne';
import Preloader from '@/helper/Preloader';

export const metadata = {
  title:
    'Brakes || Arlington Auto Repair - Car Repair & Auto Services',
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={'Brakes'} />

      {/* Service Details */}
      <ServiceDetails
        title="Reliable Brake Services for Your Safety"
        p1="Your vehicle’s braking system is crucial for your safety on the road. At our shop, we offer comprehensive brake services to ensure your brakes are functioning properly and efficiently. Whether you’re experiencing squeaking noises, reduced braking power, or need routine maintenance, our expert technicians are here to help."
        p2="From brake pad replacements to full system inspections, we take a thorough approach to brake care. Our goal is to provide you with the peace of mind that comes from knowing your vehicle can stop safely and reliably whenever you need it."
        subtitle="Why Choose Our Brake Services?"
        p3="Our brake services are designed with your safety in mind. We use high-quality parts and expert techniques to ensure your brakes perform at their best, helping you stay safe on the road."
        b1="We thoroughly inspect your entire braking system to identify any issues."
        b2="We use top-grade brake pads, rotors, and components for lasting performance."
        b3="Our technicians are skilled in diagnosing and repairing all types of brake issues."
        b4="We prioritize your safety by ensuring your brakes provide reliable stopping power."
        img="assets/img/service/brakes.png"
      />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
