import { ChevronUp } from "lucide-react";
import { useState } from "react";

export function FilterBySize() {
    const size = [
        "XX-Small",
        "X-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XX-Large",
        "3X-Large",
        "4X-Large"
    ]

    const [selectedSize, setSelectedSize] = useState([])
    const handleSizeClick = (size) => {
        // Kiểm tra nếu size đã được chọn rồi thì bỏ chọn, nếu chưa chọn thì thêm vào mảng
        setSelectedSize(prevState => 
            prevState.includes(size) 
            ? prevState.filter(item => item !== size) // Xóa size khỏi mảng nếu đã chọn
            : [...prevState, size] // Thêm size vào mảng nếu chưa chọn
        );
    };

    return (
        <div>
            <div className="border-b-2"></div>
            <div className="flex justify-between items-center mt-4">
                <h3 className="font-bold text-xl">Size</h3>
                <ChevronUp />
            </div>
            <div className="flex flex-wrap mt-4">
                {size.map((sizeItem, index) => (
                    <button 
                        key={index} 
                        onClick={() => handleSizeClick(sizeItem)}
                        className={`text-sm border py-2 px-4 rounded-full mr-3 mb-3 ${selectedSize.includes(sizeItem) ? "bg-black text-white": ""}`}>
                        {sizeItem}
                    </button>
                ))}
            </div>
        </div>
    )
}