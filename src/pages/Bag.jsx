import React from 'react';
import ProductGallery from '../components/ProductGallery';

const products = [
  {
    title: 'Bridal Potli Bag',
    description: 'The perfect companion for the modern bride.',
    price: 'Rs. 3,000',
    img: '/link/potlibag.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Bridal%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Baby Girl Potli Bag',
    description: 'Stylish and made for your little princess.',
    price: 'Rs. 1,000',
    img: '/link/babybag.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Baby%20Girl%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Lilac Potli Bag',
    description: 'Elegant lilac shimmer potli with pearl handle.',
    price: 'Rs. 1150',
    img: '/link/lilacpotli.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Baby%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Petite Princess Potli',
    description: "A touch of magic for your little one's treasures.",
    price: 'Rs. 1,000',
    img: '/link/bag1.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Petite%20Princess%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Casual Potli Bag',
    description: 'Your go-to bag for a simple yet classy look.',
    price: 'Rs. 1000',
    img: '/link/casual.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Casual%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Maroon Potli Bag',
    description: 'Chic embellished potli for weddings.',
    price: 'Rs. 1000',
    img: '/link/maroonpotli.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Casual%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Rose Flower Potli Bag',
    description: 'Exquisite floral charm for any occasion.',
    price: 'Rs. 1,800',
    img: '/link/rosepotli.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Rose%20Flower%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Baby Potli Bag',
    description: 'Tiny treasures in a beautiful finishing.',
    price: 'Rs. 650',
    img: '/link/babypotli.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Baby%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Festive Potli Bag',
    description: 'Stunning mint potli bag for traditional outfits.',
    price: 'Rs. 800',
    img: '/link/fespotlibag.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Baby%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Gold Floral Potli Bag',
    description: 'Stunning handmade pink potli for weddings.',
    price: 'Rs. 1,500',
    img: '/link/goldfloral.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Floral%20Potli%20Bag%27%20order%20karna%20hai.',
  },
  {
    title: 'Tradition Potli Bag',
    description: 'A beautiful blend of heritage and style.',
    price: 'Rs. 1,400',
    img: '/link/traditionpotli.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Mujhe%20%27Tradition%20Potli%20Bag%27%20order%20karna%20hai.',
  },
];

function Bag() {
  return (
    <ProductGallery
      title="Potli Bag Collection"
      subtitle="Choose your favorite color and design"
      products={products}
    />
  );
}

export default Bag;