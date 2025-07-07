import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";
import { type ProductHint } from "../hooks/useProducts";
import ShareIcon from "../assets/icons/gridicons_share.svg";
import CompareIcon from "../assets/icons/compare-svgrepo-com.svg";
import LikeIcon from "../assets/icons/heart.svg";
import { formatPriceUSD } from "../utils/formattedPrice";

interface ProductCardProps {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  thumbnail: string;
  hint?: ProductHint;
}

const formatPrice = (price: number) => 
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);

const ActionButton = ({ icon, label }: { icon: string; label: string }) => (
  <span className="flex items-center gap-[0.1875rem] text-white font-poppins text-[1rem] font-semibold leading-[150%] cursor-pointer hover:underline">
    <img src={icon} alt={label} className="w-[1rem] h-[1rem]" />
    {label}
  </span>
);

const ProductOverlay = ({ onAddToCart }: { onAddToCart: (e: React.MouseEvent) => void }) => (
  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
    <button
      className="w-[12.625rem] h-[3rem] flex-shrink-0 bg-white text-[#B88E2F] font-poppins text-[1rem] font-semibold leading-[150%] rounded-[0.3125rem] hover:bg-[#B88E2F] hover:text-white transition-colors"
      onClick={onAddToCart}
    >
      Add to cart
    </button>
    <div className="flex gap-4 mt-4">
      <ActionButton icon={ShareIcon} label="Share" />
      <ActionButton icon={CompareIcon} label="Compare" />
      <ActionButton icon={LikeIcon} label="Like" />
    </div>
  </div>
);

const ProductCard: React.FC<{ product: ProductCardProps }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { formattedPrice, formattedOriginalPrice } = useMemo(() => ({
    formattedPrice: "Rp. "+formatPriceUSD(product.price),
    formattedOriginalPrice: product.originalPrice ? "Rp."+formatPriceUSD(product.originalPrice) : null,
  }), [product.price, product.originalPrice]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      thumbnail: product.thumbnail,
    }));
    toast.success(`${product.name} adicionado ao carrinho!`);
  };

  const handleCardClick = () => navigate(`/product/${product.id}`);

  return (
    <div
      className="relative w-full h-[27.875rem] flex flex-col group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {isHovered && <ProductOverlay onAddToCart={handleAddToCart} />}

      <div className="w-full h-[18.8125rem] flex-shrink-0 bg-gray-200 relative">
        <img
          src={product.thumbnail}
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

const ProductHintBall = ({ hint }: { hint: ProductHint | undefined }) => {
  if (!hint) return null;

  const config = hint === "New" 
    ? { colorClass: "bg-[#2EC1AC]", label: "New" }
    : typeof hint === "number" 
    ? { colorClass: "bg-[#E97171]", label: `-${hint}%` }
    : null;

  if (!config) return null;

  return (
    <div className={`flex justify-center items-center absolute rounded-full top-2 right-2 w-[3rem] h-[3rem] ${config.colorClass} z-10`}>
      <span className="text-white">{config.label}</span>
    </div>
  );
};

export default ProductCard;
