import { Product } from "@/src/components/molecules/product"
import { Carousel, CarouselContent, CarouselItem } from "@/src/components/ui/carousel"
import { useEffect } from "react"
import { useState } from "react"

export function AlsoLike() {
    const [alsoLike, setAlsoLike] = useState([])

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(res => res.json())
            .then(data => setAlsoLike(data))
            .catch(error => console.log("Error fetching data: ", error))
    },[])

    return (
        <div className="">
            <h2 className="font-[IntegralCF-Bold] text-[32px] leading-tight lg:text-5xl text-center my-10 lg:my-14">
                YOU MIGHT ALSO LIKE
            </h2>
            <div className="flex gap-4 lg:gap-5 mb-12 lg:mb-20 overflow-hidden">
                <Carousel>
                    <CarouselContent>
                        {alsoLike.map((product, index) => (
                            <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
                                <Product product={product}  />
                            </CarouselItem>
                        )).slice(0,4)}
                    </CarouselContent>
                </Carousel>     
            </div>
        </div>
    )
}