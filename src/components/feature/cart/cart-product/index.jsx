import { Minus, Trash2, Plus } from "lucide-react"
import { useState } from "react"
import useCartStore from "../cart-store"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/src/components/ui/alert-dialog";

export function CartProduct() {
    const {cart, removeFromCart} = useCartStore();
    const [quantities, setQuantities] = useState(() => {
        const initialQuantities = {};
        cart.forEach((item) => {
            initialQuantities[item.id] = item.quantity;
        });
        return initialQuantities;
    })

    const handleIncrease = (id) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: prev[id] + 1,
        }))
    }
    
    const handleDecrease = (id) => {
        if (quantities[id] > 1) {
            setQuantities((prev) => ({
                ...prev,
                [id]: prev[id] - 1,
            }));
        }
    }
    
    const handleRemove = (id) => {
        removeFromCart(id);
    }
    
    const handleQuantityChange = (id, value) => {
        const newValue = parseInt(value, 10);
        if (!isNaN(newValue) && newValue >= 1) {
            setQuantities((prev) => ({
                ...prev,
                [id]: newValue,
            }));
        }
    };

    return (
        <div>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="flex gap-2 lg:gap-4 justify-between mb-5">
                        <div className="aspect-square bg-[#F0f0f0] w-1/4 lg:w-1/5 rounded-xl">
                            <img src={item.category.image} className="w-32 object-contain h-full" alt={item.title} />
                        </div>
                        <div className="flex flex-col justify-between w-3/4 lg:w-4/5">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="sm:text-xl font-bold">{item.title}</h3>
                                    <h3 className="text-xs lg:text-base">Size: <span className="opacity-60">{item.size}</span></h3>
                                    <h3 className="text-xs lg:text-base">Color: <span className="opacity-60">{item.color}</span></h3>
                                </div>
                                <AlertDialog>
                                    <AlertDialogTrigger>
                                        <Trash2 className="w-5 h-5 lg:w-6 text-red-500" />
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. This will permanently delete your account
                                                and remove your data from our servers.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => handleRemove(item.id)}>Yes</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                            <div className="flex justify-between items-end">
                                <h3 className="font-bold text-xl lg:text-2xl">${item.price * quantities[item.id]}</h3>
                                <div className="w-28 lg:w-32 bg-[#F0F0F0] rounded-full flex px-2 py-1 lg:px-5 lg:py-2.5 justify-between">
                                    <button onClick={() => handleDecrease(item.id)}>
                                        <Minus />
                                    </button>
                                    <input 
                                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                        type="text" 
                                        value={quantities[item.id]} 
                                        className="outline-none font-semibold bg-[#F0F0F0] w-6 text-center" />
                                    <button onClick={() => handleIncrease(item.id)}>
                                        <Plus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}