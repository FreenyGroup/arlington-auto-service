import Breadcrumb from '@/components/Breadcrumb';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import ServiceDetails from '@/components/ServiceDetails';
import SubscribeOne from '@/components/SubscribeOne';
import Preloader from '@/helper/Preloader';

export const metadata = {
  title:
    'Engine Repair || Arlington Auto Repair - Car Repair & Auto Services',
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={'Engine Repair'} />

      {/* Service Details */}
      <ServiceDetails
        title="Expert Engine Repair for Optimal Performance"
        p1="The engine is the heart of your vehicle, and keeping it in top condition is essential for reliable performance. Our engine repair services are designed to diagnose and fix any issues, from minor problems to major overhauls. With our experienced technicians and advanced diagnostic tools, we ensure your engine runs smoothly and efficiently."
        p2="Whether your vehicle is experiencing strange noises, reduced power, or other engine-related issues, we’re here to help. We provide comprehensive engine repair services that restore power, improve fuel efficiency, and extend the life of your vehicle."
        subtitle="Why Choose Our Engine Repair?"
        p3="Our engine repair services combine expertise with the latest technology to deliver reliable results. We’re committed to ensuring your engine performs at its best, so you can drive with confidence."
        b1="We use cutting-edge tools to accurately diagnose engine problems and recommend the best solutions."
        b2="Our team has extensive experience in repairing all types of engines, ensuring expert care."
        b3="We use only high-quality parts to ensure long-lasting repairs and optimal engine performance."
        b4="From minor repairs to complete engine rebuilds, we handle it all with precision and care."
        img="assets/img/service/engine.png"
      />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
