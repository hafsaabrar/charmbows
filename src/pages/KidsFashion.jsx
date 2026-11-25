import React from 'react';
import ProductGallery from '../components/ProductGallery';

const products = [
  {
    title: 'Custom Flora Romper',
    description: 'Tailor-made comfort for everyday play.',
    img: '/link/dress1.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Custom%20Flora%20Romper'%20Dress%20Customized%20krwana%20hai.",
  },
  {
    title: 'Ethnic Charm Set',
    description: 'Customized ethnic wear for your mini-me.',
    img: '/link/dress2.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Ethnic%20Charm%20Set'%20Dress%20Customized%20krwana%20hai.",
  },
  {
    title: 'Vibrant Peplum Set',
    description: 'Handcrafted sets for a perfectly unique look.',
    img: '/link/dress3.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Vibrant%20Peplum%20Set'%20Dress%20Customized%20krwana%20hai.",
  },
  {
    title: 'Fancy Bow Top & Trouser',
    description: 'A perfect blend of comfort and style.',
    img: '/link/dress4.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Fancy%20Bow%20Top%20&%20Trouser'%20Dress%20Customized%20krwana%20hai.",
  },
  {
    title: 'Dreamy Summer',
    description: 'Crafted for ultimate comfort and charm.',
    img: '/link/dress5.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Dreamy%20Summer'%20Dress%20Customized%20krwana%20hai.",
  },
  {
    title: 'Festive Bloom',
    description: 'Bold, beautiful, and made for memories.',
    img: '/link/dress6.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Festive%20Bloom'%20Dress%20Customized%20krwana%20hai.",
  },
  {
    title: 'Royal Bloom Set',
    description: 'Elegant meet playful stylish look.',
    img: '/link/dress7.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Royal%20Bloom%20Set'%20Dress%20Customized%20krwana%20hai.",
  },
  {
    title: 'Embroidered Tunic',
    description: 'Traditional crafts paired with modern design.',
    img: '/link/dress8.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Embroidered%20Tunic'%20Dress%20Customized%20krwana%20hai.",
  },
  {
    title: 'Ruffled Outfit',
    description: 'Fun, breezy, and bright perfect for everyday.',
    img: '/link/dress9.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Ruffled%20Outfit'%20Dress%20Customized%20krwana%20hai.",
  },
  {
    title: 'Classic Festive',
    description: 'Charm meets playful style for special days.',
    img: '/link/dress10.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Classic%20Festive'%20Dress%20Customized%20krwana%20hai.",
  },
  {
    title: 'Garden Bloom',
    description: 'Sweet floral prints for a cheerful look.',
    img: '/link/dress11.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Garden%20Bloom'%20Dress%20Customized%20krwana%20hai.",
  },
  {
    title: 'Sunny Ruffle',
    description: 'Brighten up the day with this vibrant set.',
    img: '/link/dress12.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Sunny%20Ruffle'%20Dress%20Customized%20krwana%20hai.",
  },
  {
    title: 'Midnight Bloom',
    description: 'Beautiful jump suit designed for adventure.',
    img: '/link/dress13.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Midnight%20Bloom'%20Dress%20Customized%20krwana%20hai.",
  },
];

function KidsFashion() {
  return (
    <ProductGallery
      title="Kids Fashion"
      subtitle="Handcrafted magic, customized just for them."
      products={products}
    />
  );
}

export default KidsFashion;