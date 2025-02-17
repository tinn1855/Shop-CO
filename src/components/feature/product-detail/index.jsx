import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { Button } from "../../ui/button";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const sizes = [
    "Small",
    "Medium",
    "Large",
    "X-Large"
   ]
   const colors = [
    { id: 1, name: "green", color: "bg-[#00C12B] border-[#009A22]" },
    { id: 2, name: "red", color: "bg-[#F50606] border-[#C40505]" },
    { id: 3, name: "yellow", color: "bg-[#F5DD06] border-[#C4B105]" },
    { id: 4, name: "orange", color: "bg-[#F57906] border-[#C76205]" },
    { id: 5, name: "blue", color: "bg-[#06CAF5] border-[#05B1D6]" },
   ]
    const [selectedSize, setSelectedSize] = useState([])

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  // Fake thumbnails array (since the API provides only one image per product)
  const thumbnails = [product.image, product.image, product.image];

  return (
    <div className="container mx-auto flex gap-8">
      <div className="w-1/2 flex gap-4">
        {/* Thumbnail Images */}
        <div className="flex flex-col gap-4 ">
            {thumbnails.map((thumb, index) => (
            <button
                key={index}
                className={cn(
                "w-32 h-32 border rounded-xl overflow-hidden flex items-center justify-center bg-[#F0F0F0]",
                selectedImage === index ? "border-black" : "border-gray-200"
                )}
                onClick={() => setSelectedImage(index)}
            >
                <img
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className="object-contain w-full h-full"
                />
            </button>
            ))}
        </div>
        <div className="object-contain bg-[#F0F0F0] rounded-3xl">
            <img
                src={thumbnails[selectedImage]}
                alt={product.title}
                className="object-contain w-full h-full"
            />
        </div>
      </div>
      <div className="w-1/2 flex flex-col space-y-2">
            <h2 className="text-5xl font-bold font-[IntegralCF-Bold]">
                {product.title}
            </h2>
            <span>{product.rating.rate}/5</span>
            <div className="flex gap-3 items-center">
                <h3 className="text-[32px] font-bold">${product.price}</h3>
                <del className="text-[32px] font-bold text-gray-500">${product.price}</del>
                <h3 className="text-red-500 bg-red-200 px-4 py-1.5 rounded-full">-40%</h3>
            </div>
            <p>
                {product.description}
            </p>
            <div className="border-b border-gray-300"></div>
            <div className="" >
                <h3>Select Color</h3>
                <div className="flex gap-4">
                    {colors.map((color, index) => (
                        <button 
                        key={index}
                        className={`${color.color} p-5 border rounded-full`}>
                        </button>
                    ))}
                </div>
            </div>
            <div className="border-b border-gray-300"></div>
            <div className="">
                <h3 className="">Choose Size</h3>
                <div className="flex gap-2">
                {sizes.map((size) => (
                    <button
                    key={size}
                    className={cn(
                        "py-2 px-4 border rounded-full",
                        selectedSize === size ? "bg-black text-white" : "bg-white text-black border-gray-200"
                    )}
                    onClick={() => setSelectedSize(size)}
                    >
                    {size}
                    </button>
                ))}
                </div>
            </div>
            <div className="border-b border-gray-300"></div>
            <div className="flex justify-between">
                <div className="w-1/3 bg-gray-500">
                    <button>-</button>
                    <input type="text" value={1} />
                    <button>+</button>
                </div>
                <Button className="rounded-full w-2/3 py-6">Add to cart</Button>
            </div>
      </div>
    </div>
  );
}
