import React from 'react';

function ShippingPolicy() {
  return (
    <div className="showcase-section py-5">
      <div className="container py-4 d-flex justify-content-center">
        <div
          className="shipping-policy w-100 p-4 p-md-5 rounded-4 fade-in-up"
          style={{
            maxWidth: '800px',
            backgroundColor: 'var(--bg-surface)',
            boxShadow: 'var(--card-shadow)',
            border: '1px solid var(--border-color)',
            lineHeight: '1.8',
          }}
        >
          <div className="text-center mb-4">
            <h2 className="section-title">Shipping Policy</h2>
            <div className="title-underline"></div>
          </div>
          <ul className="mt-4">
            <li className="mb-3">
              <strong className="text-orange">Shipping Charges:</strong> A flat delivery fee of Rs. 350 applies to all orders.
            </li>
            <li>
              <strong className="text-orange">Delivery Time:</strong> Your order will reach you within 3 to 5 working days.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShippingPolicy;