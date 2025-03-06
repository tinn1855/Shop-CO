import { useParams } from 'react-router-dom';
import { useQueryProductsById } from '@/src/hooks/queries/use-query-products-by-id';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

export function GalleryProduct() {
  const { id } = useParams();
  const { data: product } = useQueryProductsById(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );

  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) return <div>Loading...</div>;

  const thumbnails = product?.images?.slice(0, 3) || [];

  return (
    <div className="lg:w-1/2 grid lg:grid-cols-4 gap-3 lg:gap-3.5">
      {/* Thumbnail Images */}
      <div className="col-span-1 hidden lg:grid grid-rows-3 gap-3.5">
        {thumbnails.map((thumb, index) => (
          <button
            key={index}
            className={cn(
              'border rounded-xl overflow-hidden flex items-center justify-center bg-[#F0F0F0]',
              selectedImage === index ? 'border-black' : 'border-gray-200'
            )}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              className="object-contain"
            />
          </button>
        ))}
      </div>
      <div className="lg:col-span-3 bg-[#F0F0F0] rounded-3xl flex justify-center items-center">
        <img
          src={thumbnails[selectedImage] || product?.images?.[0]}
          alt={product?.title || 'Product Image'}
          className="object-contain h-full"
        />
      </div>
      <div className="lg:hidden grid grid-cols-3 gap-3 lg:gap-3.5">
        {thumbnails.map((thumb, index) => (
          <button
            key={index}
            className={cn(
              'border rounded-xl overflow-hidden flex items-center justify-center bg-[#F0F0F0]',
              selectedImage === index ? 'border-black' : 'border-gray-200'
            )}
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              className="object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
