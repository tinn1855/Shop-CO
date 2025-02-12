
import { ChevronRight } from "lucide-react";
import { ChevronUp } from "lucide-react";

export function FilterByStyle() {
    const dressStyle = [
        "Casual",
        "Formal",
        "Party",
        "Gym"
    ]
    return (
        <div>
            <div className="border-b-2 border-gray-300"></div>
            <div className="flex justify-between items-center mt-4">
                <h3 className="font-bold text-xl">Dress Style</h3>
                <ChevronUp />
            </div>
            <div className="flex flex-col space-y-4 mt-3">
                {dressStyle.map((dressStyleItem, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <h3 key={index}>{dressStyleItem}</h3>
                        <ChevronRight />
                    </div>
                ))}
            </div>
          
        </div>
    )
}