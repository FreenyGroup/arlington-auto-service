'use client';
import React, { useState } from 'react';
const PortfolioThree = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const openLightbox = (src) => {
    setIsOpen(true);
    setImageSrc(src);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setImageSrc('');
  };

  let img = [
    'assets/img/gallery/1.png',
    'assets/img/gallery/2.png',
    'assets/img/gallery/3.png',
    'assets/img/gallery/4.png',
    'assets/img/gallery/5.png',
    'assets/img/gallery/6.png',
    'assets/img/gallery/7.png',
    'assets/img/gallery/8.png',
    'assets/img/gallery/9.png',
    'assets/img/gallery/10.png',
    'assets/img/gallery/11.png',
    'assets/img/gallery/12.png',
    'assets/img/gallery/13.png',
    'assets/img/gallery/14.png',
  ];
  return (
    <div className="portfolio-area-1 space overflow-hidden bg-smoke">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Our Work</span>
              <h2 className="sec-title">Our Featured Gallery</h2>
              <p>
                Explore our gallery to see the quality of our work
                firsthand. From expert repairs to stunning paint jobs,
                our gallery showcases the craftsmanship and attention
                to detail that sets us apart. Whether it’s a complete
                restoration or a minor touch-up, our results speak for
                themselves.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-30">
          {img.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="portfolio-thumb">
                <button
                  className="popup-image icon-btn"
                  onClick={() => openLightbox(item)}
                >
                  <i className="far fa-eye" />
                </button>
                <div>
                  <img src={item} alt="Thumbnail" />
                </div>
              </div>
              {isOpen && (
                <div className="custom-modal_popup">
                  <span
                    className="close-button"
                    onClick={closeLightbox}
                  >
                    &times;
                  </span>
                  <img src={imageSrc} alt="Fullsize" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioThree;
