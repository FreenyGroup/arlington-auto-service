import Link from 'next/link';

const CTAAreaTwo = () => {
  return (
    <div className="cta-area-2">
      <div className="container">
        <div className="cta-wrap2 bg-theme">
          <div className="row justify-content-md-between align-items-center">
            <div className="col-lg-7">
              <div className="title-area">
                <h2 className="sec-title text-white">
                  We Cover Your Deductible!
                </h2>
                <p className="sec-text text-white">
                  Take advantage of our limited-time promotion: We'll
                  cover your insurance deductible when you choose us
                  for your car repair. Get top-quality service and
                  save on out-of-pocket costs-drive away with
                  confidence!
                </p>
                <div className="btn-wrap mt-30">
                  <Link className="btn style3" href="/contact">
                    Schedule Your Service{' '}
                    <i className="fas fa-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cta2-bg-thumb">
                <img
                  src="assets/img/normal/cta-thumb-2-1.png"
                  alt="Fixturbo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAAreaTwo;
