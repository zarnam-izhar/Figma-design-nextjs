import React from 'react';

const Cart = () => {
  return (
    <div>
      
      <div
        className="relative bg-cover bg-center py-16"
        style={{ backgroundImage: 'url("/bg.jpg")' }}
      >
        <div className="absolute inset-0 bg-slate-300 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-black">
          {/* Logo */}
          <div className="mb-4">
            <img src="/logo.png" alt="Logo" className="mx-auto w-24" />
          </div>

          <h1 className="text-4xl font-semibold mt-4">Shopping Cart</h1>
          <p className="text-sm">Home {'>'} Cart</p>
        </div>
      </div>

      {/* Cart Content */}
      <div className="flex justify-between max-w-7xl mx-auto px-4 mt-10 gap-6">
       
        <div className="flex-1">
          
          <div className="flex justify-between items-center pb-4 bg-[#F9F1E7] py-3">
            <h2 className="font-semibold text-[16px]">Product</h2>
            <h2 className="font-semibold text-[16px]">Price</h2>
            <h2 className="font-semibold text-[16px]">Quantity</h2>
            <h2 className="font-semibold text-[16px]">Subtotal</h2>
          </div>

          {/* Cart Items */}
          <div className="mt-6">
            <div className="flex items-center justify-between pb-4">
              
              <div className="flex items-center space-x-4">
                <img
                  src="/Asgaard sofa 5.png"
                  alt="Asgaard sofa"
                  className="h-[105px] w-[108px] object-cover rounded-md"
                />
                <div className="flex gap-10">
                  <h3 className="text-[#9F9F9F] text-[16px] font-medium text-lg">Asgaard sofa</h3>
                  <p className="text-gray-500">Rs. 250,000.00</p>
                  <input
                    type="number"
                    defaultValue="1"
                    className="w-11 border rounded-md text-center py-1"
                  />
                  <p className="text-black">Rs. 250,000.00</p>
                  <button className="text-red-500 hover:text-red-700">🗑️</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="w-[300px] bg-[#F9F1E7] py-6 px-4 rounded-lg mb-28">
          <h2 className="font-semibold text-center text-[24px] mb-4">Cart Totals</h2>
          <div className="mb-4">
            <div className="flex justify-between text-lg">
              <span>Subtotal</span>
              <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between text-lg">
              <span>Total</span>
              <span className="text-[#B88E2F]">Rs. 250,000.00</span>
            </div>
          </div>
          <button className="w-full border-2 border-black rounded-[15px] py-3 font-semibold text-[18px] hover:bg-black hover:text-white transition">
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
