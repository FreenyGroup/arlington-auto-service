import Breadcrumb from '@/components/Breadcrumb';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import ServiceDetails from '@/components/ServiceDetails';
import SubscribeOne from '@/components/SubscribeOne';
import Preloader from '@/helper/Preloader';

export const metadata = {
  title:
    'Tires || Arlington Auto Repair - Car Repair & Auto Services',
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={'Tires'} />

      {/* Service Details */}
      <ServiceDetails
        title="Tire Services for a Smooth and Safe Ride"
        p1="Your tires are the only part of your vehicle that makes contact with the road, making their condition critical to your safety and driving experience. At our shop, we offer a full range of tire services, including installation, rotation, balancing, and repair. Whether you need new tires or maintenance for your current set, our team ensures your vehicle is equipped for the road ahead."
        p2="Proper tire care not only enhances your vehicle’s performance but also extends the life of your tires, saving you money in the long run. Trust our experts to keep your tires in top shape, ensuring a safe and comfortable ride."
        subtitle="Why Choose Our Tire Services?"
        p3="Our tire services are designed to provide you with the best in safety, performance, and value. From helping you select the right tires to ensuring they wear evenly, we’re here to meet all your tire needs."
        b1="We offer expert installation of all tire brands and sizes, ensuring a perfect fit."
        b2="Regular tire rotation and balancing for even wear and a smoother ride."
        b3="Quick and effective repairs to get you back on the road safely."
        b4="We monitor and adjust tire pressure to maximize fuel efficiency and safety."
        img="assets/img/service/tires.png"
      />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
