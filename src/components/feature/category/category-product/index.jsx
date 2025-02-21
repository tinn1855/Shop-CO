import { CategoryProducts } from "@/src/components/molecules/category-product";
import { Paginations } from "@/src/components/molecules/pagination/pagination";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/src/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { useEffect } from "react"
import { useState } from "react"
import { SidebarFilter } from "../sidebar/filter";
import { FilterByPrice } from "../sidebar/filter-by-price";
import { FilterByColor } from "../sidebar/filter-by-color";
import { FilterBySize } from "../sidebar/filter-by-size";
import { FilterByStyle } from "../sidebar/filter-by-style";
import { Button } from "@/src/components/ui/button";

export function CategoryProduct() {
    const [categoryProduct, setCategoryProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(data => setCategoryProduct(data))
            .catch(error => console.log("Error fetching data:", error))
    }, [])

    return (
        <div>
            <div className="flex justify-between items-end">
                <div className="flex items-end justify-between lg:w-full gap-2">
                    <h3 className="font-bold text-2xl lg:text-3xl">Casual</h3>
                    <div className="flex lg:space-x-3 text-sm lg:text-base">
                        <span className="pb-1 lg:pb-0">Showing 1-10 of 100 Products</span>
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
                                <Button className="w-full rounded-full py-6">Apply Filer</Button>
                            </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
               
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-3.5 gap-y-6 lg:gap-4 mt-9 lg:mt-5">
                {categoryProduct.map((product, index) => (
                    <CategoryProducts product={product} key={index}/>
                ))}
            </div>
            <div className="border-b mt-6 w-full"></div>
            <Paginations/>
        </div>
    )
}