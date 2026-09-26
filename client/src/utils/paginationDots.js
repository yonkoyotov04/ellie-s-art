const dots = '...';

function range(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export default function getPaginationRange(currentPage, totalPages, siblingCount = 2) {
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPages) {
        return range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 3;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;
    
    if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * siblingCount;
        return [...range(1, leftItemCount), dots, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * siblingCount;
        return [1, dots, ...range(totalPages - rightItemCount + 1, totalPages)];
    }

    return [1, dots, ...range(leftSiblingIndex, rightSiblingIndex), dots, totalPages];
}