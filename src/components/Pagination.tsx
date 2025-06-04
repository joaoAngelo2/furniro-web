//import React, { useState } from 'react';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination= ({
                                                 totalItems,
                                                 itemsPerPage,
                                                 currentPage,
                                                 onPageChange
                                               }: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center items-center gap-[2.38rem] mt-[2.5rem] mb-[1.88rem]">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-[3.75rem] h-[3.75rem] flex-shrink-0 rounded-[0.625rem] flex items-center justify-center
            ${currentPage === page
            ? 'bg-[#B88E2F] text-white'
            : 'bg-[#F9F1E7] text-black hover:bg-[#e8d9b5] transition-colors'
          } font-poppins text-[1.25rem] font-normal`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        className="w-[6.125rem] h-[3.75rem] flex-shrink-0 rounded-[0.625rem] bg-[#F9F1E7]
          text-black font-poppins text-[1.25rem] font-light hover:bg-[#e8d9b5] transition-colors"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;