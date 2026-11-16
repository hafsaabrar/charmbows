import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    details: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Charm Bows!%0A*Name:* ${formData.name}%0A*Address:* ${formData.address}%0A*Order Details:* ${formData.details}`;
    window.open(`https://wa.me/923430832813?text=${message}`, '_blank');
  };

  return (
    <div className="bg-light py-5">
      <section className="py-4">
        <div className="container">
          <div className="text-center mb-5 fade-in-up">
            <h2 className="section-title">Contact Us</h2>
            <p className="text-muted">We would love to hear from you!</p>
            <div className="title-underline"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 bg-white p-4 shadow-sm rounded fade-in-up delay-3">
              <form id="whatsappForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    placeholder="Your delivery address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Order Details</label>
                  <textarea
                    id="details"
                    className="form-control"
                    placeholder="Please mention the Product Name, Color, and Quantity"
                    rows="4"
                    value={formData.details}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-outline-orange w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;