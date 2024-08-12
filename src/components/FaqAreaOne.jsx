import Link from 'next/link';

const FaqAreaOne = () => {
  return (
    <section className="faq-area-1 space-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title-area mb-lg-0">
              <span className="sub-title">
                Frequently Asked Questions
              </span>
              <h2 className="sec-title">
                Your Auto Care Questions Answered
              </h2>
              <p className="sec-text">
                Got questions about our services or how we work? We've
                compiled answers to some of the most common inquiries
                to help you understand what to expect when you choose
                our shop. If you don't see your question here, feel
                free to reach out to us directly!
              </p>
              <div className="btn-wrap mt-30">
                <Link className="btn style2" href="/contact">
                  Contact Us <i className="fas fa-arrow-right ms-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="accordion-area accordion"
              id="faqAccordion"
            >
              <div className="accordion-card active">
                <div
                  className="accordion-header"
                  id="collapse-item-1"
                >
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    Do I need to make an appointment for service?
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      While appointments are recommended to ensure
                      timely service, we do accept walk-ins based on
                      availability.{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div
                  className="accordion-header"
                  id="collapse-item-2"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    {' '}
                    What types of vehicles do you service?
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      We service all makes and models, including
                      domestic, foreign, and luxury vehicles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div
                  className="accordion-header"
                  id="collapse-item-3"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    {' '}
                    How long does a typical oil change take?
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      A standard oil change usually takes about 30
                      minutes, but timing can vary based on your
                      vehicle and our current schedule.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card ">
                <div
                  className="accordion-header"
                  id="collapse-item-4"
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-4"
                    aria-expanded="false"
                    aria-controls="collapse-4"
                  >
                    {' '}
                    Can you match the paint color exactly for body
                    repairs?
                  </button>
                </div>
                <div
                  id="collapse-4"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Yes, we use advanced color-matching technology
                      to ensure your vehicle's paint matches perfectly
                      with the original color.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaOne;
