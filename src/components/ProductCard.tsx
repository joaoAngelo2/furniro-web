import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, description, price }) => {
  return (
    <div className="w-[17.8125rem] h-[27.875rem] flex flex-col group hover:shadow-lg transition-shadow duration-300">
      <div className="w-[17.8125rem] h-[18.8125rem] flex-shrink-0 bg-gray-200">
        <img
          src={`/assets/shop-image-${id}.svg`}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-[17.8125rem] h-[9.0625rem] flex-shrink-0 bg-[#F4F5F7] p-4 flex flex-col">
        <h3 className="text-[#3A3A3A] font-poppins text-[1.5rem] font-semibold leading-[1.8rem]">
          {name}
        </h3>
        <p className="text-[#898989] font-poppins text-[1rem] font-medium leading-[1.5rem] mt-2">
          {description}
        </p>
        <p className="text-[#3A3A3A] font-poppins text-[1.25rem] font-semibold leading-[1.875rem] mt-auto">
          {price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;