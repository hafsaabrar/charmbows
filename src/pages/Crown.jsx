import React from 'react';
import ProductGallery from '../components/ProductGallery';

const products = [
  {
    title: 'Pearl Hair Vain',
    description: 'Timeless pearls for a delicate touch.',
    price: 'Rs. 520',
    img: '/link/simplecrown.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20aapka%20'Turkish%20Style%20Crown'%20order%20karna%20hai.",
  },
  {
    title: 'Pearl Hair Vain',
    description: 'Statement pearls with a dreamy bow.',
    price: 'Rs. 860',
    img: '/link/crown2.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20aapka%20'Pearl%20Hair%20Vine'%20order%20karna%20hai.",
  },
];

function Crown() {
  return (
    <ProductGallery
      title="Pearl Crown Collection"
      subtitle="Choose your favorite color and design"
      products={products}
    />
  );
}

export default Crown;