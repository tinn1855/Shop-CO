import { ChevronRight } from "lucide-react";
import { SlidersHorizontal } from "lucide-react";

export function SidebarFilter() {
    const categories = [
        "T-Shirt",
        "Short",
        "Shirt",
        "Hoodie",
        "Jean",
    ]
    return (
        <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-xl">Filters</h3>
                <SlidersHorizontal className="w-5" />
            </div>
            <div className="border-b-2 border-gray-300"></div>
            {categories.map((category,index) => (
                <div key={index} className="flex justify-between">
                    <h3 >{category}</h3>
                    <a href="/">
                        <ChevronRight />
                    </a>
                </div>
            ))}
        </div>
    )
}