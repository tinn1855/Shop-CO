import * as Slider from "@radix-ui/react-slider";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

export function FilterByPrice() {
    const [priceRange, setPriceRange] = useState([50, 200]); // Giá trị min-max

    return (
        <div>
            <div className="border-b-2 mt-5"></div>
            <div className="flex justify-between items-center mt-4">
                <h3 className="font-bold text-xl">Price</h3>
                <ChevronUp />
            </div>
            <div className="mt-4">
                <Slider.Root
                    className="relative flex items-center w-full h-1.5 bg-gray-300 rounded-lg"
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={250}
                    step={1}
                >
                    {/* Thanh trượt */}
                    <Slider.Track className="bg-[#F0F0F0] relative grow rounded-full h-1.5" />
                    <Slider.Range className="absolute bg-black h-2 rounded-full" />

                    {/* Nút kéo trái */}
                    <Slider.Thumb className="block w-5 h-5 bg-black rounded-full cursor-pointer" />
                    
                    {/* Nút kéo phải */}
                    <Slider.Thumb className="block w-5 h-5 bg-black rounded-full cursor-pointer" />
                </Slider.Root>
                {/* Hiển thị giá trị min - max */}
                <div className="flex justify-between mt-2 text-sm font-medium text-black">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>
        </div>
    );
}
