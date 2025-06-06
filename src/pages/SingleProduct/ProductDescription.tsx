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
    <div className="text-prata leading-relaxed mb-10">
      {paragraphs.map((p, index) => (
        <p key={index} className=" mb-4 max-w-[62rem] mx-auto">
          {p}
        </p>
      ))}

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem da Descrição ${index + 1}`}
            className="w-full md:w-1/2 object-cover rounded-xl bg-primary "
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
