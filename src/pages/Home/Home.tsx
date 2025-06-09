import CategoryCard from "../../components/CategoryCard";
import PromoBanner from "../../components/PromoBanner";
import CategoryRooms from "../../components/CategoryRooms";
import { Link } from "react-router-dom";
import Mosaico from "../../components/Mosaico";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const { products, loading } = useProducts();

  // Pegar os primeiros 8 produtos para a seção "Our Products"
  const productsToShow = products.slice(0, 8); // Ajuste a quantidade se o Figma mostrar diferente
  return (
    <div>
      <Header />
      <section>
        <PromoBanner />
      </section>
      <section>
        <div className="md:h-[47rem] h-[110rem] w-screen font-poppins">
          <div className="w-screen text-center mb-8">
            <p className="text-3xl font-bold text-zinc-800 ">
              Browse The Range
            </p>
            <p className="text-xl font-normal text-stone-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-screen">
            <div className="w-[90%] flex flex-col items-center max-w-screen-xl max-[970px]:w-[95%] md:flex-row mx-auto justify-between">
              <CategoryCard
                imageClass="bg-dining-img"
                title="Dining"
                to="/shop/dining"
              />
              <CategoryCard
                imageClass="bg-living-img"
                title="Living"
                to="/shop/living"
              />
              <CategoryCard
                imageClass="bg-bedroom-img"
                title="Bedroom"
                to="/shop/bedroom"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-screen text-center">
          <p className="text-3xl font-bold text-zinc-800 mb-8">Our Products</p>
          {/* Se estiver carregando, mostre uma mensagem de loading */}
          {loading ? (
            <div className="text-center">Carregando produtos...</div>
          ) : (
            <div className="container mx-auto px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-10 justify-items-center">
              {productsToShow.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
        <Link to={"/shop"}>
          <div className="w-screen items-center flex mt-10">
            <button className="mx-auto w-60 h-12 border-amarelo-botoes border-2 text-yellow-600 text-base font-semibold mb-8">
              Show more
            </button>
          </div>
        </Link>
      </section>
      <section>
        <CategoryRooms />
      </section>
      <section>
        <div className="w-screen mt-16 text-center px-4">
          <p className="font-semibold text-sm">Share your setup with</p>
          <p className="font-bold text-4xl">#FuniroFurniture</p>
        </div>

        <Mosaico />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
