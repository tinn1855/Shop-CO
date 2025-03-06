import { Minus, Trash2, Plus } from 'lucide-react';
import useCartStore from '../cart-store';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/src/components/ui/alert-dialog';
import { Link } from 'react-router-dom';

export function CartProduct() {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  const handleIncrease = (id, size, color, currentQuantity) => {
    updateQuantity(id, size, color, currentQuantity + 1);
  };

  const handleDecrease = (id, size, color, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(id, size, color, currentQuantity - 1);
    }
  };

  const handleRemove = (id, size, color) => {
    removeFromCart(id, size, color);
  };

  const handleQuantityChange = (id, size, color, value) => {
    const newValue = parseInt(value, 10);
    if (!isNaN(newValue) && newValue >= 1) {
      updateQuantity(id, size, color, newValue);
    }
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <p className="mb-2">Cart is empty</p>
          <Link className="border px-8 py-2 rounded-full" to="/">
            Shopping Now
          </Link>
        </div>
      ) : (
        cart.map((item) => (
          <div
            key={`${item.id}-${item.size}-${item.color}`}
            className="flex gap-2 lg:gap-4 justify-between mb-5"
          >
            <div className="aspect-square bg-[#F0f0f0] w-1/4 lg:w-1/5 rounded-xl">
              <img
                src={item.category.image}
                className="w-32 object-contain h-full"
                alt={item.title}
              />
            </div>
            <div className="flex flex-col justify-between w-3/4 lg:w-4/5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="sm:text-xl font-bold">{item.title}</h3>
                  <h3 className="text-xs lg:text-base">
                    Size: <span className="opacity-60">{item.size}</span>
                  </h3>
                  <h3 className="text-xs lg:text-base">
                    Color: <span className="opacity-60">{item.color.name}</span>
                  </h3>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Trash2 className="w-5 h-5 lg:w-6 text-red-500" />
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure to delete this product?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() =>
                          handleRemove(item.id, item.size, item.color)
                        }
                      >
                        Yes
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <div className="flex justify-between items-end">
                <h3 className="font-bold text-xl lg:text-2xl">
                  ${item.price * item.quantity}
                </h3>
                <div className="w-28 lg:w-32 bg-[#F0F0F0] rounded-full flex px-2 py-1 lg:px-5 lg:py-2.5 justify-between">
                  <button
                    onClick={() =>
                      handleDecrease(
                        item.id,
                        item.size,
                        item.color,
                        item.quantity
                      )
                    }
                  >
                    <Minus />
                  </button>
                  <input
                    onChange={(e) =>
                      handleQuantityChange(
                        item.id,
                        item.size,
                        item.color,
                        e.target.value
                      )
                    }
                    type="text"
                    value={item.quantity}
                    className="outline-none font-semibold bg-[#F0F0F0] w-6 text-center"
                  />
                  <button
                    onClick={() =>
                      handleIncrease(
                        item.id,
                        item.size,
                        item.color,
                        item.quantity
                      )
                    }
                  >
                    <Plus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
