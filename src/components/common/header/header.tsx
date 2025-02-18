import {
  ChevronDown,
  CircleUserRound,
  Menu,
  Search,
  ShoppingCart,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <div>
      <div className="bg-black py-1.5 lg:py-[7px]">
        <div className="container mx-auto px-5 text-white lg:flex justify-between items-center">
          <div className="hidden lg:block lg:w-1/3"></div>
          <div className="lg:w-1/3 flex justify-center text-center ">
            <h1 className="text-xs lg:text-sm text-center">
              Sign up and get 20% off to your first order.
              <a href="/" className="text-base border-b ml-1">
                Sign up now
              </a>
            </h1>
          </div>
          <div className="hidden lg:w-1/3 lg:flex justify-end">
            <button>
              <X className="w-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="lg:hidden">
              <Menu />
            </div>
            <a href="/">
              <h1 className="font-[IntegralCF-Bold] font-bold text-[32px]">
                SHOP.CO
              </h1>
            </a>
          </div>
          <ul className="hidden lg:flex justify-between space-x-6">
            <li className="flex items-center ">
              Shop <ChevronDown className="text-sm" />
            </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>

          <div className="py-3 w-[46.2%] bg-[#F0F0F0] rounded-full hidden lg:flex px-4">
            <Search className="text-gray-500" />
            <input
              className="bg-[#F0F0F0] rounded-full w-full outline-none px-3"
              placeholder="Search for products..."
            />
          </div>
          <div className="flex justify-end space-x-2 lg:space-x-4">
            <div className="lg:hidden">
              <Search />
            </div>
            <Link to="cart">
              <ShoppingCart />
            </Link>
            <CircleUserRound className="text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
