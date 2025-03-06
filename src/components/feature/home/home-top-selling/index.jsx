import { useState } from 'react';
import { useEffect } from 'react';
import { Product } from '../../../molecules/product';
import { Button } from '@/src/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/src/components/ui/carousel';
import { Heading } from '@/src/components/ui/heading';
import { Link } from 'react-router-dom';

export function HomeTopSelling() {
  const [topSellings, setTopSellings] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products/?categoryId=1')
      .then((res) => res.json())
      .then((data) => setTopSellings(data))
      .catch((error) => console.log('error fetching data:', error));
  }, []);

  return (
    <div>
      <Heading className="py-10">TOP SELLING</Heading>
      <Carousel className="overflow-hidden">
        <CarouselContent>
          {topSellings.map((product, index) => (
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
