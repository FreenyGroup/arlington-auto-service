import Link from 'next/link';

const FooterAreaOne = () => {
  return (
    <footer
      className="footer-wrapper footer-layout1"
      style={{
        backgroundImage: 'url(assets/img/bg/footer-bg1-1.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container">
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Company</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Services</h3>
                <div className="menu-all-pages-container">
                  <ul className="menu">
                    <li>
                      <Link href="/service">All Services</Link>
                    </li>
                    <li>
                      <Link href="/ac-repair">A/C Repair</Link>
                    </li>
                    <li>
                      <Link href="/auto-body-repair">
                        Auto Body & Repair
                      </Link>
                    </li>
                    <li>
                      <Link href="/body-painting">
                        Auto Body Painting
                      </Link>
                    </li>
                    <li>
                      <Link href="/brakes">Brakes</Link>
                    </li>
                    <li>
                      <Link href="/collision-repair">
                        Collision Repair
                      </Link>
                    </li>
                    <li>
                      <Link href="/diagnostics">Diagnostics</Link>
                    </li>
                    <li>
                      <Link href="/engine-repair">Engine Repair</Link>
                    </li>
                    <li>
                      <Link href="/oil-change">Oil Change</Link>
                    </li>
                    <li>
                      <Link href="/tune-ups">Tune-Ups</Link>
                    </li>
                    <li>
                      <Link href="/tires">Tires</Link>
                    </li>
                    <li>
                      <Link href="/transmissions">Transmissions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Contact</h3>
                <div className="widget-contact">
                  <p>
                    <Link href="tel:5714059196">(571) 405 9196</Link>
                  </p>
                  <p>
                    <Link href="tel:5713382711">(571) 338 2711</Link>
                  </p>
                  <p>
                    <Link href="mailto:contact@arlington-autoservice.com">
                      contact@arlington-autoservice.com
                    </Link>
                  </p>
                  <p>
                    3800 S four mile dr Bay D <br /> Arlington, VA
                    22206
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © <Link href="/">Arlington Auto Service</Link> 2024 |
                All Rights Reserved
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link href="/privacy-policy">
                  Terms &amp; Condition
                </Link>
                <Link href="/privacy-policy">Privacy Policy</Link>
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterAreaOne;
