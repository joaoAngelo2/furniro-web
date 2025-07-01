import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { type ProductHint } from "../hooks/useProducts";

import ShareIcon from "../assets/icons/gridicons_share.svg";
import CompareIcon from "../assets/icons/compare-svgrepo-com.svg";
import LikeIcon from "../assets/icons/heart.svg";

interface ProductCardProps {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  thumbnail?: string;
  hint?: ProductHint;
}

const ProductCard: React.FC<{ product: ProductCardProps }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

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

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="relative w-full h-[27.875rem] flex flex-col group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button
            className="w-[12.625rem] h-[3rem] flex-shrink-0 bg-white text-[#B88E2F] font-poppins text-[1rem] font-semibold leading-[150%] rounded-[0.3125rem] hover:bg-[#B88E2F] hover:text-white transition-colors"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <div className="flex gap-4 mt-4">
            <span className="flex items-center gap-[0.1875rem] text-white font-poppins text-[1rem] font-semibold leading-[150%] cursor-pointer hover:underline">
              <img src={ShareIcon} alt="Share" className="w-[1rem] h-[1rem]" />
              Share
            </span>
            <span className="flex items-center gap-[0.1875rem] text-white font-poppins text-[1rem] font-semibold leading-[150%] cursor-pointer hover:underline">
              <img
                src={CompareIcon}
                alt="Compare"
                className="w-[1rem] h-[1rem]"
              />
              Compare
            </span>
            <span className="flex items-center gap-[0.1875rem] text-white font-poppins text-[1rem] font-semibold leading-[150%] cursor-pointer hover:underline">
              <img src={LikeIcon} alt="Like" className="w-[1rem] h-[1rem]" />
              Like
            </span>
          </div>
        </div>
      )}

      <div className="w-full h-[18.8125rem] flex-shrink-0 bg-gray-200 relative">
        <img
          src={`${product.thumbnail}`}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full h-[9.0625rem] flex-shrink-0 bg-[#F4F5F7] p-4 flex flex-col">
        <h3 className="text-[#3A3A3A] font-poppins text-[1.5rem] font-semibold leading-[1.8rem]">
          {product.name}
        </h3>
        <p className="text-[#898989] font-poppins text-[1rem] font-medium leading-[1.5rem] mt-2">
          {product.subtitle}
        </p>
        <div className="mt-auto grid grid-cols-2 place-content-between items-center gap-2">
          <p className="text-[#3A3A3A] font-poppins text-[1rem] font-semibold leading-[1.875rem]">
            {formattedPrice}
          </p>
          {formattedOriginalPrice && (
            <p className="text-[#B0B0B0] text-center font-poppins text-[0.8rem] font-normal leading-[1.5rem] line-through">
              {formattedOriginalPrice}
            </p>
          )}
        </div>
      </div>
      {product.hint !== null && <ProductHintBall hint={product.hint} />}
    </div>
  );
};

interface ProductHintProps {
  hint: ProductHint | undefined;
}

function ProductHintBall({ hint }: ProductHintProps) {
  let colorClass: string = "";
  let label: string = "";

  if (hint === null) {
    return null;
  }

  if (hint === "New") {
    colorClass = "bg-hint-new-green";
    label = "New";
  } else if (typeof hint === "number") {
    colorClass = "bg-hint-discount-red";
    label = `-${hint}%`;
  } else {
    return null;
  }

  const className = `flex justify-center items-center absolute rounded-[50%] top-2 right-2 w-[3rem] h-[3rem] ${colorClass} z-10`;

  return (
    <div className={className}>
      <label className="text-white">{label}</label>
    </div>
  );
}

export default ProductCard;
