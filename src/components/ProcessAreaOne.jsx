const ProcessAreaOne = () => {
  return (
    <section className="process-area-1 space position-relative">
      <div className="portfolio-shape-img shape-mockup d-lg-block d-none">
        <img
          className="about1-shape-img-1 spin"
          src="/assets/img/normal/about_shape1-2.svg"
          alt="Fixturbo"
        />
        <img
          className="about1-shape-img-2 spin2"
          src="/assets/img/normal/about_shape1-1.svg"
          alt="Fixturbo"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title">Work Process</span>
              <h2 className="sec-title">
                Your Journey to a Perfect Ride
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-30">
          <div className="col-lg-4 process-card-wrap">
            <div className="process-card">
              <div className="process-card-icon">
                <img
                  src="/assets/img/icon/process-icon-1-1.svg"
                  alt="Fixturbo"
                />
              </div>
              <h4 className="process-card-title">
                Drop Off or Relax
              </h4>
              <p className="process-card-text">
                Drop off your vehicle or relax in our comfortable
                waiting area while we handle the rest.
              </p>
            </div>
          </div>
          <div className="col-lg-4 process-card-wrap">
            <div className="process-card process-card-center">
              <div className="process-card-icon">
                <img
                  src="/assets/img/icon/process-icon-1-2.svg"
                  alt="Fixturbo"
                />
              </div>
              <h4 className="process-card-title">Expert Care</h4>
              <p className="process-card-text">
                Our skilled technicians work meticulously to get your
                vehicle back to its best condition.
              </p>
            </div>
          </div>
          <div className="col-lg-4 process-card-wrap">
            <div className="process-card">
              <div className="process-card-icon">
                <img
                  src="/assets/img/icon/process-icon-1-3.svg"
                  alt="Fixturbo"
                />
              </div>
              <h4 className="process-card-title">Drive Away Happy</h4>
              <p className="process-card-text">
                Pick up your vehicle and drive away with confidence,
                knowing you received top-quality service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAreaOne;
