import { SidebarFilter } from "./filter";
import { FilterByColor } from "./filter-by-color";
import { FilterByPrice } from "./filter-by-price";
import { FilterBySize } from "./filter-by-size";
import { FilterByStyle } from "./filter-by-style";

export function Sidebar() {
    return (
        <div className="col-span-1 border border-gray-300 rounded-xl px-5 py-4 space-y-8">
            <SidebarFilter/>
            <FilterByPrice/>
            <FilterByColor/>
            <FilterBySize/>
            <FilterByStyle/>
        </div>
    )
}