import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export function Product({product}) {
    return  (
        <div className="space-y-1 lg:space-y-2">
            <Link to={`/product/${product.id}`} className="bg-[#F0EEED] aspect-square lg:mb-4 flex items-center justify-center rounded-xl">
                <img src={product.category.image} className="object-contain h-full" alt={product.title} />
            </Link>
            <h3 className="font-bold lg:text-xl line-clamp-1 lg:line-clamp-2 overflow-hidden text-ellipsis lg:h-14">{product.title}</h3>
            <div className="flex lg:space-x-3 items-center">
                <div className="flex space-x-0.5 lg:space-x-1">
                    <Star className="fill-[#FFC633] w-4 lg:w-auto" stroke={1.0} />
                    <Star className="fill-[#FFC633] w-4 lg:w-auto" stroke={1.0} />
                    <Star className="fill-[#FFC633] w-4 lg:w-auto" stroke={1.0} />
                    <Star className="fill-[#FFC633] w-4 lg:w-auto" stroke={1.0} />
                    <Star className="fill-[#FFC633] w-4 lg:w-auto" stroke={1.0} />
                </div>
                <span className="text-xs lg:text-base">4.5/5</span>
            </div>
            <p className="font-bold text-xl lg:text-2xl">${product.price}</p>
        </div>
    )
}