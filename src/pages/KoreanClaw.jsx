import React from 'react';

const products = [
  {
    title: 'Crystal Butterfly Claw',
    description: 'Timeless elegance in every pearl.',
    price: 'Rs. 300',
    img: '/link/claw1.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Crystal%20Butterfly%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'Floral Ribbon Claw',
    description: 'Chic satin bows for a perfect look.',
    price: 'Rs. 300',
    img: '/link/claw2.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Floral%20Ribbon%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'Pearl Bow Claw',
    description: 'Delicate beadwork designed to shine.',
    price: 'Rs. 300',
    img: '/link/claw3.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Pearl%20Bow%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'Butterfly Net Claw',
    description: 'Delicate mesh bows for a dreamy style.',
    price: 'Rs. 300',
    img: '/link/claw4.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Butterfly%20Net%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'Blue Flower Claw',
    description: 'Silky ribbon for a perfect finish.',
    price: 'Rs. 300',
    img: '/link/claw5.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Blue%20Flower%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'Peach Flower Claw',
    description: 'Bloom with style and floral grace.',
    price: 'Rs. 300',
    img: '/link/claw6.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Peach%20Flower%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'Chiffon Bow Claw',
    description: 'Elegant beads, effortless charm.',
    price: 'Rs. 300',
    img: '/link/claw8.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Chiffon%20Bow%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'Black Satin Bow Claw',
    description: 'Playful patterns for a vintage touch.',
    price: 'Rs. 300',
    img: '/link/claw7.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Black%20Satin%20Bow*%20order%20karni%20hai.',
  },
  {
    title: 'Jewel Petal Claw',
    description: 'Soft mesh for a dreamy look.',
    price: 'Rs. 300',
    img: '/link/claw9.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Jewel%20Petal%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'White Floral Pin',
    description: 'Soft mesh for a dreamy look.',
    price: 'Rs. 300',
    img: '/link/claw10.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*White%20Floral%20Pin*%20order%20karni%20hai.',
  },
];

function KoreanClaw() {
  return (
    <div className="bg-light py-5">
      <section className="shop-section">
        <div className="container py-4">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="section-title">Korean Claw Collection</h2>
            <p className="text-muted">Choose your favorite color and design</p>
            <div className="title-underline"></div>
          </div>

          <div className="row g-4">
            {products.map((item, index) => (
              <div className="col-lg-4 col-md-6 fade-in-up delay-3" key={index}>
                <div className="card product-card h-100 shadow-sm border-0">
                  <img src={item.img} className="card-img-top" alt={item.title} />
                  <div className="card-body text-center">
                    <h5>{item.title}</h5>
                    <p className="text-muted small">{item.description}</p>
                    <h6>{item.price}</h6>
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

export default KoreanClaw;