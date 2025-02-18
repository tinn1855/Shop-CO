import { Product } from "@/src/components/molecules/product"
import { useEffect } from "react"
import { useState } from "react"

export function AlsoLike() {
    const [alsoLike, setAlsoLike] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setAlsoLike(data))
            .catch(error => console.log("Error fetching data: ", error))
    })

    return (
        <div className="">
            <h2 className="font-[IntegralCF-Bold] text-5xl text-center my-14">
                YOU MIGHT ALSO LIKE
            </h2>
            <div className="flex gap-5 mb-20">
                {alsoLike.map((product, index) => (
                    <Product product={product} key={index} />
                )).slice(0,4)}
            </div>
        </div>
    )
}