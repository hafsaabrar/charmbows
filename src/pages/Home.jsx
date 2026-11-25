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
  { title: 'Turkish Style Crown', subtitle: 'Handmade Crown', img: '/img/crown.jpg', link: '/crown' },
  { title: 'Baby Footwear', subtitle: 'Handmade Footwear', img: '/img/babyafootwear.jpg', link: '/babyfootwear' },
  { title: 'Kids Fashion', subtitle: 'Handmade Dresses', img: '/img/dress.jpg', link: '/kids-fashion' },
  { title: 'Night Accessories', subtitle: 'Handmade Accessories', img: '/img/accessories.jpg', link: '/accessories' },
];

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          el.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="hero-section d-flex align-items-center fade-in-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 text-content mb-4 mb-lg-0">
              <span className="badge rounded-pill px-3 py-2 mb-3" style={{ backgroundColor: 'rgba(255, 159, 0, 0.18)', color: '#ff9f00', fontWeight: 600 }}>
                ✨ Handcrafted in Pakistan
              </span>
              <h1 className="display-4 fw-bold">Charm Bows – Made for Mini Fashionistas</h1>
              <p className="lead mt-3 mb-4">
                Discover beautifully handcrafted hair accessories and exquisite jewelry designed to make you shine.
              </p>
              <a href="#shop" className="btn btn-primary-orange btn-lg me-3 mb-3 mb-md-0 px-4">
                Explore Collection
              </a>
              <Link to="/our-story" className="btn btn-outline-orange btn-lg px-4">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="showcase-section py-5">
        <div className="container py-4">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="section-title">Curated Collections</h2>
            <p className="text-muted mt-2 mb-0">Tap any collection to explore handcrafted designs</p>
            <div className="title-underline"></div>
          </div>

          <div className="row g-4">
            {categories.map((item, index) => (
              <div
                className={`col-lg-4 col-md-6 fade-in-up delay-${(index % 3) + 1}`}
                key={index}
              >
                <Link to={item.link} className="showcase-tile">
                  <img src={item.img} alt={item.title} />
                  <div className="showcase-overlay">
                    <span className="showcase-tag">{item.subtitle}</span>
                    <h4 className="showcase-title">{item.title}</h4>
                    <span className="showcase-cta">
                      Explore Designs <i className="fas fa-arrow-right"></i>
                    </span>
                  </div>
                </Link>
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
              <div className="testimonial-box p-4 rounded text-center h-100">
                <div className="quote-icon mb-3">❝</div>
                <p className="review-text">
                  "The velvet bows are so beautifully crafted! The quality is amazing and it completely elevated my outfit."
                </p>
                <h6 className="customer-name mt-3">- Ayesha K.</h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 fade-in-up delay-2">
              <div className="testimonial-box p-4 rounded text-center h-100">
                <div className="quote-icon mb-3">❝</div>
                <p className="review-text">
                  "I ordered a customized pearl hair clip and it's simply perfect. Can't wait for their jewelry line to drop!"
                </p>
                <h6 className="customer-name mt-3">- Fatima S.</h6>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 fade-in-up delay-3">
              <div className="testimonial-box p-4 rounded text-center h-100">
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