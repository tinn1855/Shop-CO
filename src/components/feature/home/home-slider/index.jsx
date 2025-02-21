import { Button } from "@/src/components/ui/button";

export function HomeSlider() {
    return  <div className="bg-[#F2F0F1] bg-[url(/images/banner.png)] bg-no-repeat bg-cover py-10 lg:py-24">
                <div className="container mx-auto px-5 lg:grid grid-cols-2 gap-24">
                    <div className="col-span-1">
                        <h1 className="text-4xl lg:text-[64px] leading-none font-[IntegralCF-Bold]  font-bold [text-shadow:_2px_2px_0_rgb(0_0_0_/_50%)]">
                            FIND CLOTHES THAT MATCHES YOUR STYLE
                        </h1>
                        <p className="py-5 lg:py-8 text-gray-500 mr-5">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </p>
                        <Button className="w-full lg:w-2/5 rounded-full py-[26px]">Shop Now</Button>
                        <div className="flex flex-wrap justify-center lg:justify-between gap-4 mt-5 lg:mt-12">
                            <div className="">
                                <h1 className="font-bold text-2xl lg:text-[40px]">200+</h1>
                                <h1 className="text-gray-600 text-xs lg:text-base">International Brands</h1>
                            </div>
                            <div className="border border-gray-300"></div>
                            <div className="">
                                <h1 className="font-bold text-2xl lg:text-[40px]">2.000+</h1>
                                <h1 className="text-gray-600 text-xs lg:text-base">High-Quality Products</h1>
                            </div>
                            <div className="hidden lg:block lg:border border-gray-300"></div>
                            <div className="">
                                <h1 className="font-bold text-2xl lg:text-[40px]">30.000+</h1>
                                <h1 className="text-gray-600 text-xs lg:text-base">Happy Customers</h1>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block col-span-1">
                        <div className="flex justify-end">
                            <img src="/images/Vector.png" alt="vector" />
                        </div>
                        <div className="flex items-center">
                            <img src="/images/Vector.png" alt="vector" className="w-16 mt-20" />
                        </div>
                    </div>
                </div>
            </div> 
}