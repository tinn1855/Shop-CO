import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";

export function FeedBack() {
    const feedbacks = [
        {
            "id": 1,
            "name": "Sarah M.",
            "dayPost": "August 19, 2023",
            "description": "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        },
        {
            "id": 2,
            "name": "Alex K.",
            "dayPost": "March 12, 2023",
            "description": "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
        },
        {
            "id": 3,
            "name": "James L.",
            "dayPost": "March 23, 2023",
            "description": "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
        },
        {
            "id": 4,
            "name": "James L.",
            "dayPost": "April 03, 2023",
            "description": "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
        }
    ]
    return (
        <div className="mt-10">    
            <Carousel>
                <CarouselContent>
                    {feedbacks.map((feedback, index) => (
                        <CarouselItem className="basis-1/3">
                            <div key={index} className="border border-gray-300 rounded-3xl px-8 py-7 flex flex-col h-full space-y-3">
                                <div className="flex space-x-1">
                                    <Star className="fill-[#FFC633]" stroke={1.0} />
                                    <Star className="fill-[#FFC633]" stroke={1.0} />
                                    <Star className="fill-[#FFC633]" stroke={1.0} />
                                    <Star className="fill-[#FFC633]" stroke={1.0} />
                                    <Star className="fill-[#FFC633]" stroke={1.0} />
                                </div>
                                <div className="flex items-center">
                                    <h3 className="text-xl font-bold">{feedback.name}</h3>
                                    <img src="/images/check.png" alt="" />
                                </div>
                                <p>
                                    "{feedback.description}"
                                </p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}