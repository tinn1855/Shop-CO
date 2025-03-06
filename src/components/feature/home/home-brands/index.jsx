export function HomeBrands() {
  const brands = ['versace', 'zara', 'gucci', 'prada', 'calvin-klein'];

  return (
    <div className="bg-black py-8">
      <div className="container mx-auto px-4 lg:px-5 flex flex-wrap justify-center gap-x-8 gap-y-5 lg:justify-between items-center">
        {brands.map((brand, index) => (
          <img
            className="w-24 lg:w-auto object-contain"
            key={index}
            src={`/images/brands/${brand}.png`}
            alt={`${brand} logo`}
          />
        ))}
      </div>
    </div>
  );
}
