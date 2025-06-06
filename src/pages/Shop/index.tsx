import { useState, useEffect } from "react";
import ShopBanner from "../../components/ShopBanner";
import FilterBar from "../../components/FilterBar";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";
import useProducts from "../../hooks/useProducts";
import ServiceFeatures from "../../components/ServiceFeatures";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const ShopPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { products, loading } = useProducts(selectedCategory);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="w-full">
        <ShopBanner />
        <FilterBar
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          totalResults={products.length}
          currentPage={currentPage}
        />
        <div className="container mx-auto mt-[2.87rem] mb-[5.31rem] px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-10 justify-items-center">
            {currentItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <Pagination
            totalItems={products.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
        <ServiceFeatures />
        <Footer />
      </div>
    </>
  );
};
