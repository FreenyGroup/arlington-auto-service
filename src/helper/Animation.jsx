'use client';

import Aos from 'aos';
import { useEffect } from 'react';
import ScrollToTop from 'react-scroll-to-top';

const Animation = () => {
  useEffect(() => {
    Aos.init({
      offset: 0,
      easing: 'ease',
      once: true,
      duration: 1200,
    });
    Aos.refresh();
  }, []);
  return (
    <>
      <ScrollToTop smooth color="#06aff7" />
    </>
  );
};

export default Animation;
