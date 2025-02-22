import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/src/components/ui/pagination"


export function Paginations({currentPage, totalPages, setCurrentPage }) {
    const goToPage = (page) => {
        if(page >= 1 && page <= totalPages) {
            setCurrentPage(page)
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
    const renderPages = () => {
        const pages = [];
        if (totalPages <= 4) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(
                    <PaginationItem key={i}>
                        <PaginationLink onClick={() => goToPage(i)} isActive={currentPage === i}>{i}</PaginationLink>
                    </PaginationItem>
                );
            }
        } else {
            pages.push(
                <PaginationItem key={1}>
                    <PaginationLink onClick={() => goToPage(1)} isActive={currentPage === 1}>1</PaginationLink>
                </PaginationItem>
            );
            if (currentPage > 2) {
                pages.push(
                    <PaginationItem key="ellipsis-start">
                        <PaginationEllipsis />
                    </PaginationItem>
                );
            }
            
            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(totalPages - 1, currentPage + 1);
            for (let i = startPage; i <= endPage; i++) {
                pages.push(
                    <PaginationItem key={i}>
                        <PaginationLink onClick={() => goToPage(i)} isActive={currentPage === i}>{i}</PaginationLink>
                    </PaginationItem>
                );
            }
            
            if (currentPage < totalPages - 1) {
                pages.push(
                    <PaginationItem key="ellipsis-end">
                        <PaginationEllipsis />
                    </PaginationItem>
                );
            }
            pages.push(
                <PaginationItem key={totalPages}>
                    <PaginationLink onClick={() => goToPage(totalPages)} isActive={currentPage === totalPages}>{totalPages}</PaginationLink>
                </PaginationItem>
            );
        }
        return pages;
    };

    return (
        <div className="mt-5 w-full flex justify-between">
            <Pagination className="">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} />
                    </PaginationItem>
                        {renderPages()}
                    <PaginationItem >
                        <PaginationNext onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}