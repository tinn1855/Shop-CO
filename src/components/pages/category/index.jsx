import { CategoryProduct } from "@/src/components/feature/category/casual";
import { Sidebar } from "@/src/components/feature/category/sidebar";
import { ChevronRight } from "lucide-react";


export function PageCategory() {
    return (
        <div className="container mx-auto px-4 lg:px-5">
            <div className="border-t border-gray-300"></div>
            <div className="flex space-x-1 py-5">
                <a href="/">Home</a>
                <ChevronRight />
                <a href="/">Casual</a>
            </div>
            <div className="lg:grid lg:grid-cols-4 lg:gap-5">
                <div className="lg:col-span-1">
                    <Sidebar/>
                </div>
                <div className="col-span-3">
                    <CategoryProduct/>
                </div>
                
            </div>
        </div>
    )
}