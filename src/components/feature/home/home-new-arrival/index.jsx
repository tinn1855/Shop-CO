import { useEffect } from "react"
import { useState } from "react"
import { Product } from "../../../molecules/product"

export function HomeNewArrival() {
    const [newArrivals, setNewArrivals] = useState([])
    useEffect(() => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then(data => setNewArrivals(data.slice(0,4)))
                .catch(error => console.log('error fetching data:', error))
        },[])

    return <div>
                <h2 className="font-[IntegralCF-Bold] text-5xl text-center my-14">
                    NEW ARRIVALS
                </h2>
                <div className="flex space-x-4">
                    {newArrivals.map((product, index) => (
                        <Product product={product} key={index} />
                    ))}
                </div>
                <div className="flex justify-center mt-40">
                    <a href="/" className="w-52 text-center py-3 rounded-full border text-medium">
                        View All
                    </a>
                </div>
        </div>
}