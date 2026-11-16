import React from 'react';

function ShippingPolicy() {
  return (
    <div className="bg-light py-5">
      <div className="container py-4">
        <div className="shipping-policy bg-white p-4 p-md-5 rounded-4 shadow-sm fade-in-up" style={{ lineHeight: '1.6', color: '#333' }}>
          <h2 style={{ color: '#222' }} className="mb-4">Shipping Policy</h2>
          <ul>
            <li className="mb-2"><strong>Shipping Charges:</strong> A flat delivery fee of Rs. 350 applies to all orders.</li>
            <li><strong>Delivery Time:</strong> Your order will reach you within 3 to 5 working days.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ShippingPolicy;