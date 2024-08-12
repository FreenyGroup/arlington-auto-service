import Breadcrumb from '@/components/Breadcrumb';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import ServiceDetails from '@/components/ServiceDetails';
import SubscribeOne from '@/components/SubscribeOne';
import Preloader from '@/helper/Preloader';

export const metadata = {
  title:
    'Body Painting || Arlington Auto Repair - Car Repair & Auto Services',
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={'Body Painting'} />

      {/* Service Details */}
      <ServiceDetails
        title="Flawless Auto Body Painting for a Stunning Finish"
        p1="A fresh coat of paint can transform your vehicle, restoring its original shine or giving it a brand-new look. Our auto body painting services are designed to deliver a flawless, durable finish that enhances your vehicle’s appearance and value. Whether you need a touch-up or a full-body repaint, our skilled technicians are here to provide exceptional results."
        p2="Using high-quality paints and advanced color-matching technology, we ensure that your vehicle’s new paintwork blends seamlessly with its original color or stands out with a bold, custom hue. We take pride in our attention to detail, delivering a smooth, even finish every time."
        subtitle="Why Choose Our Auto Body Painting?"
        p3="Our auto body painting services combine expert craftsmanship with the latest technology to deliver stunning, long-lasting results. We’re committed to making your vehicle look its best, whether you’re restoring its original beauty or opting for a new look."
        b1="We use advanced technology to ensure perfect color matching for a seamless finish."
        b2="Our high-quality paints are designed to withstand the elements and maintain their shine."
        b3="Our technicians apply paint with precision, ensuring a smooth and even finish."
        b4="We offer a range of custom paint options to help you achieve the exact look you want."
        img="assets/img/service/painting.png"
      />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
