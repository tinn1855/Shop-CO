import { CircleUserRound, Menu, Search, ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { TopBar } from './top-bar';
import { Logo } from '../../shared/logo';
import { MainMenu } from './main-menu';
import SearchForm from './search-form';
import useCartStore from '../../feature/cart/cart-store';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../../ui/hover-card';
import { CartMini } from '../../feature/cart/cart-mini';
import { useEffect, useState } from 'react';
import { Avatar, AvatarImage } from '../../ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../../ui/dropdown-menu';

export function Header() {
  const { cart } = useCartStore();
  const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);
  const displayCount = totalProducts > 99 ? '99' : totalProducts;

  const [isOpenCart, setIsOpenCart] = useState(false)
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
        setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleClickViewCart = () => {
    setIsOpenCart(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
    window.location.reload();
  };
  
  return (
    <div>
      <TopBar />
      <div className="container mx-auto px-4 lg:px-5 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="lg:hidden mr-3">
              <Menu />
            </div>
            <Logo />
          </div>
          <MainMenu />
          <SearchForm />
          <div className="flex justify-end items-center space-x-2 lg:space-x-4">
            <div className="lg:hidden">
              <Search />
            </div>
            <HoverCard open={isOpenCart} onOpenChange={setIsOpenCart}>
              <HoverCardTrigger>
                <Link to="cart" className="relative">
                  <ShoppingCart />
                  {totalProducts > 0 && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-sm flex items-center justify-center  ">
                      <span className="text-xs">{displayCount}</span>
                    </div>
                  )}
                </Link>
              </HoverCardTrigger>
              <HoverCardContent>
                {totalProducts > 0 ? (
                   <CartMini onClose={handleClickViewCart}/>
                ) : "Không có sản phẩm"}
              </HoverCardContent>
            </HoverCard>
            {
              user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarImage src={user.avatar} />
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Purchased orders</DropdownMenuItem>
                      <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
              ): (
                <Link to="login">
                  <CircleUserRound className="text-sm" />
              </Link>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
