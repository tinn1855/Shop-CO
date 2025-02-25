import { Heading } from "@/src/components/ui/heading";

export function GridCategories() {
    return  (
        <div className="container mx-auto px-4 lg:px-5">
            <div className="bg-[#F0F0F0] py-6 lg:py-12 rounded-3xl mt-10 container mx-auto px-6 lg:px-14">
                <Heading className="lg:mt-5">
                    BROWSE BY dress STYLE
                </Heading>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-5 mt-7 lg:mt-14">
                    <div className="lg:col-span-2 w-full h-48 lg:h-72 overflow-hidden relative z-10 rounded-xl">
                        <h2 className="relative z-10 text-2xl lg:text-4xl font-bold px-9 py-6">Casual</h2>
                        <a href="/">
                            <img src="/images/casual.png" className="scale-[2.4] -left-[10%] object-cover h-full absolute" alt="casual"  />
                        </a>
                    </div>
                    <div className="lg:col-span-3 w-full h-48 lg:h-72 overflow-hidden relative z-10 rounded-xl bg-white">
                        <h2 className="relative z-10 text-2xl lg:text-4xl font-bold px-9 py-6">Formal</h2>
                        <a href="/" className="w-full ">
                            <img src="/images/formal.png" className="scale-[2.1] -right-[60%] lg:-right-[50%] object-contain absolute" alt="formal"  />
                        </a>
                        
                    </div>
                    <div className="lg:col-span-3 w-full h-48 lg:h-72 overflow-hidden relative z-10 rounded-xl bg-white">
                        <h2 className="relative z-10 text-2xl lg:text-4xl font-bold px-9 py-6">Party</h2>
                        <a href="/" className="">
                            <img src="/images/party.png" className="scale-[1.2] -top-[50%] -right-[10%] object-cover absolute" alt="formal"  />
                        </a>
                    </div>
                    <div className="lg:col-span-2 w-full h-48 lg:h-72 bg-white overflow-hidden relative z-10 rounded-xl">
                        <h2 className="relative z-10 text-2xl lg:text-4xl font-bold px-9 py-6">Casual</h2>
                        <a href="/" className="w-full h-full">
                            <img src="/images/gym.png" className="object-contain scale-[2.7] -right-[20%]  w-full h-full absolute" alt="casual"  />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}