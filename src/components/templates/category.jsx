import { Outlet } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Sidebar } from "../feature/category/sidebar";
// import { Sidebar } from "../feature/category/sidebar";

export function CategoryTemplate() {
    return (
        <div className="container mx-auto px-5">
            <div className="border-t border-gray-300"></div>
            <div className="flex space-x-1 py-5">
                <a href="/">Home</a>
                <ChevronRight />
                <a href="/">Casual</a>
            </div>
            <div className="grid grid-cols-4 gap-5">
                <div className="col-span-1">
                    <Sidebar/>
                </div>
                <div className="col-span-3">
                    <Outlet />
                </div>
                
            </div>
        </div>
    )
}