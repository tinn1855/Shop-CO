import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/src/components/ui/collapsible";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "@/src/components/ui/sidebar";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FilterBySize() {
    const size = [
        "XX-Small",
        "X-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XX-Large",
        "3X-Large",
        "4X-Large"
    ]

    const [selectedSize, setSelectedSize] = useState([])
    const handleSizeClick = (size) => {
        // Kiểm tra nếu size đã được chọn rồi thì bỏ chọn, nếu chưa chọn thì thêm vào mảng
        setSelectedSize(prevState => 
            prevState.includes(size) 
            ? prevState.filter(item => item !== size) // Xóa size khỏi mảng nếu đã chọn
            : [...prevState, size] // Thêm size vào mảng nếu chưa chọn
        );
    };

    return (
        <div>
            <div className="border border-gray-300 mb-5"></div>
            <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroup>
                    <SidebarGroupLabel asChild>
                        <CollapsibleTrigger>
                        <div className="w-full flex justify-between items-center">
                            <h3 className="font-bold text-xl text-black">Size</h3>
                            <ChevronDown className=" text-black  transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </div>
                        </CollapsibleTrigger>
                    </SidebarGroupLabel>
                    <CollapsibleContent>
                        <SidebarGroupContent />
                        <div className="flex flex-wrap mt-4">
                            {size.map((sizeItem, index) => (
                                <button 
                                    key={index} 
                                    onClick={() => handleSizeClick(sizeItem)}
                                    className={`text-sm border py-2 px-4 rounded-full mr-3 mb-3 ${selectedSize.includes(sizeItem) ? "bg-black text-white": ""}`}>
                                    {sizeItem}
                                </button>
                            ))}
                        </div>
                    </CollapsibleContent>
                </SidebarGroup>
            </Collapsible>
        </div>
    )
}