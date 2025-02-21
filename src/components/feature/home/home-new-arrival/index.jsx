import { useEffect } from "react"
import { useState } from "react"
import { Product } from "../../../molecules/product"
import { Button } from "@/src/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/src/components/ui/carousel"

export function HomeNewArrival() {
    const [newArrivals, setNewArrivals] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setNewArrivals(data.slice(8,14)))
            .catch(error => console.log('error fetching data:', error))
    },[])
    return (
        <div>
            <h2 className="font-[IntegralCF-Bold] text-3xl lg:text-5xl text-center my-8 lg:my-14">
                NEW ARRIVALS
            </h2>
            <div className="flex  gap-4 lg:gap-5 overflow-hidden">
                <Carousel>
                    <CarouselContent>
                        {newArrivals.map((product, index) => (
                            <CarouselItem className="basis-1/4">
                                <Product product={product} key={index} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <div className="flex justify-center mt-9">
                <Button variant="outline" className=" text-center py-6 w-56 rounded-full border text-medium">
                    View All
                </Button>
            </div>
        </div>
    )
}