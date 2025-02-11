export function Product({product}) {
    return  (
        <div  className="w-1/4 space-y-1">
            <div className="bg-[#F0EEED] w-full h-full flex items-center justify-center rounded-xl">
                <img src={product.image} className="w-44 h-44" alt={product.title} />
            </div>
            <h3 className="font-bold text-xl line-clamp-2 overflow-hidden text-ellipsis h-14">{product.title}</h3>
            <span>{product.rating?.rate}</span>
            <p className="font-bold text-2xl">${product.price}</p>
        </div>
    )
}