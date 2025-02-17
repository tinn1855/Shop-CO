import Slider from 'react-slick';

export function ProductCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="flex items-center justify-center">
            <img src={img} alt={`slide-${index}`} className="object-contain w-full h-80" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
