'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const HeaderOne = () => {
  const [active, setActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    var offCanvasNav = document.getElementById(
      'offcanvas-navigation'
    );
    var offCanvasNavSubMenu =
      offCanvasNav.querySelectorAll('.sub-menu');

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        'beforebegin',
        "<span class='mean-expand-class'>+</span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(
      '.mean-expand-class'
    );
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains('active') === true) {
        this.parentElement.classList.remove('active');
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove('active');
        }
        this.parentElement.classList.add('active');
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener('click', sideMenuExpand);
    }
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenu = () => {
    setActive(!active);
  };
  return (
    <>
      <header className="nav-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-envelope" />
                      <Link href="mailto:contact@arlington-autoservice.com">
                        contact@arlington-autoservice.com
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      3800 S Four Mile Run Dr Bay D, Arlington VA
                      22206
                    </li>
                    <li>
                      <i className="fas fa-clock" />
                      Monday - Saturday
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`sticky-wrapper ${scroll && 'sticky'}`}>
          {/* Main Menu Area */}
          <div className="menu-area">
            <div className="header-navbar-logo">
              <Link href="/">
                <img src="assets/img/logo-white.svg" alt="Fixturbo" />
              </Link>
            </div>
            <div className="container">
              <div className="row align-items-center justify-content-lg-start justify-content-between">
                <div className="col-auto d-xl-none d-block">
                  <div className="header-logo">
                    <Link href="/">
                      <img
                        src="assets/img/logo-white.svg"
                        alt="Fixturbo"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About Us</Link>
                      </li>
                      <li className="menu-item-has-children">
                        <Link href="#">Services</Link>
                        <ul className="sub-menu">
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
                            <Link href="/diagnostics">
                              Diagnostics
                            </Link>
                          </li>
                          <li>
                            <Link href="/engine-repair">
                              Engine Repair
                            </Link>
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
                            <Link href="/transmissions">
                              Transmissions
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                  <div className="navbar-right d-inline-flex d-lg-none">
                    <button
                      type="button"
                      className="menu-toggle icon-btn"
                      onClick={mobileMenu}
                    >
                      <i className="fas fa-bars" />
                    </button>
                  </div>
                </div>
                <div className="col-auto ms-auto d-xl-block d-none">
                  <div className="navbar-right-desc">
                    <img
                      src="assets/img/icon/chat.svg"
                      alt="Fixturbo"
                    />
                    <div className="navbar-right-desc-details">
                      <h6 className="title">Need help?</h6>
                      <Link className="link" href="tel:5714059196">
                        (571) 405-9196
                      </Link>
                      /
                      <Link className="link" href="tel:5713382711">
                        (571) 338-2711
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="logo-bg" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu-wrapper  ${
            active && 'body-visible'
          }`}
        >
          <div className="mobile-menu-area">
            <div className="mobile-logo">
              <Link href="/">
                <img src="assets/img/logo.svg" alt="Fixturbo" />
              </Link>
              <button className="menu-toggle" onClick={mobileMenu}>
                <i className="fa fa-times" />
              </button>
            </div>
            <div className="mobile-menu">
              <ul id="offcanvas-navigation">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li className="menu-item-has-children submenu-item-has-children">
                  <Link href="#">Service</Link>
                  <ul className="sub-menu submenu-class">
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
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
