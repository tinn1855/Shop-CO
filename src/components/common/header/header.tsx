import {
  ChevronDown,
  CircleUserRound,
  Search,
  ShoppingCart,
  X,
} from 'lucide-react';

export function Header() {
  return (
    <div>
      <div className="bg-black py-1.5">
        <div className="container mx-auto px-5 text-white flex justify-between items-center">
          <div className="w-1/3"></div>
          <div className="w-1/3">
            <h1 className="text-sm ">
              Sign up and get 20% off to your first order.
              <a href="/" className="text-base border-b ml-1">
                Sign up now
              </a>
            </h1>
          </div>
          <div className="w-1/3 flex justify-end">
            <button>
              <X className="w-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 py-6">
        <div className="flex items-center justify-between">
          <h1 className=" font-[IntegralCF-Bold] text-[32px]">SHOP.CO</h1>
          <ul className="flex justify-between space-x-6">
            <li className="flex items-center ">
              Shop <ChevronDown className="text-sm" />
            </li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
          <div className="py-3 w-[46.2%] bg-[#F0F0F0] rounded-full flex px-4">
            <Search className="text-gray-500" />
            <input
              className="bg-[#F0F0F0] rounded-full w-full outline-none px-3"
              placeholder="Search for products..."
            />
          </div>
          <div className="flex justify-end space-x-4">
            <ShoppingCart />
            <CircleUserRound className="text-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
