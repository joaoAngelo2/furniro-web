import React from 'react';
import shopBackground from '../assets/shop-background.svg';

const ShopBanner: React.FC = () => {
  return (
    <div
      className="w-full h-[19.75rem] flex-shrink-0 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${shopBackground})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center">
        {/* Título "Shop" */}
        <h1 className="text-black font-poppins text-[3rem] font-medium leading-none">
          Shop
        </h1>

        <div className="flex items-center gap-2 mt-4">
          <span className="text-black font-poppins text-[1rem] font-medium">
            Home
          </span>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="transform -rotate-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black"/>
          </svg>

          <span className="text-black font-poppins text-[1rem] font-light">
            shop
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;