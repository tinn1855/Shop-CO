import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/src/components/ui/collapsible";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "@/src/components/ui/sidebar";
import * as Slider from "@radix-ui/react-slider";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FilterByPrice() {
    const [priceRange, setPriceRange] = useState([50, 200]); // Giá trị min-max

    return (
        <div>
            <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroup>
                <div className="border border-gray-300 mb-5"></div>
                <SidebarGroupLabel asChild>
                    <CollapsibleTrigger>
                    <div className="w-full flex justify-between items-center">
                        <h3 className="font-bold text-xl text-black">Price</h3>
                        <ChevronDown className=" text-black  transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </div>
                    </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                    <SidebarGroupContent />
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
                </CollapsibleContent>
                </SidebarGroup>
            </Collapsible>
        </div>
    );
}
