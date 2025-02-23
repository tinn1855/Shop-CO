import { useState } from "react"
import { useEffect } from "react"
import { Product } from "../../../molecules/product"
import { Button } from "@/src/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/src/components/ui/carousel"

export function HomeTopSelling() {
    const [topSellings, setTopSellings] = useState([])
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=6')
            .then(res => res.json())
            .then(data => setTopSellings(data))
            .catch(error => console.log('error fetching data:', error))
    },[])
    return (
        <div>
            <h2 className="text-center text-3xl lg:text-5xl font-[IntegralCF-Bold]">TOP SELLING</h2>
            <Carousel className="overflow-hidden mt-14">
                <CarouselContent>
                    {topSellings.map((product, index) => (
                        <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
                            <Product product={product} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <div className="flex justify-center mt-9">
                <Button variant="outline" className=" text-center py-6 w-56 rounded-full border text-medium">
                    View All
                </Button>
            </div>
        </div>
    )
}