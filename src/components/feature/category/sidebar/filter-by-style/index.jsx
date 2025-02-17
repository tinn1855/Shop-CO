import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/src/components/ui/collapsible";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "@/src/components/ui/sidebar";
import { ChevronDown } from "lucide-react";
import { ChevronRight } from "lucide-react";


export function FilterByStyle() {
    const dressStyle = [
        "Casual",
        "Formal",
        "Party",
        "Gym"
    ]
    return (
        <div>
            <div className="border border-gray-300 mb-5"></div>
            
            <Collapsible defaultOpen className="group/collapsible">
                <SidebarGroup>
                    <SidebarGroupLabel asChild>
                        <CollapsibleTrigger>
                        <div className="w-full flex justify-between items-center">
                            <h3 className="font-bold text-xl text-black">Dress Style</h3>
                            <ChevronDown className=" text-black  transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </div>
                        </CollapsibleTrigger>
                    </SidebarGroupLabel>
                    <CollapsibleContent>
                        <SidebarGroupContent />
                        <div className="flex flex-col space-y-4 mt-3">
                            {dressStyle.map((dressStyleItem, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <h3 key={index}>{dressStyleItem}</h3>
                                    <ChevronRight />
                                </div>
                            ))}
                        </div>
                    </CollapsibleContent>
                </SidebarGroup>
            </Collapsible>   
        </div>
    )
}