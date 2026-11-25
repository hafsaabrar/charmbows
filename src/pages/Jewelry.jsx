import React from 'react';
import ProductGallery from '../components/ProductGallery';

const products = [
  {
    title: 'Bow Earring',
    description: 'Pearls meet classic bow design.',
    price: 'Rs. 450',
    img: '/link/bowearrings.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Bow%20Earring'%20order%20karna%20hai.%20Price:%20Rs.450",
  },
  {
    title: 'Pearl Earring',
    description: 'Perfect for your special occasions.',
    price: 'Rs. 450',
    img: '/link/pearlearring.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Pearl%20Earring'%20order%20karna%20hai.%20Price:%20Rs.450",
  },
  {
    title: 'Printed Earring',
    description: 'Unique style, effortless look.',
    price: 'Rs. 350',
    img: '/link/earring1.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Printed%20Earring'%20order%20karna%20hai.%20Price:%20Rs.350",
  },
  {
    title: 'Hand Bracelet',
    description: 'Dreamy pink pearl hand bracelet with bow.',
    price: 'Rs. 400',
    img: '/link/handwear.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'ye%20Bracelet'%20order%20karna%20hai.%20Price:%20Rs.350",
  },
  {
    title: 'Simple Earring',
    description: 'The perfect everyday statement piece.',
    price: 'Rs. 350',
    img: '/link/earring2.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Simple%20Earring'%20order%20karna%20hai.%20Price:%20Rs.350",
  },
  {
    title: 'Pearl Bracelet',
    description: 'Timeless pearl elegance.',
    price: 'Rs. 450',
    img: '/link/pearlbraclets.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Pearl%20Bracelet'%20order%20karna%20hai.%20Price:%20Rs.450",
  },
  {
    title: 'Friendship Bracelet',
    description: 'Perfect gift for your bestie.',
    price: 'Rs. 500',
    img: '/link/friendshipBracelet.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Friendship%20Bracelet'%20order%20karna%20hai.%20Price:%20Rs.500",
  },
  {
    title: 'Charm Pearl Bracelet',
    description: 'Cute bow-charm style.',
    price: 'Rs. 250',
    img: '/link/pearlbraclet.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Charm%20Pearl%20Bracelet'%20order%20karna%20hai.%20Price:%20Rs.250",
  },
  {
    title: 'Transparent Pearl Bracelet',
    description: 'Minimalist clear-bead vibes.',
    price: 'Rs. 150',
    img: '/link/transparentbraclet.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Transparent%20Pearl%20Bracelet'%20order%20karna%20hai.%20Price:%20Rs.150",
  },
];

function Jewelry() {
  return (
    <ProductGallery
      title="Elegant Jewelery Collection"
      subtitle="Choose your favorite color and design"
      products={products}
    />
  );
}

export default Jewelry;