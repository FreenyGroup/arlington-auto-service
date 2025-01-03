import Link from 'next/link';

const SubscribeOne = () => {
  return (
    <div className="container">
      <div
        className="footer-top-1 bg-logo"
        style={{
          backgroundImage: 'url(assets/img/bg/footer-top-bg1-1.png)',
        }}
      >
        <div className="footer-logo">
          <Link href="/">
            <img src="assets/img/logo-white.svg" alt="Fixturbo" />
          </Link>
        </div>
        <div className="call-media-wrap">
          <div className="icon">
            <img src="assets/img/icon/phone-1.svg" alt="Fixturbo" />
          </div>
          <div className="media-body">
            <h6 className="title text-white">Requesting A Call:</h6>
            <h4 className="link">
              <a className="text-white" href="tel:5714317481">
                (571) 431 7481
              </a>
            </h4>
            <h4 className="link pt-2">
              <a className="text-white" href="tel:5713886755">
                (571) 388 6755
              </a>
            </h4>
          </div>
        </div>
        <div className="social-btn"></div>
      </div>
    </div>
  );
};

export default SubscribeOne;
