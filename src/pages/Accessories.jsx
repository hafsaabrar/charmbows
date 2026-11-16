import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'Quilted Stain Eye Mask',
    description: 'Sleep with a touch of luxury.',
    price: 'Rs. 350',
    img: '/link/accessories1.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20Eye%20Mask%20Chahiye.Price:%20Rs.350',
  },
  {
    title: 'Care Sleep Combo',
    description: 'Protect your hair and skin while you dream.',
    price: 'Rs. 850',
    img: '/link/accessories2.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20Eye%20Mask%20aur%20Cap%20Chahiye.%20Price:%20Rs.850',
  },
  {
    title: 'Ultimate Glow Sleep Set',
    description: 'Your nightly satin ritual.',
    price: 'Rs. 1200',
    img: '/link/accessories3.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20Night%20sleep%20Care%20Accessories%20Customized%20krwana%20hai.%20Price:%20Rs.1200',
  },
  {
    title: 'Midnight Silk Travel Set',
    description: 'Yours ultimate self-care companion',
    price: 'Rs. 1400',
    img: '/link/accessories4.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20Night%20Accessories%20Customized%20krwana%20hai.%20Price:%20Rs.1400',
  },
];

function Accessories() {
  return (
    <div className="bg-light py-5">
      <section className="shop-section">
        <div className="container py-4">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="section-title">Night Accessories</h2>
            <p className="text-muted">Crafting magic into every moment of rest.</p>
            <div className="title-underline"></div>
          </div>

          <div className="row g-4">
            {products.map((item, index) => (
              <div className="col-lg-4 col-md-6 fade-in-up delay-3" key={index}>
                <div className="card product-card h-100 border-0 shadow-sm">
                  <img src={item.img} className="card-img-top" alt={item.title} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-muted small mb-3">{item.description}</p>
                    <h6 className="price-tag mb-3">{item.price}</h6>
                    <a
                      href={item.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-orange w-100"
                    >
                      Order on WhatsApp
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

export default Accessories;