import React from "react";

interface ProductDescriptionProps {
  description: string;
  images: string[];
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
  images,
}) => {
  const paragraphs = description.split("\n\n");

  return (
    <div className="text-gray-700 leading-relaxed mb-10">
      {paragraphs.map((p, index) => (
        <p key={index} className="mb-4">
          {p}
        </p>
      ))}

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem da Descrição ${index + 1}`}
            className="w-full md:w-1/2 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
