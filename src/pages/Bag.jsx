import React from 'react';

const products = [
  {
    title: 'Bridal Potli Bag',
    description: 'The perfect companion for the modern bride.',
    price: 'Rs. 3,000',
    img: '/link/potlibag.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Bridal%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Baby Girl Potli Bag',
    description: 'stylish and made for your little princess.',
    price: 'Rs. 1,000',
    img: '/link/babybag.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Baby%20Girl%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Lilac Potli Bag',
    description: 'Elegant lilac shimmer potli with pearl handle.',
    price: 'Rs. 1150',
    img: '/link/lilacpotli.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Baby%20Potli%20Bag%27%20order%20karna%20hai.',
  },  
  {
    title: 'Petite Princess Potli',
    description: "A touch of magic for your little one's treasures.",
    price: 'Rs. 1,000',
    img: '/link/bag1.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Petite%20Princess%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Casual Potli Bag',
    description: 'Your go-to bag for a simple yet classy look.',
    price: 'Rs. 1000',
    img: '/link/casual.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Casual%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Maroon Potli Bag',
    description: 'Chic embellished potli for weddings.',
    price: 'Rs. 1000',
    img: '/link/maroonpotli.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Casual%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Rose Flower Potli Bag',
    description: 'Exquisite floral charm for any occasion.',
    price: 'Rs. 1,800',
    img: '/link/rosepotli.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Rose%20Flower%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Baby Potli Bag',
    description: 'Tiny treasures in a beautiful finishing.',
    price: 'Rs. 650',
    img: '/link/babypotli.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Baby%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Festive Potli Bag',
    description: 'Stunning mint potli bag for traditional outfits.',
    price: 'Rs. 800',
    img: '/link/fespotlibag.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Baby%20Potli%20Bag%27%20order%20karna%20hai.',
  },  
   {
    title: 'Gold Floral Potli Bag',
    description: 'Stunning handmade pink potli for weddings.',
    price: 'Rs. 1,500',
    img: '/link/goldfloral.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Floral%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Tradition Potli Bag',
    description: 'A beautiful blend of heritage and style.',
    price: 'Rs. 1,400',
    img: '/link/traditionpotli.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Tradition%20Potli%20Bag%27%20order%20karna%20hai.',
  },
];

function Bag() {
  return (
    <div className="bg-light py-5">
      <section className="shop-section">
        <div className="container py-4">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="section-title">Potli Bag Collection</h2>
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

export default Bag;