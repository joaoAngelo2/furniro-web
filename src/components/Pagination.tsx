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
  const DOTS = '...'; // Constante para as reticências

  // Função auxiliar para gerar um array de números
  const range = (from: number, to: number, step = 1): number[] => {
    const i = Math.floor(from / step);
    const f = Math.floor(to / step);
    return Array(f - i + 1)
      .fill(0)
      .map((_, idx) => (i + idx) * step);
  };

  // Lógica para gerar os botões de página visíveis (smart pagination)
  const getVisiblePageButtons = (): (number | string)[] => {
    const siblings = 1; // Quantas páginas antes e depois da atual para mostrar (excluindo os 1 e totalPages)
    // Ex: 1 ... (current-1) current (current+1) ... totalPages

    // Se o número total de páginas é pequeno, mostra todas
    if (totalPages <= 7) { // Ajuste 7 para o número máximo de botões que você quer sempre ver (ex: 1,2,3,4,5,6,7)
      return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblings, 1);
    const rightSiblingIndex = Math.min(currentPage + siblings, totalPages);

    // Condição para mostrar reticências à esquerda
    const shouldShowLeftDots = leftSiblingIndex > 2;
    // Condição para mostrar reticências à direita
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    const firstPage = 1;
    const lastPage = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      // Ex: 1, 2, 3, 4, 5, ..., 10
      const leftRange = range(firstPage, 5); // Mostra 5 páginas no início
      return [...leftRange, DOTS, lastPage];
    } else if (shouldShowLeftDots && !shouldShowRightDots) {
      // Ex: 1, ..., 6, 7, 8, 9, 10
      const rightRange = range(totalPages - 4, lastPage); // Mostra 5 páginas no final
      return [firstPage, DOTS, ...rightRange];
    } else if (shouldShowLeftDots && shouldShowRightDots) {
      // Ex: 1, ..., 4, 5, 6, ..., 10
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPage, DOTS, ...middleRange, DOTS, lastPage];
    } else {
      // Caso padrão (se nenhum dos acima, o que significa que já está no primeiro `if` ou erro lógico)
      return range(firstPage, lastPage);
    }
  };

  const pageButtons = getVisiblePageButtons();

  return (
    <div className="flex justify-center items-center gap-[0.5rem] mt-[2.5rem] mb-[1.88rem] flex-wrap">
      {/* Botão "Previous" */}
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
          key={typeof item === 'number' ? item : `dots-${index}`} // Garante key única para '...'
          onClick={() => typeof item === 'number' && onPageChange(item)}
          className={`w-[3.75rem] h-[3.75rem] flex-shrink-0 rounded-[0.625rem] flex items-center justify-center
            font-poppins text-[1.25rem] font-normal
            ${
            typeof item === 'number'
              ? currentPage === item
                ? 'bg-[#B88E2F] text-white' // Cor para a página ativa
                : 'bg-[#F9F1E7] text-black hover:bg-[#e8d9b5] transition-colors' // Cores para páginas inativas
              : 'bg-transparent text-black cursor-default' // Estilo para reticências
          }`
          }
          disabled={item === DOTS} // Desabilita o botão de reticências
        >
          {item}
        </button>
      ))}

      {/* Botão "Next" */}
      <button
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
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