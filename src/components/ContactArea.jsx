import React from 'react';

const ContactArea = () => {
  return (
    <>
      <div className="contact-area space">
        <div className="container">
          <div className="row gy-4 justify-content-center">
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <h6 className="contact-info_title">Address</h6>
                <p className="contact-info_text">
                  3800 S Four Mile Run Dr Bay D
                </p>
                <p className="contact-info_text">
                  Arlington VA 22206
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-phone-alt" />
                </div>
                <h6 className="contact-info_title">Phone Number</h6>
                <p className="contact-info_text">
                  <a href="tel:5714317481">(571) 431-7481</a>
                </p>
                <p className="contact-info_text">
                  <a href="tel:5713886755">(571) 388-6755</a>
                </p>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-clock" />
                </div>
                <h6 className="contact-info_title">Opening</h6>
                <p className="contact-info_text">
                  Mon-Fri 7AM To 5PM
                </p>
                <p className="contact-info_text">Sat 7AM To 1PM</p>
              </div>
            </div>
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="contact-info">
                <div className="contact-info_icon">
                  <i className="fas fa-envelope" />
                </div>
                <h6 className="contact-info_title">E-mail</h6>
                <p className="contact-info_text">
                  <a href="mailto:contact@arlington-autoservice.com">
                    contact@arlington-autoservice.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-bottom">
        <div className="container">
          <div className="map-sec">
            <iframe
              src="https://maps.google.com/maps?width=715&amp;height=456&amp;hl=en&amp;q=3800 S Four Mile Run Dr&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen=""
              loading="lazy"
              title="address"
            />
          </div>
        </div>
      </div>
      <div className="space-bottom">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-lg-6 text-lg-end">
              <div className="faq-thumb2 mb-xl-0 mb-50">
                <div className="about-counter-grid jump">
                  <img
                    src="assets/img/icon/faq2-counter-icon-1.svg"
                    alt="Fixturbo"
                  />
                  <div className="media-right">
                    <h3 className="about-counter">
                      <span className="counter-number">100</span>+
                    </h3>
                    <h4 className="about-counter-text">
                      Services Provided
                    </h4>
                  </div>
                </div>
                <img
                  src="assets/img/normal/faq-thumb-2-1.png"
                  alt="Fixturbo"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-form-wrap p-0">
                <div className="title-area">
                  <span className="sub-title">Contact form</span>
                  <h2 className="sec-title">
                    Submit Your Request Today
                  </h2>
                </div>
                <form
                  action="mail.php"
                  method="POST"
                  className="appointment-form ajax-contact"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
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
                          className="form-select"
                          defaultValue={'Choose'}
                        >
                          <option value="Choose">
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
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      placeholder="Message here.."
                      id="contactForm"
                      className="form-control"
                      defaultValue={''}
                      name="message"
                    />
                  </div>
                  <div className="form-btn col-12">
                    <button className="btn style2" type="submit">
                      Submit <i className="fas fa-arrow-right ms-2" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;
