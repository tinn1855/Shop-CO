export function HomeSlider() {
    return  <div className="bg-[#F2F0F1] bg-[url(/images/banner.png)] bg-no-repeat bg-center py-24">
                <div className="container mx-auto px-5 grid grid-cols-2 gap-24">
                    <div className="col-span-1">
                        <h1 className="text-6xl font-[IntegralCF-Bold]">
                            FIND CLOTHES THAT MATCHES YOUR STYLE
                        </h1>
                        <p className="mt-5 text-gray-500">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </p>
                        <button className="bg-black text-white px-20 py-4 rounded-full mt-5">Shop now</button>
                        <div className="flex justify-between mt-14">
                            <div className="">
                                <h1 className="font-bold text-4xl">200+</h1>
                                <h1>International Brands</h1>
                            </div>
                            <div className="border"></div>
                            <div className="">
                                <h1 className="font-bold text-4xl">2.000+</h1>
                                <h1>High-Quality Products</h1>
                            </div>
                            <div className="border"></div>
                            <div className="">
                                <h1 className="font-bold text-4xl">30.000+</h1>
                                <h1>Happy Customers</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
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