'use client';
import Link from 'next/link';
import React, { useState } from 'react';
// import Swiper core and required modules
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/autoplay';

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');

const ClientAreaOne = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...data }),
      });
      if (!res.ok) throw new Error('Submit failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };
  return (
    <div
      className="client-bg-area"
      style={{
        backgroundImage: 'url(assets/img/bg/client-bg1-1.png)',
      }}
    >
      <div className="client-area-1 text-center">
        <div className="container">
          <div className="row global-carousel">
            <Swiper
              autoplay={true}
              loop={true}
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerGroup={2}
              className="mySwiper"
              speed={2000}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
                1200: {
                  slidesPerView: 5,
                },
                1400: {
                  slidesPerView: 5,
                },
              }}
            >
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link href="/">
                      <img
                        src="assets/img/client/1-1.png"
                        alt="Fixturbo"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link href="/">
                      <img
                        src="assets/img/client/1-2.png"
                        alt="Fixturbo"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link href="/">
                      <img
                        src="assets/img/client/1-3.png"
                        alt="Fixturbo"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link href="/">
                      <img
                        src="assets/img/client/1-4.png"
                        alt="Fixturbo"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link href="/">
                      <img
                        src="assets/img/client/1-5.png"
                        alt="Fixturbo"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link href="/">
                      <img
                        src="assets/img/client/1-1.png"
                        alt="Fixturbo"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link href="/">
                      <img
                        src="assets/img/client/1-2.png"
                        alt="Fixturbo"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link href="/">
                      <img
                        src="assets/img/client/1-3.png"
                        alt="Fixturbo"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link href="/">
                      <img
                        src="assets/img/client/1-4.png"
                        alt="Fixturbo"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="col-lg-auto">
                  <div className="client-logo">
                    <Link href="/">
                      <img
                        src="assets/img/client/1-5.png"
                        alt="Fixturbo"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/*==============================
    Appointment Area
    ==============================*/}
      <div className="appointment-area-1 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="appointment-form-wrap bg-theme">
                <div className="title-area">
                  <span className="sub-title text-white">
                    Send a request
                  </span>
                  <h2 className="sec-title text-white">
                    One-Stop Auto Shop In Arlington
                  </h2>
                </div>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="appointment-form"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don't fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control style-border2"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control style-border2"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control style-border2"
                          name="number"
                          id="number"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control style-border2"
                          name="number"
                          id="number"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          name="subject"
                          id="subject"
                          className="form-select style-border2"
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Choose a Option
                          </option>
                          <option value="ac-repair">
                            A/C Repair
                          </option>
                          <option value="auto-body-repair">
                            Auto Body Repair
                          </option>
                          <option value="auto-body-painting">
                            Auto Body Painting
                          </option>
                          <option value="brakes">Brakes</option>
                          <option value="collision-repair">
                            Collision Repair
                          </option>
                          <option value="diagnostics">
                            Diagnostics
                          </option>
                          <option value="engine-repair">
                            Engine Repair
                          </option>
                          <option value="oil-change">
                            Oil Change
                          </option>
                          <option value="tune-ups">Tune Ups</option>
                          <option value="tires">Tires</option>
                          <option value="trasmission">
                            Trasmission
                          </option>
                          <option value="other">Other</option>
                        </select>
                        <i className="fas fa-angle-down text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      placeholder="Message here.."
                      id="contactForm"
                      className="form-control style-border2"
                      defaultValue={''}
                      name="message"
                    />
                  </div>
                  <div className="form-btn col-12">
                    <button className="btn style3" type="submit">
                      Submit Request{' '}
                      <i className="fas fa-arrow-right ms-2" />
                    </button>
                  </div>
                  {status === 'success' && <p className="text-white mt-3">Thanks! We'll be in touch soon.</p>}
                  {status === 'error' && <p className="text-white mt-3">Something went wrong. Please try again.</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="appointment-thumb-1">
          <img
            src="assets/img/normal/appointment-thumb-1-1.png"
            alt="Fixturbo"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientAreaOne;
