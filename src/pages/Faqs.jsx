import React, { useState } from 'react';

const faqData = [
  {
    id: 'q1',
    question: '🎀 Are your products homemade?',
    answer:
      'Yes! Every single bow is 100% handmade with love and attention to detail by our local artisans.',
  },
  {
    id: 'q2',
    question: '🎀 Are your bows made from fine fabric?',
    answer:
      'Absolutely. We use premium quality silks, linens, and soft cottons to ensure your hair accessories look elegant and last long.',
  },
  {
    id: 'q3',
    question: '🎀 Do you take custom orders?',
    answer:
      'Yes, we love creating something unique! If you have a specific color or fabric in mind, feel free to contact us.',
  },
];

function Faqs() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="showcase-section py-5">
      <section className="py-4">
        <div className="container d-flex justify-content-center">
          <div
            className="faq-wrapper w-100 p-4 p-md-5 rounded-4 fade-in-up"
            style={{
              backgroundColor: 'var(--bg-surface)',
              boxShadow: 'var(--card-shadow)',
              border: '1px solid var(--border-color)',
            }}
          >
            <div className="text-center mb-5">
              <h2 className="faq-page-title">Frequently Asked Questions</h2>
              <div className="title-underline"></div>
            </div>

            <div className="accordion accordion-flush delay-1" id="faqAccordion">
              {faqData.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div className="accordion-item" key={item.id}>
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={item.id}
                        onClick={() => handleToggle(item.id)}
                      >
                        {item.question}
                      </button>
                    </h2>
                    {isOpen && (
                      <div id={item.id} className="accordion-collapse show">
                        <div className="accordion-body pt-3">{item.answer}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faqs;