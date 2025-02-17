import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/src/components/ui/collapsible";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "@/src/components/ui/sidebar";
import { ChevronDown } from "lucide-react";

export function FilterByColor() {
    const colors = [
        { id: 1, name: "green", color: "bg-[#00C12B] border-[#009A22]" },
        { id: 2, name: "red", color: "bg-[#F50606] border-[#C40505]" },
        { id: 3, name: "yellow", color: "bg-[#F5DD06] border-[#C4B105]" },
        { id: 4, name: "orange", color: "bg-[#F57906] border-[#C76205]" },
        { id: 5, name: "blue", color: "bg-[#06CAF5] border-[#05B1D6]" },
    ]
    return (
        <div>
            <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroup>
                <div className="border border-gray-300 mb-5"></div>
                <SidebarGroupLabel asChild>
                    <CollapsibleTrigger>
                    <div className="w-full flex justify-between items-center">
                        <h3 className="font-bold text-xl text-black">Color</h3>
                        <ChevronDown className=" text-black  transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </div>
                    </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                    <SidebarGroupContent />
                    <div className="flex justify-between mt-5">
                        {colors.map((colors, index) => (
                            <a  key={index} href="/">
                                <div className={`${colors.color} col-span-1 rounded-full border-2 w-8 h-8`}>
                                </div>
                            </a>
                        )) }
                    </div>
                    <div className="flex justify-between mt-5">
                        {colors.map((colors, index) => (
                            <div key={index} className={`${colors.color} col-span-1 rounded-full border-2 w-8 h-8`}>
                            </div>
                        )) }
                    </div>
                </CollapsibleContent>
                </SidebarGroup>
            </Collapsible>
        </div>
    )
}