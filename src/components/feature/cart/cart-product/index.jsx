import { Minus, Trash2, Plus } from "lucide-react"
import { useEffect } from "react"
import { useState } from "react"

export function CartProduct() {
    const [quantity, setQuantity] = useState(1)
    const [cartProduct, setCardProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts/5')
            .then(res => res.json())
            .then(data => setCardProduct(data))
            .catch(error => console.log('Error fetching data: ', error))
    },[])
    console.log(cartProduct)
    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => {
        if (quantity > 1)
            setQuantity(quantity - 1);
        
    };
    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value >= 1) {
          setQuantity(value);
        }
    };

    return(
        <div>
            <div className="flex gap-2 lg:gap-4 justify-between">
                <div className="aspect-square bg-[#F0f0f0] w-1/4 lg:w-1/5 rounded-xl">
                    <img src="/images/gym.png" className="w-32 object-contain h-full" alt="" />
                </div>
                <div className="flex flex-col justify-between w-3/4 lg:w-4/5">
                    <div className="flex justify-between">
                        <div>
                            <h3 className="sm:text-xl font-bold">Gradient Graphic T-shirt</h3>
                            <h3 className="text-xs lg:text-base">Size: <span className="opacity-60">Large</span></h3>
                            <h3 className="text-xs lg:text-base">Color: <span className="opacity-60">White</span></h3>
                        </div>
                        <button className="flex justify-end text-red-500 ">
                            <Trash2 className="w-5 h-5 lg:w-6" />
                        </button>
                    </div>
                    <div className="flex justify-between items-end">
                        <h3 className="font-bold text-xl lg:text-2xl">$145</h3>
                        <div className="w-28 lg:w-32 bg-[#F0F0F0] rounded-full flex px-2 py-1 lg:px-5 lg:py-2.5 justify-between">
                            <button onClick={handleDecrease}>
                                <Minus/>
                            </button>
                            <input type="text" onChange={handleQuantityChange} value={quantity} className="outline-none w-1/4 bg-[#F0f0f0] text-center font-semibold" />
                            <button onClick={handleIncrease}>
                                <Plus />
                            </button>
                        </div>
                    </div>
                </div>   
            </div>
            <div className="border-b mt-2"></div>
        </div>
    )
}