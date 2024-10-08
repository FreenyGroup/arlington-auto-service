'use client';
import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';
const AboutTwo = () => {
  return (
    <div className="space">
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-xl-6">
            <div className="about-thumb2 mb-40 mb-xl-0">
              <div className="about-img-1">
                <img
                  src="assets/img/normal/about_2-1.png"
                  alt="Fixturbo"
                />
              </div>
              <div className="about-img-2">
                <img
                  src="assets/img/normal/about_2-2.png"
                  alt="Fixturbo"
                />
              </div>
              <div className="about-counter-wrap jump-reverse">
                <img
                  src="assets/img/icon/about_icon2-1.svg"
                  alt="Fixturbo"
                />
                <h3 className="about-counter">
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className="counter-number">
                          <CountUp delay={0} start={0} end={1} />
                          k+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h3>
                <h4 className="about-counter-text">
                  Happy Customers
                </h4>
              </div>
              <div className="about-year-wrap2 movingX">
                <div className="about-year-grid-wrap">
                  <div className="icon">
                    <img
                      src="assets/img/icon/about_icon2-2.png"
                      alt="Fixturbo"
                    />
                  </div>
                  <h3 className="about-counter">
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className="counter-number">
                            <CountUp delay={0} start={0} end={50} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h3>
                </div>
                <h4 className="about-year-text">
                  Years Of Experiences
                </h4>
              </div>
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6">
            <div className="about-content-wrap">
              <div className="title-area mb-30">
                <span className="sub-title">Know About Us</span>
                <h2 className="sec-title">
                  Meet Your Automotive Specialists{' '}
                  <img
                    className="title-bg-shape shape-center"
                    src="assets/img/bg/title-bg-shape.png"
                    alt="Fixturbo"
                  />
                </h2>
                <p className="sec-text">
                  At Arlington Auto Service, we pride ourselves on
                  delivering top-notch automotive care, from routine
                  maintenance to complex repairs. Serving Arlington,
                  Virginia, we specialize in everything from
                  diagnostics and engine repair to brake services and
                  tire care. Our skilled technicians also offer
                  professional body painting and autobody repair,
                  ensuring your vehicle looks and performs at its
                  best. With a commitment to quality and customer
                  satisfaction, we’re here to keep your car running
                  smoothly and looking great.
                </p>
              </div>
              <div className="about-feature-wrap style-shadow">
                <div className="icon">
                  <img
                    src="assets/img/icon/about_icon2-3.svg"
                    alt="Fixturbo"
                  />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">
                    State-of-the-Art Equipment
                  </h5>
                  <p className="about-feature-text">
                    Equipped with advanced tools for precise
                    diagnostics, repairs, and flawless body painting.{' '}
                  </p>
                </div>
              </div>
              <div className="about-feature-wrap style-shadow">
                <div className="icon">
                  <img
                    src="assets/img/icon/about_icon2-4.svg"
                    alt="Fixturbo"
                  />
                </div>
                <div className="about-feature-wrap-details">
                  <h5 className="about-feature-title">
                    Experienced and Certified Technicians
                  </h5>
                  <p className="about-feature-text">
                    Our certified experts deliver top-quality service,
                    from maintenance to specialized body paint jobs.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
