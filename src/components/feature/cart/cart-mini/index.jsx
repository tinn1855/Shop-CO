import { Button } from '@/src/components/ui/_button';
import useCartStore from '../cart-store';
import { Link, useNavigate } from 'react-router-dom';

export function CartMini({ onClose }) {
  const { cart } = useCartStore();
  const navigate = useNavigate();

  const handleViewCart = () => {
    onClose();
    navigate('/cart');
  };
  return (
    <div>
      {cart.map((item) => (
        <div
          key={`${item.id}-${item.size}-${item.color}`}
          className="flex gap-3 justify-between mb-4"
        >
          <div className="aspect-square w-1/3 bg-[#F0f0f0] rounded-xl">
            <Link to={`products/${item.id}`} onClick={onClose}>
              <img
                src={item.category.image}
                className="w-24 object-contain h-full"
                alt={item.title}
              />
            </Link>
          </div>
          <div className="text-sm w-2/3">
            <h3 className="font-bold">{item.title}</h3>
            <span>Quantity: {item.quantity}</span>
            <h3 className="font-bold text-xl lg:text-2xl">
              ${item.price * item.quantity}
            </h3>
          </div>
        </div>
      ))}
      <Button
        onClick={handleViewCart}
        className="w-full bg-black hover:bg-black/80 text-white font-bold py-3 rounded-full text-sm"
      >
        View Cart
      </Button>
    </div>
  );
}
