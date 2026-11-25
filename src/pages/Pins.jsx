import React from 'react';
import ProductGallery from '../components/ProductGallery';

const products = [
  {
    title: 'Tulip Pins',
    description: 'Timeless elegance in every pearl.',
    price: 'Rs. 250',
    img: '/link/tulippin.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Tulip%20Pins*%20order%20karni%20hain.',
  },
  {
    title: 'Pearl Pins',
    description: 'Timeless elegance in every pearl.',
    price: 'Rs. 230',
    img: '/link/pin1.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Pearl%20Pins*%20order%20karni%20hain.',
  },
  {
    title: 'Ribbon Pins',
    description: 'Chic satin bows for a perfect look.',
    price: 'Rs. 210',
    img: '/link/pin2.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Ribbon%20Pins*%20order%20karni%20hain.',
  },
  {
    title: 'Pearl Bow Pin',
    description: 'Delicate beadwork designed to shine.',
    price: 'Rs. 250',
    img: '/link/pearlBowPin.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Pearl%20Bow%20Pin*%20order%20karni%20hain.',
  },
  {
    title: 'Net Pins',
    description: 'Delicate mesh bows for a dreamy style.',
    price: 'Rs. 300',
    img: '/link/pin3.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Net%20Pins*%20order%20karni%20hain.',
  },
  {
    title: 'Ribbon Pins',
    description: 'Silky ribbon for a perfect finish.',
    price: 'Rs. 170',
    img: '/link/pin4.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Ribbon%20Pins%20(Style%202)*%20order%20karni%20hain.',
  },
  {
    title: 'Flower Pin',
    description: 'Bloom with style and floral grace.',
    price: 'Rs. 190',
    img: '/link/pin6.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Flower%20Pin*%20order%20karna%20hai.',
  },
  {
    title: 'Polka Dot Pins',
    description: 'Playful patterns for a vintage touch.',
    price: 'Rs. 200',
    img: '/link/pin7.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Polka%20Dot%20Pins*%20order%20karni%20hain.',
  },
  {
    title: 'Pins',
    description: 'Elegant beads, effortless charm',
    price: 'Rs. 180',
    img: '/link/pin8.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Simple%20Pins*%20order%20karni%20hain.',
  },
  {
    title: 'Net Pins',
    description: 'Soft mesh for a dreamy look.',
    price: 'Rs. 350',
    img: '/link/pin9.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Net%20Pins%20(Style%202)*%20order%20karni%20hain.',
  },
];

function Pins() {
  return (
    <ProductGallery
      title="Hairpins Collection"
      subtitle="Choose your favorite color and design"
      products={products}
    />
  );
}

export default Pins;