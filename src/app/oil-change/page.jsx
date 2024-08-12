import Breadcrumb from '@/components/Breadcrumb';
import FooterAreaOne from '@/components/FooterAreaOne';
import HeaderOne from '@/components/HeaderOne';
import ServiceDetails from '@/components/ServiceDetails';
import SubscribeOne from '@/components/SubscribeOne';
import Preloader from '@/helper/Preloader';

export const metadata = {
  title:
    'Oil Change || Arlington Auto Repair - Car Repair & Auto Services',
};

const page = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* Header one */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={'Oil Change'} />

      {/* Service Details */}
      <ServiceDetails
        title="Keep Your Engine Running Smoothly with Regular Oil Changes"
        p1="Regular oil changes are essential to maintaining the health and performance of your engine. At our shop, we offer quick and efficient oil change services to keep your vehicle running smoothly."
        p2="Our expert technicians use high-quality oils and filters tailored to your vehicle’s needs, ensuring optimal performance and extending the life of your engine."
        subtitle="The Benefits of Regular Oil Changes"
        p3="An oil change is one of the simplest yet most important maintenance tasks for your vehicle. Regular oil changes help prevent engine wear, improve fuel efficiency, and reduce the risk of costly repairs down the road."
        b1="We use top-grade oils suited to your vehicle’s specific requirements."
        b2="Our quick oil change service gets you back on the road in no time."
        b3="Our technicians will advise you on the best oil type and change intervals."
        b4="We also check your filters, fluids, and other vital components during the service."
        img="assets/img/service/oil.png"
      />

      {/* Subscribe One */}
      <SubscribeOne />

      {/* Footer Area One */}
      <FooterAreaOne />
    </>
  );
};

export default page;
