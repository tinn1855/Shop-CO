import { ChevronRight } from "lucide-react";
import ProductDetail from "../../feature/product-detail";
import ProductDetailTabs from "../../molecules/tab";
import { AlsoLike } from "../../feature/product-detail/also-like";


export function PageProductDetail() {
    return (
        <div className="container mx-auto px-5">
            <div className="border-b mb-6"></div>
            <div className="mb-9 flex">
                Home <ChevronRight strokeWidth={0.9} /> Shop <ChevronRight strokeWidth={0.9} /> Men <ChevronRight strokeWidth={0.9} /> T-shirt
            </div>
            <ProductDetail/>
            <ProductDetailTabs/>
            <AlsoLike/>
        </div>
    )
}