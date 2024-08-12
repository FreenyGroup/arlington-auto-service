import Breadcrumb from '@/components/Breadcrumb';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import ServiceDetails from '@/components/ServiceDetails';
import SubscribeOne from '@/components/SubscribeOne';
import Preloader from '@/helper/Preloader';

export const metadata = {
  title:
    'Auto Body repair || Arlington Auto Repair - Car Repair & Auto Services',
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={'Auto Body & Repair'} />

      {/* Service Details */}
      <ServiceDetails
        title="Restore Your Vehicle with Expert Auto Body & Repair Services"
        p1="Whether it’s minor dents or major structural damage, our auto body & repair services are designed to restore your vehicle to its original condition. Our experienced technicians are skilled in handling a wide range of body repairs, ensuring that your car not only looks great but is safe to drive."
        p2="Using high-quality materials and advanced techniques, we address every aspect of auto body repair with precision. From frame straightening to paint touch-ups, we’re dedicated to making your vehicle look and perform like new."
        subtitle="Why Choose Our Auto Body & Repair?"
        p3="Our auto body & repair services are comprehensive, covering everything from minor cosmetic fixes to significant collision repairs. We take pride in our attention to detail and commitment to excellence, ensuring your vehicle receives the best possible care."
        b1="We handle all types of damage, from minor dents to major structural repairs."
        b2="We use only the best materials to ensure long-lasting results and a flawless finish."
        b3="Our technicians employ the latest repair methods for precision and efficiency."
        b4="We prioritize the structural integrity of your vehicle, ensuring it’s safe for the road."
        img="assets/img/service/autobody.png"
      />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
