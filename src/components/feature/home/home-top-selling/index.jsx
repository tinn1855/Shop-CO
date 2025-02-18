import { useState } from "react"
import { useEffect } from "react"
import { Product } from "../../../molecules/product"

export function HomeTopSelling() {
    const [topSellings, setTopSellings] = useState([])
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4')
            .then(res => res.json())
            .then(data => setTopSellings(data))
            .catch(error => console.log('error fetching data:', error))
    },[])
    return  <div>
                <h2 className="text-center text-5xl font-[IntegralCF-Bold]">TOP SELLING</h2>
                <div className="flex space-x-4 mt-14">
                    {topSellings.map((product, index) => (
                        <Product product={product} key={index} />
                    ))}
                </div>
                <div className="flex justify-center mt-5">
                    <a href="/" className="w-52 text-center py-3 rounded-full border text-medium">
                        View All
                    </a>
                </div>
            /</div>
}