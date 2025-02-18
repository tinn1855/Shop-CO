import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export function Product({product}) {
    return  (
        <div className="w-1/4 space-y-1">
            <Link to={`/product/${product.id}`} className="bg-[#F0EEED] aspect-square flex items-center justify-center rounded-xl">
                <img src={product.image} className="object-contain h-full" alt={product.title} />
            </Link>
            <h3 className="font-bold text-xl line-clamp-2 overflow-hidden text-ellipsis h-14">{product.title}</h3>
            <div className="flex space-x-3 items-center">
                <div className="flex space-x-1">
                    <Star className="fill-[#FFC633]" stroke={1.0} />
                    <Star className="fill-[#FFC633]" stroke={1.0} />
                    <Star className="fill-[#FFC633]" stroke={1.0} />
                    <Star className="fill-[#FFC633]" stroke={1.0} />
                    <Star className="fill-[#FFC633]" stroke={1.0} />
                </div>
                <span>{product.rating.rate}/5</span>
            </div>
            <p className="font-bold text-2xl">${product.price}</p>
        </div>
    )
}