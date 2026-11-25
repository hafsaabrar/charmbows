import React from 'react';
import ProductGallery from '../components/ProductGallery';

const products = [
  {
    title: 'Tulip Silk Scrunchie',
    description: 'Floral-inspired charm, crafted with love.',
    price: 'Rs. 350',
    img: '/link/tulipScrunchue.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hi%20Charm%20Bows!%20I%20want%20to%20order%20the%20Embroidery%20Bow%20Scrunchie.',
  },
  {
    title: 'Ribbon Silk Scrunchie',
    description: 'Graceful ribbons for a timeless look.',
    price: 'Rs. 350',
    img: '/link/bowScrunchie.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hi%20Charm%20Bows!%20I%20want%20to%20order%20the%20Embroidery%20Bow%20Scrunchie.',
  },
  {
    title: 'Embroidery Bow Scrunchie',
    description: 'Detailed elegance in every stitch.',
    price: 'Rs. 520',
    img: '/link/etbs.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hi%20Charm%20Bows!%20I%20want%20to%20order%20the%20Embroidery%20Bow%20Scrunchie.',
  },
  {
    title: 'Tail Scrunchie',
    description: 'The effortless way to style your ponytail.',
    price: 'Rs. 180',
    img: '/link/tailsc.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hi%20Charm%20Bows!%20I%20want%20to%20order%20the%20Tail%20Scrunchie.',
  },
  {
    title: 'Tulip Scrunchie',
    description: 'Sweet tulip drops for a playful touch.',
    price: 'Rs. 200',
    img: '/link/tulipScrunchie.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hi%20Charm%20Bows!%20I%20want%20to%20order%20the%20Tulip%20Scrunchie.',
  },
  {
    title: 'Rose Scrunchie',
    description: 'Add a floral bloom to your hairstyle.',
    price: 'Rs. 350',
    img: '/link/rosescr.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hi%20Charm%20Bows!%20I%20want%20to%20order%20the%20Rose%20Scrunchie.',
  },
  {
    title: 'Bow Scrunchie',
    description: 'Classic bows for a timeless look.',
    price: 'Rs. 250',
    img: '/link/bowscr.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hi%20Charm%20Bows!%20I%20want%20to%20order%20the%20Bow%20Scrunchie.',
  },
  {
    title: 'Large Ribbon Scrunchie',
    description: 'Long silken ribbons for a graceful flow.',
    price: 'Rs. 180',
    img: '/link/largeRibbonscrunchie.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hi%20Charm%20Bows!%20I%20want%20to%20order%20the%20Large%20Ribbon%20Scrunchie.',
  },
  {
    title: 'Tail Bow Scrunchie',
    description: 'Elegant tails for a flowy finish.',
    price: 'Rs. 280',
    img: '/link/bowscru.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hi%20Charm%20Bows!%20I%20want%20to%20order%20the%20Tail%20Bow%20Scrunchie.',
  },
  {
    title: 'Silk Bow Scrunchie',
    description: 'Premium silk for a royal hairstyle.',
    price: 'Rs. 500',
    img: '/link/silkscr.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hi%20Charm%20Bows!%20I%20want%20to%20order%20the%20Silk%20Bow%20Scrunchie.',
  },
  {
    title: 'Simple Scrunchie',
    description: 'To keep your hair happy every day.',
    price: 'Rs. 150',
    img: '/link/poni.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hi%20Charm%20Bows!%20I%20want%20to%20order%20the%20Simple%20Scrunchie.',
  },
  {
    title: 'Mini Scrunchie',
    description: 'Small in size, big on style.',
    price: 'Rs. 100',
    img: '/link/minisc.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hi%20Charm%20Bows!%20I%20want%20to%20order%20the%20Mini%20Scrunchie.',
  },
  {
    title: 'Double Color Scrunchie',
    description: 'A modern twist on a favorite.',
    price: 'Rs. 180',
    img: '/link/doubleclrsc.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hi%20Charm%20Bows!%20I%20want%20to%20order%20the%20Double%20Color%20Scrunchie.',
  },
  {
    title: 'Butterfly Scrunchie',
    description: 'Beautiful, pearl-detailed butterfly design.',
    price: 'Rs. 180',
    img: '/link/butterflysc.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hi%20Charm%20Bows!%20I%20want%20to%20order%20the%20Butterfly%20Scrunchie.',
  },
  {
    title: 'Mini Bow Scrunchie',
    description: 'The cutest addition to any hairstyle.',
    price: 'Rs. 150',
    img: '/link/minibowsc.jpg',
    whatsappUrl: 'https://wa.me/923430832813?text=Hi%20Charm%20Bows!%20I%20want%20to%20order%20the%20Mini%20Bow%20Scrunchie.',
  },
];

function SilkScrunchie() {
  return (
    <ProductGallery
      title="Silk Scrunchie Collection"
      subtitle="Choose your favorite color and design"
      products={products}
    />
  );
}

export default SilkScrunchie;