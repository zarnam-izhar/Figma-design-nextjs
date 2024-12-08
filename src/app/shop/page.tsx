'use client';
import { useState } from "react";
import Image from "next/image";

export default function Shop() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-28"
        style={{ backgroundImage: 'url("/bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-slate-300 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-semibold mt-4 text-center text-black">
            Shop
          </h1>
          <p className="text-sm text-center">Home {'>'} Shop</p>
        </div>
      </div>

      {/* Products Section */}
      <Products />
    </div>
  );
}

type Product = {
  name: string;
  price: string;
  discountedPrice?: string;
  img: string;
  Details: string;
};

const Products: React.FC = () => {
  const baseProducts: Product[] = [
    {
      name: "Syltherine",
      price: "Rp 35.00.000",
      discountedPrice: "Rp 2.500.000",
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
      discountedPrice: "Rp 7.000.000",
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

  // Duplicate the products array
  const products = Array(3) // Adjust the number of repetitions as needed
    .fill(baseProducts)
    .flat();

  const itemsPerPage = 8; // Number of items per page
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Get products for the current page if pagination is enabled
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = showAll ? products : products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {currentProducts.map((product, index) => (
          <div
            key={index}
            className="group bg-white border overflow-hidden relative transform transition duration-300"
          >
            {/* Product Image */}
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
                  {product.discountedPrice && (
                    <p className="text-black font-bold">{product.discountedPrice}</p>
                  )}
                  {!product.discountedPrice && (
                    <p className="text-black font-bold">{product.price}</p>
                  )}
                </div>
                {product.discountedPrice && (
                  <p className="text-gray-600 text-sm line-through">
                    {product.price}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {!showAll && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            className="px-4 py-2 bg-[#F9F1E7] rounded hover:bg-yellow-600"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-yellow-500 text-white"
                  : "bg-[#F9F1E7] hover:bg-yellow-600"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-4 py-2 bg-[#F9F1E7] rounded hover:bg-yellow-600"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* Show All Button */}
      <div className="flex justify-center mt-6">
        <button
          className={`px-4 py-2 rounded ${
            showAll ? "bg-yellow-500 text-white" : "bg-[#F9F1E7]"
          }`}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Paginated" : "Show All"}
        </button>
      </div>
    </section>
  );
};
