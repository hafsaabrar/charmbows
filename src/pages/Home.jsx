import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { title: 'Classic Hair Bow', subtitle: 'Handmade Bow', img: '/img/stainbow.jpg', link: '/silk-bow' },
  { title: 'Scrunchie', subtitle: 'Handmade Scrunchie', img: '/img/silkscrunchies.jpg', link: '/silk-scrunchie' },
  { title: 'Potli Bag', subtitle: 'Handmade Bag', img: '/img/elegentpotli.jpg', link: '/bag' },
  { title: 'Hairband', subtitle: 'Handmade', img: '/img/hairband.jpg', link: '/hairband' },
  { title: 'Pins', subtitle: 'Handmade Pins', img: '/img/pin5.jpg', link: '/pins' },
  { title: 'Korean Claw', subtitle: 'Handmade Korean Claw', img: '/img/claw.jpg', link: '/koreanclaw' },
  { title: 'Jewelry', subtitle: 'Handmade Jewelry', img: '/img/jewelry.jpg', link: '/jewelry' },
  { title: 'Hair Tassel', subtitle: 'Traditional Tassel', img: '/img/tassel.jpg', link: '/hairtassel' },
  { title: 'Turkish Style Crown', subtitle: 'Handmade crown', img: '/img/crown.jpg', link: '/crown' },
  { title: 'Baby Footwear', subtitle: 'Handmade Footwear', img: '/img/babyafootwear.jpg', link: '/babyfootwear' },
  { title: 'Kids Fashion', subtitle: 'Handmade Dresses', img: '/img/dress.jpg', link: '/kids-fashion' },
  { title: 'Night Accessories', subtitle: 'Handmade Accessories', img: '/img/accessories.jpg', link: '/accessories' },
];

function Home() {
  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="hero-section d-flex align-items-center fade-in-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 text-content mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold">Charm Bows – Made for Mini Fashionistas</h1>
              <p className="lead mt-3 mb-4">
                Discover beautifully handcrafted hair accessories and exquisite jewelry designed to make you shine.
              </p>
              <a href="#shop" className="btn btn-dark btn-lg me-2 mb-3 mb-md-0">
                Explore Collection
              </a>
              <Link to="/our-story" className="btn btn-outline-dark btn-lg">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="shop-section py-5 bg-light">
        <div className="container py-4">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="section-title">Trending Accessories</h2>
            <div className="title-underline"></div>
          </div>
          <div className="row g-4">
            {categories.map((item, index) => (
              <div className="col-lg-4 col-md-6 fade-in-up delay-1" key={index}>
                <div className="card product-card h-100 border-0 shadow-sm">
                  <Link to={item.link}>
                    <img src={item.img} className="card-img-top" alt={item.title} />
                  </Link>
                  <div className="card-body text-center">
                    <Link to={item.link} className="text-decoration-none text-dark">
                      <h5 className="card-title">{item.title}</h5>
                    </Link>
                    <p className="text-muted mb-2">{item.subtitle}</p>
                    <Link to={item.link} className="btn btn-outline-orange w-100">
                      View Designs
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials py-5">
        <div className="container py-5">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="section-title">Happy Customers</h2>
            <div className="title-underline"></div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 fade-in-up delay-1">
              <div className="testimonial-box p-4 bg-white shadow-sm rounded text-center">
                <div className="quote-icon mb-3">❝</div>
                <p className="review-text">
                  "The velvet bows are so beautifully crafted! The quality is amazing and it completely elevated my outfit."
                </p>
                <h6 className="customer-name mt-3">- Ayesha K.</h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 fade-in-up delay-2">
              <div className="testimonial-box p-4 bg-white shadow-sm rounded text-center">
                <div className="quote-icon mb-3">❝</div>
                <p className="review-text">
                  "I ordered a customized pearl hair clip and it's simply perfect. Can't wait for their jewelry line to drop!"
                </p>
                <h6 className="customer-name mt-3">- Fatima S.</h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 fade-in-up delay-3">
              <div className="testimonial-box p-4 bg-white shadow-sm rounded text-center">
                <div className="quote-icon mb-3">❝</div>
                <p className="review-text">
                  "The packaging, the quality, the colors—everything is top notch. Highly recommended!"
                </p>
                <h6 className="customer-name mt-3">- Zainab A.</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;