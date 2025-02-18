import { Star } from "lucide-react"
import { Button } from "../../ui/button"

export function FeedBackProductDetail() {
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
        <div>
            <div className="grid grid-cols-2 gap-5 mt-10">
            {feedbacks.map((feedback, index) => (
                    <div key={index} className="col-span-1 border-2 border-gray-300 rounded-3xl px-8 py-7 flex flex-col space-y-3">
                        <div className="flex space-x-1">
                            <Star className="text-[#FFC633]" />
                            <Star className="text-[#FFC633]" />
                            <Star className="text-[#FFC633]" />
                            <Star className="text-[#FFC633]" />
                            <Star className="text-[#FFC633]" />
                        </div>
                        <div className="flex items-center">
                            <h3 className="text-xl font-bold">{feedback.name}</h3>
                            <img src="/images/check.png" alt="" />
                        </div>
                        <p className="opacity-60">
                            "{feedback.description}"
                        </p>
                        <span className="font-medium opacity-60 pt-3">Posted on {feedback.dayPost}</span>
                    </div>
                ))}
            </div>
            <div className="flex justify-center font-medium">
                <Button variant="outline" className="rounded-full mt-9 py-6 px-12 ">Load More Reviews</Button>
            </div>
        </div>
    )
}