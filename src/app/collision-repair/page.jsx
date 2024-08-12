import Breadcrumb from '@/components/Breadcrumb';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import ServiceDetails from '@/components/ServiceDetails';
import SubscribeOne from '@/components/SubscribeOne';
import Preloader from '@/helper/Preloader';

export const metadata = {
  title:
    'Collision Repair || Arlington Auto Repair - Car Repair & Auto Services',
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={'Collision Repair'} />

      {/* Service Details */}
      <ServiceDetails
        title="Comprehensive Collision Repair to Restore Your Vehicle"
        p1="Accidents happen, but our collision repair services are here to help you get back on the road quickly and safely. We specialize in restoring vehicles to their pre-accident condition, addressing everything from minor dents to major structural damage. Our team works with precision and care to ensure your vehicle not only looks great but is also safe to drive."
        p2="We handle the entire collision repair process, including bodywork, paint matching, and any necessary mechanical repairs. With our advanced techniques and high-quality materials, we’ll have your vehicle looking and performing like new again."
        subtitle="Why Choose Our Collision Repair?"
        p3="Our collision repair services are thorough and efficient, designed to restore both the appearance and safety of your vehicle. We take pride in delivering results that meet the highest standards of quality and reliability."
        b1="We manage everything from bodywork to mechanical repairs, ensuring complete restoration."
        b2="We work with your insurance company to streamline the repair process and minimize your stress."
        b3="Our technicians are skilled in restoring vehicles with meticulous attention to detail."
        b4="We prioritize structural integrity and safety, ensuring your vehicle is road-ready."
        img="assets/img/service/collision.png"
      />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
