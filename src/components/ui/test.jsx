import { SidebarFilter } from "../feature/category/sidebar/filter";
import { FilterByColor } from "../feature/category/sidebar/filter-by-color";
import { FilterByPrice } from "../feature/category/sidebar/filter-by-price";
import { FilterBySize } from "../feature/category/sidebar/filter-by-size";
import { FilterByStyle } from "../feature/category/sidebar/filter-by-style";
import { Button } from "./button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./sheet";

export function Test() {
    return(
        <div className="container mx-auto px-5">

        <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent side="top">
                <SheetHeader>
                    <SheetTitle>Filter</SheetTitle>
                        <SheetDescription>
                        <div className="border border-gray-300 rounded-xl px-6 py-5 space-y-8 overflow-y-hidden">
                            <SidebarFilter/>
                            <FilterByPrice/>
                            <FilterByColor/>
                            <FilterBySize/>
                            <FilterByStyle/>
                            <Button className="w-full rounded-full py-6">Apply Filer</Button>
                        </div>
                        </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

        </div>
    )
}