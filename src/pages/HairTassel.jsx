import React from 'react';
import ProductGallery from '../components/ProductGallery';

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
    description: 'Chic braided hair tassels.',
    price: 'Rs. 450',
    img: '/link/tassel2.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'hair%20tassel'%20order%20karna%20hai.%20Price:%20Rs.850",
  },
];

function HairTassel() {
  return (
    <ProductGallery
      title="Hair Tassels Collection"
      subtitle="Choose your favorite color and design"
      products={products}
    />
  );
}

export default HairTassel;