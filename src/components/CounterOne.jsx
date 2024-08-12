'use client';
import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';

const CounterOne = () => {
  return (
    <div className="counter-area-1 space-bottom">
      <div className="container">
        <div className="counter-wrap1">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-7">
              <div className="counter-card-wrap">
                <div className="row gy-30 justify-content-between">
                  <div className="col-sm-6 col-lg-auto">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className="counter-number">
                                  <CountUp
                                    delay={0}
                                    start={0}
                                    end={100}
                                  />
                                  +
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p className="counter-card_text">
                          Services are offered
                        </p>
                      </div>
                      <div className="counter-card_icon">
                        <img
                          src="assets/img/icon/counter-icon_1-1.svg"
                          alt="Fixturbo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-auto">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className="counter-number">
                                  <CountUp
                                    delay={0}
                                    start={0}
                                    end={20}
                                  />
                                  +
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p className="counter-card_text">
                          Car Makes Serviced
                        </p>
                      </div>
                      <div className="counter-card_icon">
                        <img
                          src="assets/img/icon/counter-icon_1-2.svg"
                          alt="Fixturbo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-auto">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className="counter-number">
                                  <CountUp
                                    delay={0}
                                    start={0}
                                    end={50}
                                  />
                                  +
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p className="counter-card_text">
                          Years Of Experience
                        </p>
                      </div>
                      <div className="counter-card_icon">
                        <img
                          src="assets/img/icon/counter-icon_1-3.svg"
                          alt="Fixturbo"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-auto">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="counter-card_number">
                          <TrackVisibility once>
                            {({ isVisible }) =>
                              isVisible && (
                                <span className="counter-number">
                                  <CountUp
                                    delay={0}
                                    start={0}
                                    end={500}
                                  />
                                  +
                                </span>
                              )
                            }
                          </TrackVisibility>
                        </h2>
                        <p className="counter-card_text">
                          Services Completed
                        </p>
                      </div>
                      <div className="counter-card_icon">
                        <img
                          src="assets/img/icon/counter-icon_1-4.svg"
                          alt="Fixturbo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div
                className="counter-checklist-wrap"
                style={{
                  backgroundImage:
                    'url(assets/img/bg/counter-checklist-bg.png)',
                }}
              >
                <div className="checklist style-white mb-50">
                  <ul>
                    <li>
                      <i className="fas fa-check" />
                      Expert Repairs, Every Time
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Fast, Reliable Service
                    </li>
                    <li>
                      <i className="fas fa-check" />
                      Customer Satisfaction Guaranteed
                    </li>
                  </ul>
                </div>
                <div className="call-media-wrap">
                  <div className="icon">
                    <img
                      src="assets/img/icon/phone-1.svg"
                      alt="Fixturbo"
                    />
                  </div>
                  <div className="media-body">
                    <h6 className="title text-white">
                      Requesting A Call:
                    </h6>
                    <h4 className="link">
                      <a className="text-white" href="tel:6295550129">
                        (629) 555-0129
                      </a>
                    </h4>
                    <h4 className="link pt-1">
                      <a className="text-white" href="tel:6295550129">
                        (629) 555-0129
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterOne;
