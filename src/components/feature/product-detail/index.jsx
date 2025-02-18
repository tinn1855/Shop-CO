import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { Button } from "../../ui/button";
import { Plus, Minus, Check } from "lucide-react";

export default function ProductDetail() {
    const sizes = ["Small", "Medium", "Large", "X-Large"]
    const colors = [
        { id: 1, name: "green", color: "bg-[#00C12B] border-[#009A22]" },
        { id: 2, name: "red", color: "bg-[#F50606] border-[#C40505]" },
        { id: 3, name: "yellow", color: "bg-[#F5DD06] border-[#C4B105]" },
        { id: 4, name: "orange", color: "bg-[#F57906] border-[#C76205]" },
        { id: 5, name: "blue", color: "bg-[#06CAF5] border-[#05B1D6]" },
    ]

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null)
    const [selectedColor, setSelectedColor] = useState(null)
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => {
        if (quantity > 1)
            setQuantity(quantity - 1);
        
        };
    const handleColorClick = (id) => {
        setSelectedColor((prev) => (prev === id ? null : id))
    }

    const handleSizeClick = (size) => {
        setSelectedSize((prev) => (prev === size ? null: size))
    }
  
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
    <div className="container mx-auto flex gap-10">
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
                onChange={() => setSelectedImage(index)}
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
            <div className="border-b border-gray-300 pt-4"></div>
            <div className="" >
                <h3 className="my-4">Select Color</h3>
                <div className="flex gap-4">
                    {colors.map((color) => (
                        <button 
                        key={color.id}
                        className={`w-10 h-10 border rounded-full flex items-center justify-center ${color.color}`}
                        onClick={() => handleColorClick(color.id)}
                        >
                            {selectedColor === color.id && <Check className="text-white" />}
                        </button>
                    ))}
                </div>
            </div>
            <div className="border-b border-gray-300 pt-4"></div>
            <div className="">
                <h3 className="my-4">Choose Size</h3>
                <div className="flex gap-2">
                {sizes.map((size) => (
                    <button
                    key={size}
                    className={cn(
                        "py-2 px-4 border rounded-full",
                        selectedSize === size ? "bg-black text-white" : "bg-white text-black border-gray-200"
                    )}
                    onClick={() => handleSizeClick(size)}
                    >
                    {size}
                    </button>
                ))}
                </div>
            </div>
            <div className="border-b border-gray-300 pt-4"></div>
            <div className="flex justify-between gap-2 pt-4">
                <div className="w-[30%] bg-[#F0F0F0] rounded-full flex px-5 justify-between">
                    <button onClick={handleDecrease}>
                        <Minus/>
                    </button>
                    <input type="text" value={quantity} className="outline-none w-1/4 bg-[#F0f0f0] text-center font-semibold" />
                    <button onClick={handleIncrease}>
                        <Plus />
                    </button>
                </div>
                <Button className="rounded-full w-2/3 py-6">Add to cart</Button>
            </div>
      </div>
    </div>
  );
}
