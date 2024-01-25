"use client";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    const maxPages = 6;

    let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
    let endPage = Math.min(startPage + maxPages - 1, totalPages);

    if (totalPages <= maxPages) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= Math.floor(maxPages / 2)) {
      endPage = maxPages;
    } else if (currentPage + Math.floor(maxPages / 2) >= totalPages) {
      startPage = totalPages - maxPages + 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-3 py-1 mx-1 border ${
            currentPage === i ? "bg-purple text-white" : "border-purple"
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-4 min-w-screen">
      {renderPageNumbers()}
    </div>
  );
};

export default Pagination;
