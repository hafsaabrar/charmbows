import React from 'react';
import ProductGallery from '../components/ProductGallery';

const products = [
  {
    title: 'Quilted Stain Eye Mask',
    description: 'Sleep with a touch of luxury.',
    price: 'Rs. 350',
    img: '/link/accessories1.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20Eye%20Mask%20Chahiye.Price:%20Rs.350',
  },
  {
    title: 'Care Sleep Combo',
    description: 'Protect your hair and skin while you dream.',
    price: 'Rs. 850',
    img: '/link/accessories2.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20Eye%20Mask%20aur%20Cap%20Chahiye.%20Price:%20Rs.850',
  },
  {
    title: 'Ultimate Glow Sleep Set',
    description: 'Your nightly satin ritual.',
    price: 'Rs. 1200',
    img: '/link/accessories3.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20Night%20sleep%20Care%20Accessories%20Customized%20krwana%20hai.%20Price:%20Rs.1200',
  },
  {
    title: 'Midnight Silk Travel Set',
    description: 'Yours ultimate self-care companion',
    price: 'Rs. 1400',
    img: '/link/accessories4.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20Night%20Accessories%20Customized%20krwana%20hai.%20Price:%20Rs.1400',
  },
];

function Accessories() {
  return (
    <ProductGallery
      title="Night Accessories"
      subtitle="Crafting magic into every moment of rest."
      products={products}
    />
  );
}

export default Accessories;