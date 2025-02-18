
import { Mail } from "lucide-react";
import { PaymentMothod } from "../../molecules/payment-method";
import { Social } from "../../molecules/social";

export function Footer() {
    return (
        <div>
            <div className="container mx-auto px-4 lg:px-5 mt-10">
                <div className=" bg-black p-6 lg:py-12 lg:px-14 rounded-2xl lg:flex items-center justify-between relative z-10">
                    <h2 className="font-bold text-white font-[IntegralCF-Bold] text-3xl lg:text-4xl lg:w-1/2">
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </h2>
                    <div className="lg:w-4/12 mt-8">
                        <div className="flex px-6 space-x-1 bg-white py-3 rounded-full">
                            <Mail className="text-gray-500" />
                            <input className="w-full outline-none" type="text" placeholder="Enter your email address" />
                        </div>
                        <button className="px-4 space-x-1 bg-white py-3 w-full rounded-full text-black mt-2 text-center">
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[#F0F0F0] py-16 pt-24 relative -mt-24">
                <div className="container mx-auto px-4 lg:px-5 mt-10 lg:flex gap-4 justify-between">
                    <div className="lg:w-1/5 flex flex-col gap-2 justify-between">
                        <h3 className="font-[IntegralCF-Bold] text-3xl tracking-widest">SHOP.CO</h3>
                        <p className="text-sm">
                            We have clothes that suits your style and which you’re proud to wear. From women to men.
                        </p>
                        <Social/>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mt-5 lg:flex lg:w-4/5 justify-between">
                        <div className="flex flex-col text-sm lg:text-base space-y-3">
                            <h3 className="font-medium text-base tracking-widest">COMPANY</h3>
                            <a href="/">About</a>
                            <a href="/">Features</a>
                            <a href="/">Works</a>
                            <a href="/">Career</a>
                        </div>
                        <div className="flex flex-col space-y-3 text-sm lg:text-base ">
                            <h3 className="font-medium text-base tracking-widest">HELP</h3>
                            <a href="/">Customer Support</a>
                            <a href="/">Delivery Details</a>
                            <a href="/">Terms & Conditions</a>
                            <a href="/">Privacy Policy</a>
                        </div>
                        <div className="flex flex-col text-sm lg:text-base space-y-3">
                            <h3 className="font-medium text-base tracking-widest">FAQ</h3>
                            <a href="/">Account</a>
                            <a href="/">Manage Deliveries</a>
                            <a href="/">Orders</a>
                            <a href="/">Payments</a>
                        </div>
                        <div className="flex flex-col text-sm lg:text-base space-y-3">
                            <h3 className="font-medium text-base tracking-widest">RESOURCE</h3>
                            <a href="/">Free eBooks</a>
                            <a href="/">Development Tutorial</a>
                            <a href="/">How to - Blog</a>
                            <a href="/">Youtube Playlist</a>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 lg:px-5 mt-8">
                    <div className="border-b-2 my-5"></div>
                </div>
                <div className="container mx-auto px-4 lg:px-5 lg:flex items-center justify-between">
                    <p className="text-center">Shop.co © 2000-2023, All Rights Reserved</p>
                    <PaymentMothod/>
                </div>
            </div>
        </div>
    )
}