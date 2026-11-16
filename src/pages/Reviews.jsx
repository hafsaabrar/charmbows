import React from 'react';

const reviewImages = [
  '/link/review1.jpg',
  '/link/review2.jpg',
  '/link/review3.jpg',
  '/link/review4.jpg',
  '/link/review5.jpg',
  '/link/review6.jpg',
  '/link/review7.jpg',
  '/link/review8.jpg',
  '/link/review9.jpg',
  '/link/review10.jpg',
  '/link/review11.jpg',
  '/link/review12.jpg',
  '/link/review13.jpg',
  '/link/review14.jpg',
  '/link/review15.jpg',
  '/link/review16.jpg',
  '/link/review17.jpg',
  '/link/review18.jpg',
];

function Reviews() {
  return (
    <div className="bg-light py-5">
      <section className="shop-section">
        <div className="container py-4">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="section-title">Happy Customer Reviews</h2>
            <div className="title-underline"></div>
          </div>

          <div className="row g-4">
            {reviewImages.map((imgSrc, index) => (
              <div className="col-lg-4 col-md-6 fade-in-up delay-3" key={index}>
                <div className="card product-card h-100 border-0 shadow-sm">
                  <img src={imgSrc} className="card-img-top" alt={`Customer Review ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reviews;