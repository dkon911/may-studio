import { useState, useEffect, useMemo } from 'react';

const usePagination = (items, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = useMemo(() => {
        return Math.ceil(items.length / itemsPerPage);
    }, [items, itemsPerPage]);

    useEffect(() => {
        // Reset to page 1 if items change (e.g., category filter)
        setCurrentPage(1);
    }, [items]);

    const handlePageChange = (page) => {
        const newPage = Math.max(1, Math.min(page, totalPages));
        setCurrentPage(newPage);
        window.scrollTo({ top: 0, behavior: 'auto' });
    };

    const currentItems = useMemo(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        return items.slice(indexOfFirstItem, indexOfLastItem);
    }, [currentPage, items, itemsPerPage]);


    return {
        currentPage,
        totalPages,
        handlePageChange,
        currentItems,
    };
};

export default usePagination;
