'use client';
import Image from "next/image";
import { useState } from "react";

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1); 
  const totalPages = 3; 

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page); 
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      
      <div
        className="relative bg-cover bg-center py-16"
        style={{ backgroundImage: 'url("/bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-slate-300 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <div className="mb-4">
            <Image src="/logo.png" alt="Logo" className="mx-auto w-24" width={96} height={96} />
          </div>
          <h1 className="text-4xl text-black font-semibold mt-4">Blog</h1>
          <p className="text-sm text-black">Home {'>'} Blog</p>
        </div>
      </div>

      {/* Main Blog Content */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Blog Posts Section */}
        <div className="lg:col-span-8">
          {/* Blog Post 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
            <Image
              src="/blog1.jpg"
              alt="Millennial Design"
              width={800}
              height={450}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">
                <a className="text-gray-800 hover:text-gray-600">
                  Going all-in with millennial design
                </a>
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Discover the secrets of modern design with a blend of minimalism
                and bold colors...
              </p>
              <a className="text-blue-500 hover:underline text-sm">Read more</a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
            <Image
              src="/blog2.jpg"
              alt="New Ways of Decorating"
              width={800}
              height={450}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">
                <a className="text-gray-800 hover:text-gray-600">
                  Exploring new ways of decorating
                </a>
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                From traditional to contemporary decor styles, discover the art
                of transforming spaces...
              </p>
              <a className="text-blue-500 hover:underline text-sm">Read more</a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
            <Image
              src="/blog3.jpg"
              alt="Handmade Pieces"
              width={800}
              height={450}
              className="w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">
                <a className="text-gray-800 hover:text-gray-600">
                  Handmade pieces that take time to make
                </a>
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Delve into the world of handcrafted furniture and decor, each
                with its unique charm...
              </p>
              <a className="text-blue-500 hover:underline text-sm">Read more</a>
            </div>
          </div>

         {/* Pagination */}
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
        </div>

        {/* Sidebar Section */}
        <aside className="lg:col-span-4">
          <div className="bg-white rounded-lg p-6 mb-6">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded mb-8"
            />

            <h3 className="text-xl font-bold mb-8">Categories</h3>
            <ul className="space-y-11">
              <li>
                <a className="text-gray-600 hover:underline">Craft</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Design</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Interior</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Lifestyle</a>
              </li>
              <li>
                <a className="text-gray-600 hover:underline">Handmade</a>
              </li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className="bg-white rounded-lg p-6 space-y-6">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <ul className="space-y-8"> 
              {/* Recent Post 1 */}
              <li className="flex items-center space-x-3">
                <Image
                  src="/recent1.jpg"
                  alt="Recent Post 1"
                  className="w-12 h-12 object-cover rounded"
                  width={48} height={48}
                />


      <a className="text-black hover:underline">
        Going all-in with <br /> millenial design
      </a>
    </li>
    {/* Recent Post 2 */}
    <li className="flex items-center space-x-3">
      <Image
        src="/recent2.jpg"
        alt="Recent Post 2"
        className="w-12 h-12 object-cover rounded"
        width={48} height={48}
      />
      <a className="text-black hover:underline">
        Exploring new ways<br/> of decorating
      </a>
    </li>
    {/* Recent Post 3 */}
    <li className="flex items-center space-x-3">
      <Image
        src="/recent3.jpg"
        alt="Recent Post 3"
        className="w-12 h-12 object-cover rounded"
        width={48} height={48}
      />
      <a className="text-black hover:underline">
        Handmade peices <br/>that took time to make
      </a>
    </li>
    {/* Recent Post 4 */}
    <li className="flex items-center space-x-3">
      <Image
        src="/recent.jpg"
        alt="Recent Post 4"
        className="w-12 h-12 object-cover rounded"
        width={48} height={48}
      />
      <a className="text-black hover:underline">
        Modern home in <br/> milan
      </a>
    </li>
    {/* Recent Post 5 */}
    <li className="flex items-center space-x-3">
      <Image
        src="/recent4.jpg"
        alt="Recent Post 5"
        className="w-12 h-12 object-cover rounded"
        width={48} height={48}
      />
      <a className="text-black hover:underline">
        Colorful office
      </a>
    </li>
  </ul>
</div>
        </aside>
      </div>
    </div>
  );
}
