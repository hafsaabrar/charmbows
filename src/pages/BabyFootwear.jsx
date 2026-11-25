import React from 'react';
import ProductGallery from '../components/ProductGallery';

const products = [
  {
    title: 'Baby Footwear',
    description: 'Pure white blossoms for tiny toes.',
    price: 'Rs. 300',
    img: '/link/footwear.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Baby%20Foot%20Wear%20Chahiye',
  },
  {
    title: 'Baby Footwear',
    description: 'Pure white blossoms for tiny toes.',
    price: 'Rs. 300',
    img: '/link/babyafootwear.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Baby%20Foot%20Wear%20Chahiye',
  },
  {
    title: 'Baby Footwear',
    description: 'Radiant red bows with pearl charm.',
    price: 'Rs. 300',
    img: '/link/babyafootware2.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Baby%20Foot%20Wear%20Chahiye',
  },
  {
    title: 'Baby Footwear',
    description: 'Sweet pin florals and delicate pearl',
    price: 'Rs. 300',
    img: '/link/footwear3.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Baby%20Foot%20Wear%20Chahiye',
  },
  {
    title: 'Baby Footwear',
    description: 'Sweet pin florals and delicate pearl',
    price: 'Rs. 300',
    img: '/link/footwear2.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Baby%20Foot%20Wear%20Chahiye',
  },
  {
    title: 'Baby Footwear',
    description: 'Sweet pin florals and delicate pearl',
    price: 'Rs. 300',
    img: '/link/babyafootware3.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Salam!%20Baby%20Foot%20Wear%20Chahiye',
  },
];

function BabyFootwear() {
  return (
    <ProductGallery
      title="Baby Girl Footwear"
      subtitle="Choose your favorite color and design"
      products={products}
    />
  );
}

export default BabyFootwear;