import { ChevronRight } from "lucide-react";
import { OrderSummary } from "../../feature/cart/order-summary";
import { CartProduct } from "../../feature/cart/cart-product";

export function PageCart() {
    return (
        <div className="container mx-auto px-5">
            <div className="border-b border-gray-300"></div>
            <div className="flex items-center mt-6">
                <h3>Home</h3>   
                <ChevronRight strokeWidth={0.75} />
                <h3>Cart</h3>
            </div>
            <h3 className="text-3xl lg:text-[40px] font-[IntegralCF-Bold] mt-5">YOUR CART</h3>
            <div className="flex-col lg:flex-row flex gap-5 mt-6">
                <div className="w-full lg:w-7/12 border p-3.5 lg:px-6 lg:py-5 rounded-2xl lg:rounded-3xl">
                    <CartProduct />
                </div>
                <div className="w-full lg:w-5/12 border p-3.5 lg:px-6 lg:py-5 rounded-2xl lg:rounded-3xl">
                    <OrderSummary />
                </div>
            </div>
        </div>
    )
}