export function HomeBrands() {
    const brands = [
            "versace",
            "zara",
            "gucci",
            "prada",
            "calvin-klein",
        ]
        
    return  <div className="bg-black py-8">
                <div className="container mx-auto px-5 flex justify-between items-center text-white">
                {brands.map((brand, index) => (
                        <img className="h-full" key={index} src={`/images/brands/${brand}.png`} alt={`${brand} logo`} />
                ))}
                </div>
            </div>
}