import { useState } from 'react';

interface UsePaginationOptions {
  initialPage?: number;
  initialItemsPerPage?: number;
  initialTotalItems?: number;
  initialTotalPages?: number;
}

interface PaginationUpdate {
  currentPage?: number;
  itemsPerPage?: number;
  totalItems?: number;
  totalPages?: number;
}

/** Maneja estado y helpers de paginación reutilizables. */
export function usePagination({
  initialPage = 1,
  initialItemsPerPage = 15,
  initialTotalItems = 0,
  initialTotalPages = 1,
}: UsePaginationOptions = {}) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);
  const [totalItems, setTotalItems] = useState(initialTotalItems);
  const [totalPages, setTotalPages] = useState(initialTotalPages);

  const changePage = (page: number) => {
    const nextPage = Math.max(1, Math.min(page, totalPages || 1));
    setCurrentPage(nextPage);
  };

  const changeItemsPerPage = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const syncPagination = ({ currentPage, itemsPerPage, totalItems, totalPages }: PaginationUpdate) => {
    if (typeof currentPage === 'number') {
      setCurrentPage(currentPage);
    }

    if (typeof itemsPerPage === 'number') {
      setItemsPerPage(itemsPerPage);
    }

    if (typeof totalItems === 'number') {
      setTotalItems(totalItems);
    }

    if (typeof totalPages === 'number') {
      setTotalPages(totalPages);
    }
  };

  const resetPagination = () => {
    setCurrentPage(initialPage);
    setItemsPerPage(initialItemsPerPage);
    setTotalItems(initialTotalItems);
    setTotalPages(initialTotalPages);
  };

  return {
    currentPage,
    itemsPerPage,
    totalItems,
    totalPages,
    changeItemsPerPage,
    changePage,
    resetPagination,
    setCurrentPage,
    setItemsPerPage,
    syncPagination,
  };
}
