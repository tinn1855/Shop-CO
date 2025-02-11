export function HomeBrands() {
    const brands = [
            "versace",
            "zara",
            "gucci",
            "prada",
            "calvin-klein",
        ]
        
    return  <div className="bg-black py-8">
                <div className="container mx-auto px-5 flex justify-between text-white">
                {brands.map((brand, index) => (
                        <img key={index} src={`/images/brands/${brand}.png`} alt={`${brand} logo`} />
                ))}
                </div>
            </div>
}