import React from 'react';

function OurStory() {
  return (
    <div className="showcase-section py-5">
      <section className="py-4">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* Left Side Text */}
            <div className="col-md-6 fade-in-up delay-1">
              <h2 className="section-title">Our Story</h2>
              <div className="title-underline ms-0"></div>
              <p className="lead fw-bold mt-3">
                Charm Bows began with a passion, a passion to dress every daughter like a princess.
              </p>
              <p className="text-muted">
                We handcraft every accessory so that each product reflects the love and quality you deserve.
                Our designs are a perfect blend of both trendy and traditional styles.
              </p>
              <p className="text-muted">
                From a small corner of a home, a simple idea slowly grew into a heartfelt journey.
                What started as a hobby soon turned into a passion for creating beautiful, handcrafted bows made with love and care.
                As a housewife, balancing home and family has always been a priority. In between daily responsibilities,
                late nights, and quiet afternoons, each bow is carefully designed and handmade.
                Every piece reflects patience, creativity, and attention to detail.
                CharmBows is more than just a small business. It is a dream built from home, one bow at a time.
                Each order supports a woman working hard to turn her passion into something meaningful.
                Thank you for being part of this journey and helping this small dream grow bigger every day.
              </p>
            </div>

            {/* Right Side Image */}
            <div className="col-md-6 text-center mt-4 mt-md-0 fade-in-up delay-2">
              <img
                src="/img/FB_IMG_1772175765918.jpg"
                alt="CharmBows Workspace"
                className="img-fluid rounded-4 story-img"
                style={{
                  boxShadow: 'var(--card-shadow)',
                  border: '1px solid var(--border-color)',
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurStory;