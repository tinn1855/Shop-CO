import { Button } from "@/src/components/ui/button";
import { Description } from "@/src/components/ui/description";
import { HeadingH3 } from "@/src/components/ui/heading-h3";

export function HomeSlider() {

    return  <div className="bg-[#F2F0F1]">
                <div className="container mx-auto px-4 lg:px-5 grid items-center grid-cols-1 lg:grid-cols-2 lg:gap-20">
                    <div className="col-span-1 mt-10 lg:mt-0">
                        <h1 className="text-4xl lg:text-[64px] leading-none font-[IntegralCF-Bold]  font-bold [text-shadow:_2px_2px_0_rgb(0_0_0_/_50%)]">
                            FIND CLOTHES THAT MATCHES YOUR STYLE
                        </h1>
                        <p className="py-5 lg:py-8 text-gray-500 mr-5">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </p>
                        <Button className="lg:w-2/5 py-[26px]">Shop Now</Button>
                        <div className="flex flex-wrap justify-center lg:justify-between gap-4 mt-5 lg:mt-12">
                             <div>
                                <HeadingH3 className="">200+</HeadingH3>
                                <Description>International Brands</Description>
                            </div>
                            <div className="border border-gray-300"></div>
                            <div>
                                <HeadingH3>2.000+</HeadingH3>
                                <Description>High-Quality Products</Description>
                            </div>
                            <div className="hidden lg:block lg:border border-gray-300"></div>
                            <div>
                                <HeadingH3>30.000+</HeadingH3>
                                <Description>Happy Customers</Description>
                            </div>
                        </div>
                    </div>
                    <div className="lg:block col-span-1 h-full overflow-hidden ">
                        <img src="/images/model.png" alt="model" className="relative -bottom-[10%]" />
                    </div>
                </div>
            </div> 
}