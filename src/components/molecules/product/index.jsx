import { Star } from "lucide-react";

export function Product({product}) {
    return  (
        <div className="w-1/4 space-y-1">
            <div className="bg-[#F0EEED] w-full h-full flex items-center justify-center rounded-xl">
                <img src={product.image} className="w-44 h-44" alt={product.title} />
            </div>
            <h3 className="font-bold text-xl line-clamp-2 overflow-hidden text-ellipsis h-14">{product.title}</h3>
            <div className="flex space-x-3 items-center">
                <div className="flex space-x-1">
                    <Star className="text-[#FFC633] w-5"/>
                    <Star className="text-[#FFC633] w-5"/>
                    <Star className="text-[#FFC633] w-5"/>
                    <Star className="text-[#FFC633] w-5"/>
                    <Star className="text-[#FFC633] w-5"/>   
                </div>
                <span>{product.rating.rate}/5</span>
            </div>
            <p className="font-bold text-2xl">${product.price}</p>
        </div>
    )
}