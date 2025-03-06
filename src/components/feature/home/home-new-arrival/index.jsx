import { useEffect } from 'react';
import { useState } from 'react';
import { Product } from '../../../molecules/product';
import { Button } from '@/src/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/src/components/ui/carousel';
import { Heading } from '@/src/components/ui/heading';
import { Link } from 'react-router-dom';

export function HomeNewArrival() {
  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => setNewArrivals(data))
      .catch((error) => console.log('error fetching data:', error));
  }, []);
  return (
    <div>
      <Heading className="mt-20 mb-14">NEW ARRIVALS</Heading>
      <Carousel>
        <CarouselContent>
          {newArrivals.map((product, index) => (
            <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
              <Product product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center my-10">
        <Button variant="outline">
          <Link to="products" className="w-full">
            View all
          </Link>
        </Button>
      </div>
    </div>
  );
}
