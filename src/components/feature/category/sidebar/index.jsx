import { Button } from "@/src/components/ui/button";
import { SidebarFilter } from "./filter";
import { FilterByColor } from "./filter-by-color";
import { FilterByPrice } from "./filter-by-price";
import { FilterBySize } from "./filter-by-size";
import { FilterByStyle } from "./filter-by-style";

export function Sidebar() {
    return (
        <div className="hidden lg:block col-span-1 border border-gray-300 rounded-xl px-6 py-5 space-y-8">
            <SidebarFilter/>
            <FilterByPrice/>
            <FilterByColor/>
            <FilterBySize/>
            <FilterByStyle/>
            <Button className="w-full rounded-full py-6">Apply Filer</Button>
        </div>
    )
}