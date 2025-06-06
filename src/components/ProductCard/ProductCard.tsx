// src/components/ProductCard/ProductCard.tsx
import React from "react";
import { Link } from "react-router-dom"; // Para redirecionar para a página do produto

// Interface para as propriedades (props) que o ProductCard vai receber
interface ProductCardProps {
  id: string;
  name: string;
  subtitle: string; // "Stylish cafe chair", "Luxury big sofa"
  price: number;
  originalPrice?: number; // Preço antigo para desconto (opcional)
  discount?: number; // Percentual de desconto (opcional)
  images: string[]; // Array de URLs de imagem (usaremos a primeira como thumbnail)
  tags?: string[]; // Para selos como "New" (ex: ['New'])
  // hint?: number | string; // Se você ainda usa 'hint' do db.json, pode passar aqui e converter
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  subtitle,
  price,
  originalPrice,
  discount,
  images,
  tags,
}) => {
  // Lógica para determinar se é um produto "New" ou tem "Discount"
  const isNew = tags && tags.includes("New");
  const hasDiscount = discount && discount > 0;

  // Formato da moeda para o preço
  // Ajuste 'en-IN' e 'IDR' para a moeda do seu projeto (Rupias Indonésias no Figma)
  const formattedPrice = `Rp ${price.toLocaleString("en-ID")}`;
  const formattedOriginalPrice = originalPrice
    ? `Rp ${originalPrice.toLocaleString("en-ID")}`
    : "";

  return (
    // O card inteiro é um link para a página de detalhes do produto
    <Link
      to={`/product/${id}`}
      className="group relative bg-primary rounded-lg overflow-hidden pb-4 transition-transform duration-300 hover:scale-105 shadow-md"
    >
      {/* Selos de Desconto ou Novo */}
      {(hasDiscount || isNew) && (
        <div
          className={`absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold z-10 ${
            hasDiscount ? "bg-red-500" : isNew ? "bg-teal-500" : "" // Use 'bg-teal-500' ou a cor para 'New' do Figma
          }`}
        >
          {hasDiscount ? `-${discount}%` : isNew ? "New" : ""}
        </div>
      )}

      {/* Imagem do Produto */}
      <img
        src={images[0]}
        alt={name}
        className="w-full h-60 object-cover mb-4"
      />

      {/* Detalhes do Produto */}
      <div className="px-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-500 text-sm mb-2">{subtitle}</p>{" "}
        {/* Subtitle aqui */}
        <div className="flex items-center">
          <p className="text-lg font-bold text-gray-800">{formattedPrice}</p>
          {originalPrice && (
            <p className="text-gray-400 text-sm line-through ml-2">
              {formattedOriginalPrice}
            </p>
          )}
        </div>
      </div>

      {/* Overlay de "Add to Cart" no Hover (se o Figma da SHOP mostrar)
          Este é o hover que fica escuro com o botão Add to Cart.
          Se a seção 'Related Products' não tem essa interação, pode remover este bloco.
      */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white text-orange-500 px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
          Add to Cart
        </button>
        <Link
          to={`/product/${id}`}
          className="text-white hover:underline text-sm"
        >
          View Details
        </Link>
        {/* Aqui você pode adicionar os ícones de Compartilhar/Comparar/Curtir se estiverem no hover do Figma */}
        {/*
        <div className="flex space-x-4 mt-2 text-white">
          <button className="hover:text-orange-500">Share</button>
          <button className="hover:text-orange-500">Compare</button>
          <button className="hover:text-orange-500">Like</button>
        </div>
        */}
      </div>
    </Link>
  );
};

export default ProductCard;
