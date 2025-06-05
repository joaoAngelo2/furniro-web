interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const DOTS = "...";
  const range = (from: number, to: number, step = 1): number[] => {
    const i = Math.floor(from / step);
    const f = Math.floor(to / step);
    return Array(f - i + 1)
      .fill(0)
      .map((_, idx) => (i + idx) * step);
  };

  const getVisiblePageButtons = (): (number | string)[] => {
    const siblings = 1;
    if (totalPages <= 7) {
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblings, 1);
    const rightSiblingIndex = Math.min(currentPage + siblings, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    const firstPage = 1;
    const lastPage = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = range(firstPage, 5);
      return [...leftRange, DOTS, lastPage];
    } else if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = range(totalPages - 4, lastPage);
      return [firstPage, DOTS, ...rightRange];
    } else if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPage, DOTS, ...middleRange, DOTS, lastPage];
    } else {
      return range(firstPage, lastPage);
    }
  };

  const pageButtons = getVisiblePageButtons();

  return (
    <div className="flex justify-center items-center gap-[0.5rem] mt-[2.5rem] mb-[1.88rem] flex-wrap">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        className="w-[6.125rem] h-[3.75rem] flex-shrink-0 rounded-[0.625rem] bg-[#F9F1E7]
          text-black font-poppins text-[1.25rem] font-light hover:bg-[#e8d9b5] transition-colors"
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {pageButtons.map((item: number | string, index: number) => (
        <button
          key={typeof item === "number" ? item : `dots-${index}`}
          onClick={() => typeof item === "number" && onPageChange(item)}
          className={`w-[3.75rem] h-[3.75rem] flex-shrink-0 rounded-[0.625rem] flex items-center justify-center
            font-poppins text-[1.25rem] font-normal
            ${
              typeof item === "number"
                ? currentPage === item
                  ? "bg-[#B88E2F] text-white"
                  : "bg-[#F9F1E7] text-black hover:bg-[#e8d9b5] transition-colors"
                : "bg-transparent text-black cursor-default"
            }`}
          disabled={item === DOTS}
        >
          {item}
        </button>
      ))}

      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        className="w-[6.125rem] h-[3.75rem] flex-shrink-0 rounded-[0.625rem] bg-[#F9F1E7]
          text-black font-poppins text-[1.25rem] font-light hover:bg-[#e8d9b5] transition-colors"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
