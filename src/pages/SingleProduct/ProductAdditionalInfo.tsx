// src/pages/SingleProduct/ProductAdditionalInfo.tsx
import React from "react";

// Reutilize ou defina uma interface para os dados específicos desta aba
interface Product {
  // Pode ser uma interface menor ou a mesma do SingleProductPage
  id: string;
  category: string;
  sku: string;
  tags: string[];
  materials?: string;
  dimensions?: { length: string; width: string; height: string };
  weight?: string;
  assembly?: string;
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
