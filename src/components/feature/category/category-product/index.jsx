import { CategoryProducts } from "@/src/components/molecules/category-product";
import { Paginations } from "@/src/components/molecules/pagination/pagination";
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
    console.log(categoryProduct)

    return (
        <div>
            <div className="flex justify-between items-end">
                <h3 className="font-bold text-3xl">Casual</h3>
                <div className="flex space-x-3">
                    <span>Showing 1-10 of 100 Products</span>
                    <div className="flex space-x-1 ">
                        <span>Sort by:</span>
                        <h3 className="font-semibold">Most Popular</h3>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-5">
                {categoryProduct.map((product, index) => (
                    <CategoryProducts product={product} key={index}/>
                ))}
            </div>
            <Paginations/>
        </div>
    )
}