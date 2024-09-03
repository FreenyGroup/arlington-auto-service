import React from 'react';
import Link from 'next/link';

const ServiceDetails = ({
  title,
  p1,
  p2,
  subtitle,
  p3,
  b1,
  b2,
  b3,
  b4,
  img,
}) => {
  return (
    <div className="service-details-area space-top space-extra-bottom overflow-hidden">
      <div className="container">
        <div className="row gx-40 flex-row-reverse">
          <div className="col-xxl-8 col-lg-7">
            <div className="service-page-single">
              <div className="page-img mb-45">
                <img src={img} alt="service_img" />
              </div>
              <div className="page-content">
                <h2 className="page-title">{title}</h2>
                <p className="mb-25">{p1} </p>
                <p className="mb-25">{p2}</p>
                <h3 className="page-subtitle mb-15">{subtitle}</h3>
                <p className="mb-30">{p3} </p>
                <div className="checklist style2 mt-35 mb-20">
                  <ul>
                    <li>
                      <i className="fas fa-angle-double-right" /> {b1}
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      {b2}
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      {b3}
                    </li>
                    <li>
                      <i className="fas fa-angle-double-right" />
                      {b4}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5">
            <aside className="sidebar-area">
              <div className="widget widget_service-list">
                <h3 className="widget_title">All Services</h3>
                <ul>
                  <li>
                    <Link href="/diagnostics">
                      <i className="fas fa-angle-double-right" />
                      Diagnostics
                    </Link>
                  </li>
                  <li>
                    <Link href="/oil-change">
                      <i className="fas fa-angle-double-right" />
                      Oil Change
                    </Link>
                  </li>
                  <li>
                    <Link href="/tune-ups">
                      <i className="fas fa-angle-double-right" />
                      Tune-Ups
                    </Link>
                  </li>
                  <li>
                    <Link href="/tires">
                      <i className="fas fa-angle-double-right" />
                      Tires
                    </Link>
                  </li>
                  <li>
                    <Link href="/engine-repair">
                      <i className="fas fa-angle-double-right" />
                      Engine Repair
                    </Link>
                  </li>
                  <li>
                    <Link href="/brakes">
                      <i className="fas fa-angle-double-right" />
                      Brakes
                    </Link>
                  </li>
                  <li>
                    <Link href="/transmissions">
                      <i className="fas fa-angle-double-right" />
                      Transmissions
                    </Link>
                  </li>
                  <li>
                    <Link href="/body-painting">
                      <i className="fas fa-angle-double-right" />
                      Auto Body Painting
                    </Link>
                  </li>
                  <li>
                    <Link href="/auto-body-repair">
                      <i className="fas fa-angle-double-right" />
                      Auto Body & Repair
                    </Link>
                  </li>
                  <li>
                    <Link href="/collision-repair">
                      <i className="fas fa-angle-double-right" />
                      Collision Repair
                    </Link>
                  </li>
                  <li>
                    <Link href="/ac-repair">
                      <i className="fas fa-angle-double-right" />
                      A/C Repair
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="widget widget_contact">
                <div className="widget-contact-wrap text-center">
                  <h3 className="widget_title">Contact Us</h3>
                  <p className="widget-contact-text">
                    Have questions or need to schedule a service?
                    Reach out to us today, and our team will be happy
                    to assist you!
                  </p>
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <p className="widget-contact-text">Need help?</p>
                  <h5>
                    <Link href="tel:5713886755">(571) 388-6755</Link>
                  </h5>
                  <h5>
                    <Link href="tel:5714059196">(571) 405-9196</Link>
                  </h5>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
