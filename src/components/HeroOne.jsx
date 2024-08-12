import Link from 'next/link';

const HeroOne = () => {
  return (
    <div
      className="hero-wrapper hero-1"
      id="hero"
      style={{
        backgroundImage: 'url(assets/img/hero/hero_bg_1_1.png)',
      }}
    >
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-xl-6">
            <div className="hero-style1">
              <span className="sub-title text-white">
                Trusted Care
              </span>
              <h1 className="hero-title text-white">
                One-Stop{' '}
                <span>
                  <img
                    src="assets/img/hero/hero_shape_1.png"
                    alt="Fixturbo"
                  />
                  Auto Shop
                </span>{' '}
                In Arlington
              </h1>
              <p className="hero-text text-white">
                Expert Repairs & Maintenance, Monday to Saturday. Get
                Your Vehicle Back on the Road with Confidence.
              </p>
              <div className="btn-group">
                <Link href="/about" className="btn">
                  Learn About Us
                </Link>
                <Link href="/service" className="btn style-border">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="hero-thumb text-center">
              <img
                src="assets/img/hero/hero_thumb_1_1.png"
                alt="Fixturbo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
