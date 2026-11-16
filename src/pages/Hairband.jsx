import React from 'react';

const products = [
  {
    title: 'Embroidery Hairband',
    description: 'Delicate stitched details for your little princess.',
    price: 'Rs. 450',
    img: '/link/embroideryhairband.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Embroidery%20Hairband'%20order%20karna%20hai.%20Price:%20Rs.450",
  },
  {
    title: 'Name Bow Hairband',
    description: 'Custom name bows for a unique touch.',
    price: 'Rs. 550',
    img: '/link/namehairband.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Name%20Bow%20Hairband'%20order%20karna%20hai.%20Price:%20Rs.550",
  },
  {
    title: 'Bow Hairband',
    description: 'sparkling mint green bow hairband for elegance.',
    price: 'Rs. 350',
    img: '/link/bow-hairband.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Baby%20Girl%20Hairband%20(Rs.350)'%20order%20karna%20hai.",
  },
  {
    title: 'Whimsical Ears Hairband',
    description: 'Step into a world of magic and charm.',
    price: 'Rs. 500',
    img: '/link/hairband.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20Whimsical%20Ears%20'hairband'%20order%20karna%20hai.%20Price:%20Rs.550",
  },
  {
    title: 'Baby Girl Hairband',
    description: 'Timeless bands for special moments.',
    price: 'Rs. 350',
    img: '/link/hairBands.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Baby%20Girl%20Hairband%20(Rs.350)'%20order%20karna%20hai.",
  },
  {
    title: 'Baby Girl Hairband',
    description: 'Style for your little ones.',
    price: 'Rs. 250',
    img: '/link/bowhairband.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Baby%20Girl%20Hairband%20(Rs.250)'%20order%20karna%20hai.",
  },
  {
    title: 'Baby Girl Hairband',
    description: 'Adding a touch of sweetness to every outfit.',
    price: 'Rs. 350',
    img: '/link/pfhairband.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Baby%20Girl%20Hairband%20(Rs.350)'%20order%20karna%20hai.",
  },
  {
    title: 'Baby Girl Hairband',
    description: 'Timeless pearl bands for special moments.',
    price: 'Rs. 200',
    img: '/link/phairband.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Baby%20Girl%20Hairband%20(Rs.200)'%20order%20karna%20hai.",
  },
];

function Hairband() {
  return (
    <div className="bg-light py-5">
      <section className="shop-section">
        <div className="container py-4">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="section-title">Hairband Collection</h2>
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

export default Hairband;