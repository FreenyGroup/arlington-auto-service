import Breadcrumb from '@/components/Breadcrumb';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import ServiceDetails from '@/components/ServiceDetails';
import SubscribeOne from '@/components/SubscribeOne';
import Preloader from '@/helper/Preloader';

export const metadata = {
  title:
    'Exhaust Muffler Welding || Arlington Auto Repair - Car Repair & Auto Services',
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={'Exhaust Muffler Welding'} />

      {/* Service Details */}
      <ServiceDetails
        title="Expert Muffler and Exhaust Welding Services"
        p1="A well-maintained exhaust system is key to your vehicle’s performance, fuel efficiency, and noise reduction. Our muffler and exhaust welding services ensure your exhaust system is properly sealed and functioning as it should. Whether you need repairs for leaks or a complete replacement, we’ve got you covered."
        p2="At Arlington Auto Service, we use high-quality materials and skilled welding techniques to restore or upgrade your exhaust system. Trust us to keep your vehicle running efficiently while minimizing noise and harmful emissions."
        subtitle="Why Choose Our Exhaust Welding Services?"
        p3="Our expert welding services guarantee a durable and reliable exhaust system, keeping your vehicle performing at its best while complying with emissions standards."
        b1="We seal any leaks in your exhaust system, improving performance and reducing harmful emissions."
        b2="Get a quiet, smooth ride with our high-quality muffler installation services."
        b3="Our skilled welders ensure strong, long-lasting repairs for your exhaust system."
        b4="A well-functioning exhaust system improves fuel efficiency and extends your vehicle’s lifespan."
        img="assets/img/service/muffler.png"
      />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
