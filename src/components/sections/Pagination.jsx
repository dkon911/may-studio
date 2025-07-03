import React from "react";
import { Button } from "@/components/ui/button";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    const maxPageButtons = 5;
    let startPage, endPage;

    if (totalPages <= maxPageButtons) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const halfButtons = Math.floor(maxPageButtons / 2);
        if (currentPage <= halfButtons + 1) {
            startPage = 1;
            endPage = maxPageButtons;
        } else if (currentPage >= totalPages - halfButtons) {
            startPage = totalPages - maxPageButtons + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - halfButtons;
            endPage = currentPage + halfButtons;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    if (totalPages <= 1) {
        return null;
    }

    return (
        <div className="flex justify-center items-center gap-2 mt-12">
            <Button
                variant="outline"
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
                className="hidden sm:flex"
            >
                &lt;&lt;
            </Button>
            <Button
                variant="outline"
                size="icon"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </Button>

            {pageNumbers.map((number) => (
                <Button
                    key={number}
                    variant={currentPage === number ? "default" : "outline"}
                    onClick={() => onPageChange(number)}
                >
                    {number}
                </Button>
            ))}

            <Button
                variant="outline"
                size="icon"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                &gt;
            </Button>
            <Button
                variant="outline"
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="hidden sm:flex"
            >
                &gt;&gt;
            </Button>
        </div>
    );
};

export default Pagination;
