export function GridCategories() {
    return  (
        <div className="container mx-auto px-5">
            <div className="bg-[#F0F0F0] py-12 rounded-3xl mt-10 container mx-auto px-14">
                <h2 className="text-center text-5xl font-[IntegralCF-Bold] mt-5">
                    BROWSE BY dress STYLE
                </h2>
                <div className="flex justify-center items-center space-x-5 mt-14">
                    <a href="/" className="">
                        <img src="/images/casual.png" alt="casual"  />
                    </a>
                    <a href="/" className="">
                        <img src="/images/formal.png" alt="formal"  />
                    </a>
                </div>
                <div className="flex justify-center space-x-5 mt-5">
                    <a href="/" className="">
                        <img src="/images/party.png" alt="party"  />
                    </a>
                    <a href="/" className="">
                        <img src="/images/gym.png" alt="gym"  />
                    </a>
                </div>
            </div>
        </div>
    )
}