import { useState } from "react";
import ShopBanner from "../../components/ShopBanner";
import FilterBar from "../../components/FilterBar";
import ProductCard from "../../components/ProductCard";
import Pagination from "../../components/Pagination";
import useProducts from "../../hooks/useProducts";
import ServiceFeatures from "../../components/ServiceFeatures";
import Header from "../../components/Header";

export const ShopPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const { products, loading } = useProducts();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="w-full mx-auto">
      <Header />
      <ShopBanner />
      <FilterBar
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
      />

      <div className="mt-[2.87rem] mb-[5.31rem] px-8">
        <div className="grid grid-cols-4 gap-x-8 gap-y-10">
          {currentItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Pagination
          totalItems={products.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
      <ServiceFeatures />
    </div>
  );
};
