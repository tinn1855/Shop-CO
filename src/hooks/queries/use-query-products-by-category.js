import { useEffect, useState } from "react";

export function useQueryProductsByCategoryId(categoryId) {
    const [categoryProduct, setCategoryProduct] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(data => setCategoryProduct(data))
        .catch(error => console.log("Error fetching data:", error))
    }, [])

    return {
        data: categoryProduct
    }
}