import { FeedBack } from "../../../molecules/feedback";
import { Heading } from "@/src/components/ui/heading";
import { Carousel, CarouselNext, CarouselPrevious } from "@/src/components/ui/carousel";

export function HomeFeedback() {
    
    return (
        <div className="container mx-auto px-4 lg:px-5 mt-10 lg:mb-20">
            <Carousel>
                <div className="flex justify-between items-end">
                    <div>
                        <Heading className="text-left">OUR HAPPY CUSTOMERS</Heading>
                    </div>
                    <div className="flex items-end space-x-5">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </div>
                <FeedBack/>
            </Carousel>
        </div>
    );
    
}