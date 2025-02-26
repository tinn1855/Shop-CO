import { CategoryProducts } from "@/src/components/feature/category/category-products";
import { Sidebar } from "@/src/components/feature/category/sidebar";
import { UseQuerySingleCategory } from "@/src/hooks/queries/use-query-single-category";
import { ChevronRight } from "lucide-react";
import { useParams } from "react-router-dom";

export function PageCategory() {
    const params = useParams()

    const {data: singleCategory} = UseQuerySingleCategory(params.id)

    return (
        <div className="container mx-auto px-4 lg:px-5">
            <div className="border-t border-gray-300"></div>
            <div className="flex space-x-1 py-5">
                <a href="/">Home</a>
                <ChevronRight />
                <a href="/">{singleCategory.name}</a>
            </div>
            <div className="lg:grid lg:grid-cols-4 lg:gap-5">
                <div className="lg:col-span-1">
                    <Sidebar/>
                </div>
                <div className="col-span-3">
                    <CategoryProducts categoryId={params.id} />
                </div>
                
            </div>
        </div>
    )
}