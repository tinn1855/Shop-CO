import { CategoryProduct } from "@/src/components/molecules/category-product";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/src/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react"
import { SidebarFilter } from "../sidebar/filter";
import { FilterByPrice } from "../sidebar/filter-by-price";
import { FilterByColor } from "../sidebar/filter-by-color";
import { FilterBySize } from "../sidebar/filter-by-size";
import { FilterByStyle } from "../sidebar/filter-by-style";
import { Button } from "@/src/components/ui/button";
import { Paginations } from "@/src/components/molecules/pagination/pagination";
import { useQueryProductsByCategoryId } from "@/src/hooks/queries/use-query-products-by-category";
import { UseQuerySingleCategory } from "@/src/hooks/queries/use-query-single-category";


export function CategoryProducts({categoryId}) {
    const [currentPage, setCurrentPage] = useState(1);

    const {data: singleCategory} = UseQuerySingleCategory(categoryId)
    const {data: categoryProduct} = useQueryProductsByCategoryId(categoryId)

    const itemsPerPages = 9;
    const totalPages = Math.ceil(categoryProduct.length / itemsPerPages)
    const currentItems = categoryProduct.slice((currentPage - 1) * itemsPerPages, currentPage * itemsPerPages)

    return (
        <div>
            <div className="flex justify-between items-end">
                <div className="flex items-end justify-between lg:w-full gap-2">
                    <h3 className="font-bold text-2xl lg:text-3xl">{singleCategory.name}</h3>
                    <div className="flex lg:space-x-3 text-sm lg:text-base">
                        <span className="pb-1 lg:pb-0">Showing {(currentPage - 1) * itemsPerPages + 1} - {Math.min(currentPage * itemsPerPages, categoryProduct.length)} of {categoryProduct.length} Products</span>
                        <div className="hidden lg:flex space-x-1 ">
                            <span>Sort by:</span>
                            <h3 className="font-semibold">Most Popular</h3>
                        </div>
                    </div>
                </div>
                <Sheet>
                    <SheetTrigger>
                        <div className='p-2 lg:hidden bg-[#f0f0f0] rounded-full'>
                            <SlidersHorizontal className="w-4 h-4" />
                        </div>
                    </SheetTrigger>
                    <SheetContent side="top">
                        <SheetHeader>
                            <SheetTitle>Filter</SheetTitle>
                            <SheetDescription>
                            <div className="border border-gray-300 rounded-xl px-6 py-5 space-y-8 overflow-y-hidden">
                                <SidebarFilter/>
                                <FilterByPrice/>
                                <FilterByColor/>
                                <FilterBySize/>
                                <FilterByStyle/>
                                <Button>Apply Filer</Button>
                            </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-3.5 gap-y-6 lg:gap-4 mt-9 lg:mt-5">
                {currentItems.map((product, index) => (
                    <CategoryProduct product={product} key={index}/>
                ))}
            </div>
            <div className="border-b mt-6 w-full"></div>
            <Paginations currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </div>
    )
}