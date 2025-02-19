import { CategoryProducts } from "@/src/components/molecules/category-product";
import { Paginations } from "@/src/components/molecules/pagination/pagination";
import { SlidersHorizontal } from "lucide-react";
import { useEffect } from "react"
import { useState } from "react"

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
                <div className='p-2 lg:hidden bg-[#f0f0f0] rounded-full'>
                    <SlidersHorizontal className="w-4 h-4" />
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 gap-y-7 lg:gap-4 mt-3 lg:mt-5">
                {categoryProduct.map((product, index) => (
                    <CategoryProducts product={product} key={index}/>
                ))}
            </div>
            <Paginations/>
        </div>
    )
}