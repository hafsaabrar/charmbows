import React from 'react';

const products = [
  {
    title: 'Tulip Tassels',
    description: 'Gorgeous beaded stain tulip tassels.',
    price: 'Rs. 850',
    img: '/link/tassel1.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'hair%20tassel'%20order%20karna%20hai.%20Price:%20Rs.850",
  },
   {
    title: 'Blooming Tassels',
    description: 'chic braided hair tassels.',
    price: 'Rs. 450',
    img: '/link/tassel2.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'hair%20tassel'%20order%20karna%20hai.%20Price:%20Rs.850",
  },
  
];

function HairTassel() {
  return (
    <div className="bg-light py-5">
      <section className="shop-section">
        <div className="container py-4">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="section-title">Hair Tassels Collection</h2>
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

export default HairTassel;