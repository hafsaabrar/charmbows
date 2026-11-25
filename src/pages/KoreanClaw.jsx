import React from 'react';
import ProductGallery from '../components/ProductGallery';

const products = [
  {
    title: 'Crystal Butterfly Claw',
    description: 'Timeless elegance in every pearl.',
    price: 'Rs. 300',
    img: '/link/claw1.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Crystal%20Butterfly%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'Floral Ribbon Claw',
    description: 'Chic satin bows for a perfect look.',
    price: 'Rs. 300',
    img: '/link/claw2.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Floral%20Ribbon%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'Pearl Bow Claw',
    description: 'Delicate beadwork designed to shine.',
    price: 'Rs. 300',
    img: '/link/claw3.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Pearl%20Bow%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'Butterfly Net Claw',
    description: 'Delicate mesh bows for a dreamy style.',
    price: 'Rs. 300',
    img: '/link/claw4.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Butterfly%20Net%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'Blue Flower Claw',
    description: 'Silky ribbon for a perfect finish.',
    price: 'Rs. 300',
    img: '/link/claw5.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Blue%20Flower%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'Peach Flower Claw',
    description: 'Bloom with style and floral grace.',
    price: 'Rs. 300',
    img: '/link/claw6.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Peach%20Flower%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'Chiffon Bow Claw',
    description: 'Elegant beads, effortless charm.',
    price: 'Rs. 300',
    img: '/link/claw8.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Chiffon%20Bow%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'Black Satin Bow Claw',
    description: 'Playful patterns for a vintage touch.',
    price: 'Rs. 300',
    img: '/link/claw7.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Black%20Satin%20Bow*%20order%20karni%20hai.',
  },
  {
    title: 'Jewel Petal Claw',
    description: 'Soft mesh for a dreamy look.',
    price: 'Rs. 300',
    img: '/link/claw9.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*Jewel%20Petal%20Pin*%20order%20karni%20hai.',
  },
  {
    title: 'White Floral Pin',
    description: 'Soft mesh for a dreamy look.',
    price: 'Rs. 300',
    img: '/link/claw10.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hello%20Charm%20Bows!%20Mujhe%20*White%20Floral%20Pin*%20order%20karni%20hai.',
  },
];

function KoreanClaw() {
  return (
    <ProductGallery
      title="Korean Claw Collection"
      subtitle="Choose your favorite color and design"
      products={products}
    />
  );
}

export default KoreanClaw;