import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Tag } from "lucide-react";

export function OrderSummary() {
    return (
        <div className="flex flex-col gap-2 lg:gap-6">
            <h2 className="text-xl lg:text-2xl font-bold">Order Summary</h2>
            <div className="flex flex-col gap-2 lg:gap-5">
                <div className="flex justify-between lg:text-xl">
                    <h2>Subtotal</h2>
                    <span className="font-bold">$565</span>
                </div>
                <div className="flex justify-between lg:text-xl">
                    <h2>Discount (-20%)</h2>
                    <span className="text-[#FF3333] font-bold">-$113</span>
                </div>
                <div className="flex justify-between lg:text-xl">
                    <h2>Delivery Fee</h2>
                    <span className="font-bold">$15</span>
                </div>
                <div className="border-b"></div>
                <div className="flex justify-between lg:text-xl">
                    <h2>Total</h2>
                    <span className="font-bold text-xl lg:text-2xl">$467</span>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="bg-[#f0f0f0] flex py-3 px-4 rounded-full w-2/3 lg:w-3/4">
                    <Tag className="opacity-60"/>
                    <input type="text" className="bg-[#f0f0f0] outline-none w-full px-2 text-sm lg:text-base" placeholder="Add promo code" />
                </div>
                <Button className="w-1/3 lg:w-1/4">Apply</Button>
            </div>
            <Button className="py-6 mt-2 lg:mt-0">Go to Checkout <ArrowRight size={24} /></Button>
        </div>
    )
}