import React from "react";

import { type ProductHint } from "../hooks/useProducts";

interface ProductCardProps {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  thumbnail: string;
  hint: ProductHint;
}

const ProductCard: React.FC<{ product: ProductCardProps }> = ({ product }) => {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(product.price);

  const formattedOriginalPrice = product.originalPrice
    ? new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(product.originalPrice)
    : null;

  return (
    <div className="relative w-[17.8125rem] h-[27.875rem] flex flex-col group hover:shadow-lg transition-shadow duration-300">
      <div className="w-[17.8125rem] h-[18.8125rem] flex-shrink-0 bg-gray-200">
        <img
          src={`src/${product.thumbnail}`}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-[17.8125rem] h-[9.0625rem] flex-shrink-0 bg-[#F4F5F7] p-4 flex flex-col">
        <h3 className="text-[#3A3A3A] font-poppins text-[1.5rem] font-semibold leading-[1.8rem]">
          {product.name}
        </h3>
        <p className="text-[#898989] font-poppins text-[1rem] font-medium leading-[1.5rem] mt-2">
          {product.subtitle}
        </p>
        <p className="text-[#3A3A3A] font-poppins text-[1.25rem] font-semibold leading-[1.875rem] mt-auto">
          {formattedPrice}
        </p>
        <p className="text-[#B0B0B0] font-poppins text-[1rem] font-normal leading-[1.5rem] line-through">
          {formattedOriginalPrice}
        </p>
      </div>
      {product.hint !== null && <ProductHintBall hint={product.hint} />}
    </div>
  );
};

interface ProductHintProps {
  hint: ProductHint;
}

function ProductHintBall({ hint }: ProductHintProps) {
  let color: string;
  let label: string;

  if (hint === null) {
    return null;
  }

  if (hint === "New") {
    color = "bg-hint-new-green";
    label = "New";
  } else if (typeof hint === "number") {
    color = "bg-hint-discount-red";
    label = `-${hint}%`;
  } else {
    return null;
  }

  const className = `flex justify-center items-center absolute rounded-[50%] top-2 right-2 w-[3rem] h-[3rem] bg-[${color}] z-10`;

  return (
    <div className={className}>
      <label className="text-white">{label}</label>
    </div>
  );
}

export default ProductCard;
