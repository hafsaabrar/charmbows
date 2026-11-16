import React from 'react';

function Faqs() {
  return (
    <div className="bg-light py-5">
      <section className="py-4">
        <div className="container d-flex justify-content-center">
          <div className="faq-wrapper w-100 bg-white p-4 p-md-5 shadow-sm rounded-4 fade-in-up">
            <div className="text-center mb-5">
              <h2 className="faq-page-title">Frequently Asked Questions</h2>
              <div className="title-underline"></div>
            </div>

            <div className="accordion accordion-flush delay-1" id="faqAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q1"
                    aria-expanded="false"
                    aria-controls="q1"
                  >
                    🎀 Are your products homemade?
                  </button>
                </h2>
                <div
                  id="q1"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes! Every single bow is 100% handmade with love and attention to detail by our local artisans.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q2"
                    aria-expanded="false"
                    aria-controls="q2"
                  >
                    🎀 Are your bows made from fine fabric?
                  </button>
                </h2>
                <div
                  id="q2"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Absolutely. We use premium quality silks, linens, and soft cottons to ensure your hair accessories look elegant and last long.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#q3"
                    aria-expanded="false"
                    aria-controls="q3"
                  >
                    🎀 Do you take custom orders?
                  </button>
                </h2>
                <div
                  id="q3"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes, we love creating something unique! If you have a specific color or fabric in mind, feel free to contact us.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faqs;