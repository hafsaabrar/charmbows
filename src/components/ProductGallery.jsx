import React from 'react';

function ProductGallery({ title, subtitle, products }) {
  return (
    <div className="showcase-section py-5">
      <section className="shop-section">
        <div className="container py-4">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="section-title">{title}</h2>
            <p className="text-muted">{subtitle}</p>
            <div className="title-underline"></div>
          </div>

          <div className="row g-4">
            {products.map((item, index) => (
              <div
                className={`col-lg-4 col-md-6 fade-in-up delay-${(index % 3) + 1}`}
                key={index}
              >
                <div className="product-gallery-tile">
                  {item.price && <span className="price-pill-floating">{item.price}</span>}
                  <img src={item.img} alt={item.title} />
                  <div className="product-gallery-overlay">
                    <h5 className="product-gallery-title">{item.title}</h5>
                    <p className="product-gallery-desc">{item.description}</p>
                    <a
                      href={item.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-whatsapp-glass w-100"
                    >
                      <i className="fab fa-whatsapp"></i> Order on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductGallery;