import React from 'react';

const products = [
  {
    title: 'Baby Footwear',
    description: 'Pure white blossoms for tiny toes.',
    price: 'Rs. 300',
    img: '/link/footwear.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Baby%20Foot%20Wear%20Chahiye',
  },
  {
    title: 'Baby Footwear',
    description: 'Pure white blossoms for tiny toes.',
    price: 'Rs. 300',
    img: '/link/babyafootwear.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Baby%20Foot%20Wear%20Chahiye',
  },
  {
    title: 'Baby Footwear',
    description: 'Radiant red bows with pearl charm.',
    price: 'Rs. 300',
    img: '/link/babyafootware2.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Baby%20Foot%20Wear%20Chahiye',
  },
  {
    title: 'Baby Footwear',
    description: 'Sweet pin florals and delicate pearl',
    price: 'Rs. 300',
    img: '/link/footwear3.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Baby%20Foot%20Wear%20Chahiye',
  },
  {
    title: 'Baby Footwear',
    description: 'Sweet pin florals and delicate pearl',
    price: 'Rs. 300',
    img: '/link/footwear2.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Baby%20Foot%20Wear%20Chahiye',
  },
  {
    title: 'Baby Footwear',
    description: 'Sweet pin florals and delicate pearl',
    price: 'Rs. 300',
    img: '/link/babyafootware3.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Baby%20Foot%20Wear%20Chahiye',
  },
];

function BabyFootwear() {
  return (
    <div className="bg-light py-5">
      <section className="shop-section">
        <div className="container py-4">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="section-title">Baby Girl Footwear</h2>
            <p className="text-muted">Choose your favorite color and design</p>
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

export default BabyFootwear;