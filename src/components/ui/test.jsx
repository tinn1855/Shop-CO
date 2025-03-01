import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";

export function Test() {
    return (
        <div className="container mx-auto px-5">
            <Carousel>
                <div className="flex justify-between">
                    <h3>OUR HAPPY CUSTOMERS</h3>
                    <div className="">
                        <CarouselPrevious className="mr-4" />
                        <CarouselNext />
                    </div>
                </div>
                <CarouselContent >
                    <CarouselItem >Feedback 1</CarouselItem>
                    <CarouselItem >Feedback 2</CarouselItem>
                    <CarouselItem >Feedback 3</CarouselItem>
                    <CarouselItem >Feedback 4</CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
    )
}