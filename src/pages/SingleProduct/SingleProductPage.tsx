import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ProductAdditionalInfo from "../../components/ProductAdditionalInfo";
import ProductDescription from "../../components/ProductDescription";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

interface Product {
  id: string;
  name: string;
  subtitle?: string;
  rate?: number;
  price: number;
  originalPrice?: number;
  discount?: number;
  description: string;
  longDescription?: string;
  images: string[];
  descriptionImages?: string[];
  thumbnail?: string;
  category: string;
  sku: string;
  tags: string[];
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
}
const SingleProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"description" | "additional-info">(
    "description"
  );

  // --- Função para exibir o Toast ---
  const triggerToast = (message: string) => {
    console.log("Toast: " + message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // --- Efeito para buscar os dados do produto ---
  useEffect(() => {
    if (!id) {
      setError("Product ID not found.");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<Product>(
          `http://localhost:3000/products/${id}`
        );
        setProduct(response.data);
        if (response.data.images && response.data.images.length > 0) {
          setActiveImage(response.data.images[0]);
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch product details.");
        setLoading(false);
        console.error(err);
      }
    };

    fetchProduct();
  }, [id]);

  // --- Funções para o seletor de quantidade ---
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // --- Função para adicionar ao carrinho (só feedback por enquanto) ---
  const handleAddToCart = () => {
    // implementaria a lógica de adicionar ao carrinho,
    if (product) {
      triggerToast(`${product.name} (x${quantity}) adicionado ao carrinho!`);
    } else {
      triggerToast("Nenhum produto para adicionar.");
    }
  };

  // --- Renderização condicional para estados de carregamento/erro ---
  if (loading) {
    return (
      <div className="text-center py-20">Carregando detalhes do produto...</div>
    );
  }

  if (error) {
    return <div className="text-center py-20 text-red-600">Erro: {error}</div>;
  }

  if (!product) {
    return <div className="text-center py-20">Produto não encontrado.</div>;
  }

  // Define o rate do produto, padrão para 0 se não existir
  const productRate = product.rate || 0;
  // Cria arrays para estrelas cheias e vazias
  const fullStars = Array(productRate).fill("★");
  const emptyStars = Array(5 - productRate).fill("☆");

  return (
    <div>
      <Header />
      <div className="text-sm text-prata mb-8 flex items-center bg-primary w-full h-24 font-poppins ">
        <div className="flex items-center container mx-auto space-x-4 justify-center md:justify-start">
          <Link to="/" className="hover:text-secundary">
            Home
          </Link>
          <span className="mx-2">
            <img className="w-1.5" src="/src/assets/Vector.svg" alt="" />
          </span>
          <Link to="/shop" className="hover:text-secundary">
            Shop
          </Link>
          <span className="mx-2">
            <img className="w-1.5" src="/src/assets/Vector.svg" alt="" />
          </span>
          <span className="font-semibold text-black border-l-2 border-prata pl-3.5">
            {product.name}
          </span>
        </div>
      </div>
      <div className="container mx-auto font-poppins px-3 md:px-0">
        <div className="flex flex-col lg:flex-row gap-8 pb-12">
          {/* Coluna Esquerda: Imagens */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-4">
            {/* Imagens em miniatura */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto max-h-96">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} - View ${index + 1}`}
                  className={`w-24 h-24 object-cover cursor-pointer rounded-lg ${
                    activeImage === img
                      ? "bg-primary border border-secundary"
                      : "bg-primary"
                  }`}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
            {/* Imagem principal */}
            <div className="w-full h-96 lg:h-[500px] flex items-center justify-center overflow-hidden bg-primary rounded-lg ">
              <img
                src={activeImage || product.images[0]}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Coluna Direita: Detalhes do Produto */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl text-black mb-2">{product.name}</h1>
            <p className="text-prata text-2xl font-medium mb-4 pt-1">
              Rs. {product.price.toLocaleString("pt-BR")}
            </p>{" "}
            {/* Avaliação */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-500">
                {/* Estrelas cheias */}
                {fullStars.map((star, index) => (
                  <span key={`full-${index}`} className="text-2xl">
                    {star}
                  </span>
                ))}
                {/* Estrelas vazias */}
                {emptyStars.map((star, index) => (
                  <span key={`empty-${index}`} className="text-2xl">
                    {star}
                  </span>
                ))}
              </div>
              <span className="ml-4 text-prata text-sm border-l-2 pl-4 border-cinza">
                5 Customer Review
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>
            {/* Tamanho (se existir no JSON) */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h4 className="text-gray-500 font-medium mb-2">Size</h4>
                <div className="flex gap-4">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`w-9 h-9 rounded-md border border-none ${
                        selectedSize === size
                          ? "bg-secundary text-white"
                          : "text-black bg-primary"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {/* Cor (se existir no JSON) */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h4 className="text-gray-500 font-medium mb-2">Color</h4>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color
                          ? "border-secundary" // Use secundary para a borda do selecionado
                          : "border-gray-200" // Cor da borda padrão
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select color ${color}`}
                    ></button>
                  ))}
                </div>
              </div>
            )}
            {/* Quantidade e Botão Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={decrementQuantity}
                  className="px-4 h-16 text-xl font-semibold hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 h-16 border-gray-300 justify-center content-center">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="px-4 h-16 text-xl font-semibold hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-52 h-16 border border-black text-black rounded-lg hover:bg-slate-500 hover:text-white hover:border-slate-500 transition-colors duration-200"
              >
                Add To Cart
              </button>
            </div>
            {/* Detalhes Adicionais (SKU, Category, Tags) */}
            <div className="border-t border-cinza pt-8 mt-8 text-prata text-base">
              <p className="mb-3">
                SKU : <span className="">{product.sku}</span>
              </p>
              <p className="mb-3">
                Category : <span className="">{product.category}</span>
              </p>
              <p>
                Tags : <span className="">{product.tags.join(", ")}</span>
              </p>
            </div>
            {/* Ícones de Compartilhamento (se for o caso) */}
            <div className="flex items-center mt-3">
              <span className="text-prata mr-4 text-base">Share :</span>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                >
                  <img
                    src="/src/assets/face-icon.svg"
                    alt="Facebook"
                    className="h-5 w-5"
                  />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                >
                  <img
                    src="/src/assets/linkedin-icon.svg"
                    alt="LinkedIn"
                    className="h-5 w-5"
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                >
                  <img
                    src="/src/assets/twitter-icon.svg"
                    alt="Twitter"
                    className="h-5 w-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-cinza pt-10 mt-10">
          {" "}
          {/* Linha divisória e espaçamento superior */}
          <div className="container mx-auto px-4">
            {" "}
            {/* Container para centralizar o conteúdo das abas */}
            {/* Abas de Navegação (botões) */}
            <div className="flex justify-center gap-16 mb-8 text-xl ">
              <button
                className={`pb-2 ${
                  activeTab === "description"
                    ? "text-black font-medium"
                    : "text-gray-400 hover:text-black"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`pb-2 ${
                  activeTab === "additional-info"
                    ? "text-black font-medium"
                    : "text-gray-400 hover:text-black"
                }`}
                onClick={() => setActiveTab("additional-info")}
              >
                Additional Information
              </button>
            </div>
            {/* Conteúdo das Abas (renderização condicional) */}
            <div>
              {activeTab === "description" && product && (
                <ProductDescription
                  // Passa a descrição mais longa se existir, senão a curta
                  description={product.longDescription || product.description}
                  // Pega as imagens específicas da descrição (se houver), senão as 2 primeiras do array principal
                  images={
                    product.descriptionImages || product.images.slice(0, 2)
                  }
                />
              )}
              {activeTab === "additional-info" && product && (
                <ProductAdditionalInfo
                  product={product} // Passa o objeto produto completo para a aba de informações adicionais
                />
              )}
              {/* Adicione o componente de Reviews aqui se activeTab for 'reviews' */}
            </div>
          </div>
        </div>
        <div className="border-t border-cinza container mx-auto px-4 border-b">
          <div className="px-4 mb-14">
            <h2 className="flex justify-center font-medium text-black md:text-4xl mt-14 text-3xl">
              Related Products
            </h2>

            <div className=""></div>

            <div className="flex justify-center">
              <Link
                to="/shop"
                className="h-[48px] w-[245px] border-solid border-[1px] font-semibold text-secundary border-secundary hover:text-white hover:bg-secundary transition-all flex justify-center items-center"
              >
                Show More
              </Link>
            </div>
          </div>
        </div>
        {/* Fim da Seção de Abas */}
        {/* Toast de Feedback */}
        {showToast && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-xl animate-fade-in-up">
            {"Item adicionado!"}{" "}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SingleProductPage;
