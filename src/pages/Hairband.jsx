import React from 'react';
import ProductGallery from '../components/ProductGallery';

const products = [
  {
    title: 'Embroidery Hairband',
    description: 'Delicate stitched details for your little princess.',
    price: 'Rs. 450',
    img: '/link/embroideryhairband.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Embroidery%20Hairband'%20order%20karna%20hai.%20Price:%20Rs.450",
  },
  {
    title: 'Name Bow Hairband',
    description: 'Custom name bows for a unique touch.',
    price: 'Rs. 550',
    img: '/link/namehairband.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Name%20Bow%20Hairband'%20order%20karna%20hai.%20Price:%20Rs.550",
  },
  {
    title: 'Bow Hairband',
    description: 'Sparkling mint green bow hairband for elegance.',
    price: 'Rs. 350',
    img: '/link/bow-hairband.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Baby%20Girl%20Hairband%20(Rs.350)'%20order%20karna%20hai.",
  },
  {
    title: 'Whimsical Ears Hairband',
    description: 'Step into a world of magic and charm.',
    price: 'Rs. 500',
    img: '/link/hairband.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20Whimsical%20Ears%20'hairband'%20order%20karna%20hai.%20Price:%20Rs.550",
  },
  {
    title: 'Baby Girl Hairband',
    description: 'Timeless bands for special moments.',
    price: 'Rs. 350',
    img: '/link/hairBands.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Baby%20Girl%20Hairband%20(Rs.350)'%20order%20karna%20hai.",
  },
  {
    title: 'Baby Girl Hairband',
    description: 'Style for your little ones.',
    price: 'Rs. 250',
    img: '/link/bowhairband.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Baby%20Girl%20Hairband%20(Rs.250)'%20order%20karna%20hai.",
  },
  {
    title: 'Baby Girl Hairband',
    description: 'Adding a touch of sweetness to every outfit.',
    price: 'Rs. 350',
    img: '/link/pfhairband.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Baby%20Girl%20Hairband%20(Rs.350)'%20order%20karna%20hai.",
  },
  {
    title: 'Baby Girl Hairband',
    description: 'Timeless pearl bands for special moments.',
    price: 'Rs. 200',
    img: '/link/phairband.jpg',
    whatsappUrl: "https://wa.me/923430832813?text=Salam!%20Mujhe%20'Baby%20Girl%20Hairband%20(Rs.200)'%20order%20karna%20hai.",
  },
];

function Hairband() {
  return (
    <ProductGallery
      title="Hairband Collection"
      subtitle="Choose your favorite color and design"
      products={products}
    />
  );
}

export default Hairband;