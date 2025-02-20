import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";

export function Test() {
    return(
        <div className="container mx-auto px-5">

        <Carousel>
            <CarouselContent>
                <CarouselItem className="basis-1/3">1</CarouselItem>
                <CarouselItem className="basis-1/3">2</CarouselItem>
                <CarouselItem className="basis-1/3">3</CarouselItem>
                <CarouselItem className="basis-1/3">4</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>



        </div>
    )
}