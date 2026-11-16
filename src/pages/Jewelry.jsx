import React from 'react';

const products = [
  {
    title: 'Bow Earring',
    description: 'Pearls meet classic bow design.',
    price: 'Rs. 450',
    img: '/link/bowearrings.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Bow%20Earring'%20order%20karna%20hai.%20Price:%20Rs.450",
  },
  {
    title: 'Pearl Earring',
    description: 'Perfect for your special occasions.',
    price: 'Rs. 450',
    img: '/link/pearlearring.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Pearl%20Earring'%20order%20karna%20hai.%20Price:%20Rs.450",
  },
  {
    title: 'Printed Earring',
    description: 'Unique style, effortless look.',
    price: 'Rs. 350',
    img: '/link/earring1.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Printed%20Earring'%20order%20karna%20hai.%20Price:%20Rs.350",
  },
  {
    title: 'Hand Bracelet',
    description: 'Dreamy pink pearl hand bracelet with bow.',
    price: 'Rs. 400',
    img: '/link/handwear.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'ye%20Bracelet'%20order%20karna%20hai.%20Price:%20Rs.350",
  },
  {
    title: 'Simple Earring',
    description: 'The perfect everyday statement piece.',
    price: 'Rs. 350',
    img: '/link/earring2.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Simple%20Earring'%20order%20karna%20hai.%20Price:%20Rs.350",
  },
  {
    title: 'Pearl Bracelet',
    description: 'Timeless pearl elegance.',
    price: 'Rs. 450',
    img: '/link/pearlbraclets.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Pearl%20Bracelet'%20order%20karna%20hai.%20Price:%20Rs.450",
  },
  {
    title: 'Friendship Bracelet',
    description: 'Perfect gift for your bestie.',
    price: 'Rs. 500',
    img: '/link/friendshipBracelet.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Friendship%20Bracelet'%20order%20karna%20hai.%20Price:%20Rs.500",
  },
  {
    title: 'Charm Pearl Bracelet',
    description: 'Cute bow-charm style.',
    price: 'Rs. 250',
    img: '/link/pearlbraclet.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Charm%20Pearl%20Bracelet'%20order%20karna%20hai.%20Price:%20Rs.250",
  },
  {
    title: 'Transparent Pearl Bracelet',
    description: 'Minimalist clear-bead vibes.',
    price: 'Rs. 150',
    img: '/link/transparentbraclet.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Transparent%20Pearl%20Bracelet'%20order%20karna%20hai.%20Price:%20Rs.150",
  },
];

function Jewelry() {
  return (
    <div className="bg-light py-5">
      <section className="shop-section">
        <div className="container py-4">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="section-title">Elegant Jewelery Collection</h2>
            <p className="text-muted">Choose your favorite color and design</p>
            <div className="title-underline"></div>
          </div>

          <div className="row g-4">
            {products.map((item, index) => (
              <div className="col-lg-4 col-md-6 fade-in-up delay-2" key={index}>
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

export default Jewelry;