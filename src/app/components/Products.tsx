"use client";

import React from "react";
import Image from "next/image";

type Product = {
  name: string;
  price: string;
  discountedPrice?: string;
  img: string;
  Details: string;
};

const Products: React.FC = () => {
  const products: Product[] = [
    {
      name: "Syltherine",
      price: "Rp 35.00.000",
      discountedPrice: "Rp 2.500.000", // Discounted price
      img: "/image1.png",
      Details: "Stylish cafe chair",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      img: "/image2.png",
      Details: "Stylish cafe chair",
    },
    {
      name: "Lolito",
      price: "Rp 14.000.000",
      discountedPrice: "Rp 7.000.000", // Discounted price
      img: "/image3.png",
      Details: "Luxury sofa",
    },
    {
      name: "Respira",
      price: "Rp 5.000.000",
      img: "/image4.jpg",
      Details: "Outdoor bar table and stool",
    },
    {
      name: "Grifo",
      price: "Rp 5.000.000",
      img: "/image5.png",
      Details: "Night lamp",
    },
    {
      name: "Muggo",
      price: "Rp 6.000.000",
      img: "/image6.png",
      Details: "Small mug",
    },
    {
      name: "Pingky",
      price: "Rp 14.000.000",
      discountedPrice: "Rp 7.000.000",
      img: "/image7.jpg",
      Details: "Cute bed set",
    },
    {
      name: "Potty",
      price: "Rp 5.000.000",
      img: "/image8.jpg",
      Details: "Minimalistic flower pot",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="group bg-white border overflow-hidden relative transform transition duration-300"
          >
            <div className="relative w-full h-72">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-600">{product.Details}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                  {/* Display discounted price if available */}
                  {product.discountedPrice && (
                    <p className="text-black font-bold">{product.discountedPrice}</p>
                  )}
                  {/* Display the original price if no discounted price */}
                  {!product.discountedPrice && (
                    <p className="text-black font-bold">{product.price}</p>
                  )}
                </div>
                <div className="flex flex-col items-end">
                  {/* Display the original price with line-through if there's a discount */}
                  {product.discountedPrice && (
                    <p className="text-gray-600 text-sm line-through">
                      {product.price}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gray-600 bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center transition duration-300">
              {/* Add to Cart Button */}
              <button className="bg-white text-yellow-500 py-2 px-6 rounded-lg mb-4 hover:bg-yellow-600">
                Add to Cart
              </button>

              {/* Icons Section */}
              <div className="flex space-x-6">
                <div className="flex flex-col items-center">
                  <i className="fas fa-share text-white text-lg"></i>
                  <span className="text-sm text-white">Share</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-heart text-white text-lg"></i>
                  <span className="text-sm text-white">Like</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-sync-alt text-white text-lg"></i>
                  <span className="text-sm text-white">Compare</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-white text-[#B88E2F] py-2 px-6 border-[#B88E2F] border-2 hover:bg-[#A77B28] transition text-sm">
          Show More
        </button>
      </div>
    </section>
  );
};

export default Products;
