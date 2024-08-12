import Breadcrumb from '@/components/Breadcrumb';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import ServiceDetails from '@/components/ServiceDetails';
import SubscribeOne from '@/components/SubscribeOne';
import Preloader from '@/helper/Preloader';

export const metadata = {
  title:
    'A/C Repair || Arlington Auto Repair - Car Repair & Auto Services',
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={'A/C Repair'} />

      {/* Service Details */}
      <ServiceDetails
        title="Stay Cool with Expert A/C Repair Services"
        p1="A functional air conditioning system is essential for comfort, especially during the hot summer months. Our A/C repair services are designed to keep you cool and comfortable, no matter the season. Whether your A/C is blowing warm air or not working at all, our skilled technicians are here to diagnose and fix the issue."
        p2="We use advanced diagnostic tools to accurately identify the problem and offer effective solutions, from simple recharges to complex repairs. With our expertise, you can trust that your A/C system will be back to delivering the cool air you need."
        subtitle="Why Choose Our A/C Repair?"
        p3="Our A/C repair services ensure that your vehicle's air conditioning system functions efficiently and reliably. We prioritize your comfort and safety, delivering fast and effective solutions to keep your A/C in top condition."
        b1="We identify A/C issues quickly and accurately using advanced diagnostic tools."
        b2="Our technicians are skilled in handling all types of A/C repairs, from recharges to part replacements."
        b3="We understand the importance of a working A/C and strive to provide quick, efficient repairs."
        b4="Your comfort is our priority; we ensure your A/C system is restored to optimal performance."
        img="assets/img/service/ac.png"
      />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
