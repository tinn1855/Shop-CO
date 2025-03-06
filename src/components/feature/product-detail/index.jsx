import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import { Button } from '../../ui/button';
import { Plus, Minus, Check } from 'lucide-react';
import useCartStore from '../cart/cart-store';
import { Toaster } from '../../ui/sonner';
import { toast } from 'sonner';
import { useQueryProductsById } from '@/src/hooks/queries/use-query-products-by-id';
import { GalleryProduct } from '../../molecules/gallery-product';

export default function ProductDetail() {
  const sizes = ['Small', 'Medium', 'Large', 'X-Large'];
  const colors = [
    { id: 1, name: 'Green', color: 'bg-[#00C12B] border-[#009A22]' },
    { id: 2, name: 'Red', color: 'bg-[#F50606] border-[#C40505]' },
    { id: 3, name: 'Yellow', color: 'bg-[#F5DD06] border-[#C4B105]' },
    { id: 4, name: 'Orange', color: 'bg-[#F57906] border-[#C76205]' },
    { id: 5, name: 'Blue', color: 'bg-[#06CAF5] border-[#05B1D6]' },
  ];

  const { id } = useParams();
  const { data: product } = useQueryProductsById(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };
  const handleColorClick = (id) => {
    setSelectedColor((prev) => (prev === id ? null : id));
  };

  const handleSizeClick = (size) => {
    setSelectedSize((prev) => (prev === size ? null : size));
  };

  const addToCart = useCartStore((state) => state.addToCart);
  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Please select size and color!');
      return;
    }
    const colorObject = colors.find((color) => color.id === selectedColor);
    addToCart(product, quantity, colorObject, selectedSize);
    toast.success('Successfully add to cart');
  };

  return (
    <div className="lg:flex lg:gap-10">
      <GalleryProduct />
      <div className="lg:w-1/2 flex flex-col space-y-2">
        <h2 className="text-2xl lg:text-5xl font-bold font-[IntegralCF-Bold] line-clamp-2">
          {product.title}
        </h2>
        <span className="text-sm">4.5/5</span>
        <div className="flex gap-3 items-center">
          <h3 className="text-2xl lg:text-[32px] font-bold">
            ${product.price}
          </h3>
          <del className="text-2xl lg:text-[32px] font-bold text-gray-500">
            ${product.price}
          </del>
          <h3 className="text-red-500 bg-red-200 px-4 py-1.5 rounded-full">
            -40%
          </h3>
        </div>
        <p className="line-clamp-3 text-sm">{product.description}</p>
        <div className="border-b border-gray-300 pt-3.5"></div>
        <div className="">
          <h3 className="my-3">Select Color</h3>
          <div className="flex gap-4">
            {colors.map((color) => (
              <button
                key={color.id}
                className={`w-10 h-10 border rounded-full flex items-center justify-center ${color.color}`}
                onClick={() => handleColorClick(color.id)}
              >
                {selectedColor === color.id && <Check className="text-white" />}
              </button>
            ))}
          </div>
        </div>
        <div className="border-b border-gray-300 pt-3.5"></div>
        <div className="">
          <h3 className="my-3">Choose Size</h3>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                className={cn(
                  'py-2 px-4 border rounded-full',
                  selectedSize === size
                    ? 'bg-black text-white'
                    : 'bg-white text-black border-gray-200'
                )}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <div className="border-b border-gray-300 pt-3.5"></div>
        <div className="flex justify-between gap-2 pt-3">
          <div className="w-[30%] bg-[#F0F0F0] rounded-full flex px-3 lg:px-5 justify-between">
            <button onClick={handleDecrease}>
              <Minus />
            </button>
            <input
              type="text"
              onChange={handleQuantityChange}
              value={quantity}
              className="outline-none w-1/4 bg-[#F0f0f0] text-center font-semibold"
            />
            <button onClick={handleIncrease}>
              <Plus />
            </button>
          </div>
          <div className="w-[70%]">
            <Button onClick={handleAddToCart}>
              Add to cart
              <Toaster richColors />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
