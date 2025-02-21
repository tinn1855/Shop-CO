import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export function CategoryProducts({ product }) {
    return (
        <div className="col-span-1 lg:space-y-1">
            <Link to={`/product/${product.id}`} className="bg-[#F0EEED] aspect-square flex items-center justify-center rounded-xl">
                <img src={product.image} className="w-full h-full object-contain" alt={product.title} />
            </Link>
            <h3 className="font-bold lg:text-xl line-clamp-1 lg:line-clamp-2 overflow-hidden text-ellipsis lg:h-14 pt-2.5 lg:pt-0">{product.title}</h3>
            <div className="flex space-x-3 items-center">
                <div className="flex lg:space-x-1 w-24 lg:w-auto">
                    <Star className="fill-[#FFC633]" stroke={1.0} />
                    <Star className="fill-[#FFC633]" stroke={1.0} />
                    <Star className="fill-[#FFC633]" stroke={1.0} />
                    <Star className="fill-[#FFC633]" stroke={1.0} />
                    <Star className="fill-[#FFC633]" stroke={1.0} />
                </div>
                <span className="text-xs lg:text-base">{product.rating.rate}/5</span>
            </div>
            <div className="flex gap-1 items-center">
                <p className="font-bold text-xl lg:text-2xl">${product.price}</p>
                <del className="font-bold text-xl lg:text-2xl text-gray-500">${product.price}</del>
                <p className="text-red-500  px-2 py-1 rounded-full text-[10px] bg-[#f0f0f0]">-20%</p>
            </div>
        </div>
    );
}
