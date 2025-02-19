import { Product } from "@/src/components/molecules/product"
import { Carousel, CarouselContent, CarouselItem } from "@/src/components/ui/carousel"
import { useEffect } from "react"
import { useState } from "react"

export function AlsoLike() {
    const [alsoLike, setAlsoLike] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setAlsoLike(data))
            .catch(error => console.log("Error fetching data: ", error))
    },[])

    return (
        <div className="">
            <h2 className="font-[IntegralCF-Bold] text-5xl text-center my-14">
                YOU MIGHT ALSO LIKE
            </h2>
            <div className="flex gap-5 mb-20">
                <Carousel>
                    <CarouselContent>
                        {alsoLike.map((product, index) => (
                            <CarouselItem className="basis-1/4">
                                <Product product={product} key={index} />
                            </CarouselItem>
                        )).slice(0,4)}
                    </CarouselContent>
                </Carousel>
                
            </div>
        </div>
    )
}