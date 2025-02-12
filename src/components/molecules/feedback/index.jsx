import { Star } from "lucide-react";

export function FeedBack() {
    const feedbacks = [
        {
            "id": 1,
            "name": "Sarah M.",
            "description": "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
        },
        {
            "id": 2,
            "name": "Alex K.",
            "description": "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
        },{
            "id": 1,
            "name": "James L.",
            "description": "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
        }
    ]
    return (
        <div className="flex space-x-5 mt-10">
            {feedbacks.map((feedback, index) => (
                    <div key={index} className="w-1/3 border-2 border-gray-300 rounded-3xl px-6 py-5 flex flex-col space-y-3">
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
                        <p>
                            "{feedback.description}"
                        </p>
                    </div>
                ))}
        </div>
    )
}