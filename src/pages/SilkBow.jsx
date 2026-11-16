import React from 'react';

const products = [
  {
    title: 'Korean Bow',
    description: 'Add your personal touch to our signature korean styles.',
    price: 'Rs. 600',
    img: '/link/koreanbow.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'Korean%20Bow%20(Rs.%20600)'%20order%20karna%20hai.",
  },
  {
    title: 'Fancy Bows',
    description: 'Customize your statement piece with that define you.',
    price: 'Rs. 300',
    img: '/link/fanceybow.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'fancy%20Bow%20(Rs.%20300)'%20order%20karna%20hai.",
  },
   {
    title: 'Tulip Hair Bow',
    description: 'Fall in love with our exquisite handmade Tulip Hair Bow.',
    price: 'Rs. 450',
    img: '/link/tulip.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'Pearl%20Hair%20Bow'%20order%20karna%20hai.",
  },
  {
    title: 'Simple Silk Bows',
    description: 'Simple elegance beautifully customized just for you.',
    price: 'Rs. 300',
    img: '/link/silkbows.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'Simple%20Silk%20Bow%20(Rs.%20300)'%20order%20karna%20hai.",
  },
  {
    title: 'Silk Bows',
    description: 'Personalize your style with our custom name bow.',
    price: 'Rs. 300',
    img: '/link/silkabows.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'Name%20Bow%20(Rs.%20500)'%20order%20karna%20hai.",
  },
  {
    title: 'Name Bow',
    description: 'Personalize your style with our custom name bow.',
    price: 'Rs. 500',
    img: '/link/namebow.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'Name%20Bow%20(Rs.%20500)'%20order%20karna%20hai.",
  },
  {
    title: 'Printed Bow',
    description: 'Add a vibrant pop of pattern to your everyday style.',
    price: 'Rs. 450',
    img: '/link/printedbow.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'Printed%20Bow'%20order%20karna%20hai.",
  },
  {
    title: 'Embroidery Bow',
    description: 'Intricate embroidery for a refined, elegant look.',
    price: 'Rs. 480',
    img: '/link/embroiderybow.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'Embroidery%20Bow'%20order%20karna%20hai.",
  },
  {
    title: 'Simple Tail Bow',
    description: 'Elevate your everyday look with our beautiful handmade bows.',
    price: 'Rs. 350',
    img: '/link/tailbow.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'Simple%20Tail%20Bow'%20order%20karna%20hai.",
  },
  {
    title: 'Full Tail Bow',
    description: 'Where Luxury Meets Simplicity and elegance takes flight.',
    price: 'Rs. 890',
    img: '/link/fullLongTail.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'Simple%20Tail%20Bow'%20order%20karna%20hai.",
  },
  {
    title: 'Triple layer Bow',
    description: 'Add a pop of charm to your hairstyle with our layered bows.',
    price: 'Rs. 350',
    img: '/link/3lphb.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'Triple%20Layer%20Bow'%20order%20karna%20hai.",
  },
  {
    title: 'Triple layer Bow',
    description: 'Elevate your look with our beautiful pearl-detailed Triple Layer Bows.',
    price: 'Rs. 350',
    img: '/link/3lb.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'Triple%20Layer%20Bow'%20order%20karna%20hai.",
  },
  {
    title: 'Triple layer Bow',
    description: 'For the love of layers and patterns.',
    price: 'Rs. 500',
    img: '/link/3lpb.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'Triple%20Layer%20Bow'%20order%20karna%20hai.",
  },
  {
    title: 'Jeweled Pearl Bow',
    description: 'Velvet, pearls, and a touch of sparkle.',
    price: 'Rs. 1000',
    img: '/link/pearlbow.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'Triple%20Layer%20Bow'%20order%20karna%20hai.",
  },
  {
    title: 'Hair Bow',
    description: 'Silky smooth and perfectly pretty.',
    price: 'Rs. 300',
    img: '/link/hairbow.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'Hair%20Bow'%20order%20karna%20hai.",
  },
  {
    title: 'Pearl Hair Bow',
    description: 'Timeless elegance in every detail.',
    price: 'Rs. 450',
    img: '/link/pearlsbow.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20'Pearl%20Hair%20Bow'%20order%20karna%20hai.",
  },
];

function SilkBow() {
  return (
    <div className="bg-light py-5">
      <section className="shop-section">
        <div className="container py-4">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="section-title">Silk Bow Collection</h2>
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

export default SilkBow;