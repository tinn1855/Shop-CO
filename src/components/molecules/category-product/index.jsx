import { Star } from "lucide-react";

export function CategoryProducts({ product }) {
    return (
        <div className="col-span-1 space-y-1">
            <div className="bg-[#F0EEED] aspect-square flex items-center justify-center rounded-xl">
                <img src={product.image} className="w-full h-full object-contain" alt={product.title} />
            </div>
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
    );
}
