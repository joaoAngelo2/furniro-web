import React from 'react';
import ShopBanner from '../../components/ShopBanner.tsx';
import FilterBar from "../../components/FilterBar.tsx";

const ShopPage: React.FC = () => {
  return (
    <div className="w-[90rem] mx-auto min-h-screen">
      <div className="h-[6.25rem] bg-white"></div>

      <ShopBanner />
      <FilterBar />

    </div>
  );
};

export default ShopPage;