import { useEffect } from "react"
import { useState } from "react"
import { Product } from "../../../molecules/product"
import { Button } from "@/src/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/src/components/ui/carousel"

export function HomeNewArrival() {
    const [newArrivals, setNewArrivals] = useState([])
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(data => setNewArrivals(data))
            .catch(error => console.log('error fetching data:', error))
    },[])
    return (
        <div className="">
            <h2 className="font-[IntegralCF-Bold] text-3xl lg:text-5xl text-center my-8 lg:my-14">
                NEW ARRIVALS
            </h2>
            <Carousel>
                <CarouselContent>
                    {newArrivals.map((product, index) => (
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