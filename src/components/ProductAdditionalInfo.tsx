// src/pages/SingleProduct/ProductAdditionalInfo.tsx
import React from "react";
import type { ProductHint } from "../hooks/useProducts";

// Reutilize ou defina uma interface para os dados específicos desta aba
interface Product { // Certifique-se que esta interface é flexível o suficiente
  id: string;
  name: string;
  subtitle?: string; // OPCIONAL AQUI
  rate?: number;
  price: number;
  originalPrice?: number;
  discount?: number;
  description: string;
  longDescription?: string;
  images: string[];
  descriptionImages?: string[];
  thumbnail?: string; // OPCIONAL AQUI
  category: string;
  sku: string;
  tags?: string[]; // OPCIONAL AQUI
  colors?: string[];
  sizes?: string[];
  materials?: string;
  dimensions?: {
    length: string;
    width: string;
    height: string;
  };
  weight?: string;
  assembly?: string;
  hint?: ProductHint; // ou ProductHint, mas como não é usado, any ou undefined está ok para essa aba.
}

interface ProductAdditionalInfoProps {
  product: Product;
}

const ProductAdditionalInfo: React.FC<ProductAdditionalInfoProps> = ({
  product,
}) => {
  return (
    <div className="text-gray-700 leading-relaxed mb-10">
      <table className="min-w-full bg-white border border-gray-200 ">
        <tbody>
          {product.sku && (
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">
                SKU:
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.sku}
              </td>
            </tr>
          )}
          {product.category && (
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">
                Category:
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.category}
              </td>
            </tr>
          )}
          {product.tags && product.tags.length > 0 && (
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">
                Tags:
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.tags.join(", ")}
              </td>
            </tr>
          )}
          {product.materials && (
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">
                Materials:
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.materials}
              </td>
            </tr>
          )}
          {product.dimensions && (
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">
                Dimensions (LxWxH):
              </td>
              <td className="py-2 px-4 border-b border-gray-200">{`${product.dimensions.length} x ${product.dimensions.width} x ${product.dimensions.height}`}</td>
            </tr>
          )}
          {product.weight && (
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">
                Weight:
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.weight}
              </td>
            </tr>
          )}
          {product.assembly && (
            <tr>
              <td className="py-2 px-4 border-b border-gray-200 font-medium">
                Assembly:
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {product.assembly}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default ProductAdditionalInfo;
