export function GridCategories() {
    return  (
        <div className="container mx-auto px-5">
            <div className="bg-[#F0F0F0] py-12 rounded-3xl mt-10 container mx-auto px-14">
                <h2 className="text-center text-5xl font-[IntegralCF-Bold] mt-5">
                    BROWSE BY dress STYLE
                </h2>
                <div className="grid grid-cols-5 gap-5 mt-14">
                    <div className="col-span-2 w-full h-72 overflow-hidden relative z-10 rounded-xl">
                        <h2 className="relative z-10 text-4xl font-bold px-9 py-6">Casual</h2>
                        <a href="/" className="w-full h-full">
                            <img src="/images/casual.png" className="scale-[2.4] -left-[10%] object-cover w-full h-full absolute" alt="casual"  />
                        </a>
                    </div>
                    <div className="col-span-3 w-full h-72 overflow-hidden relative z-10 rounded-xl">
                        <h2 className="relative z-10 text-4xl font-bold px-9 py-6">Formal</h2>
                        <a href="/" className="">
                            <img src="/images/formal.png" className="scale-[2.1] -right-[50%] object-contain absolute" alt="formal"  />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-5 mt-5">
                    <div className="col-span-3 w-full h-72 overflow-hidden relative z-10 rounded-xl">
                        <h2 className="relative z-10 text-4xl font-bold px-9 py-6">Formal</h2>
                        <a href="/" className="">
                            <img src="/images/party.png" className="scale-[1.2] -top-[50%] -right-[10%] object-cover absolute" alt="formal"  />
                        </a>
                    </div>
                    <div className="col-span-2 w-full h-72 bg-white overflow-hidden relative z-10 rounded-xl">
                        <h2 className="relative z-10 text-4xl font-bold px-9 py-6">Casual</h2>
                        <a href="/" className="w-full h-full">
                            <img src="/images/gym.png" className="object-contain scale-[2.7] -right-[20%]  w-full h-full absolute" alt="casual"  />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}