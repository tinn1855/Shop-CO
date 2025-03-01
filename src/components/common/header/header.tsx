import { CircleUserRound, Menu, Search, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TopBar } from './top-bar';
import { Logo } from '../../shared/logo';
import { MainMenu } from './main-menu';
import SearchForm from './search-form';

export function Header() {
  return (
    <div>
      <TopBar />
      <div className="container mx-auto px-4 lg:px-5 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="lg:hidden">
              <Menu />
            </div>
            <Logo />
          </div>
          <MainMenu />
          <SearchForm />
          <div className="flex justify-end space-x-2 lg:space-x-4">
            <div className="lg:hidden">
              <Search />
            </div>
            <Link to="cart">
              <ShoppingCart />
            </Link>
            <Link to="login">
              <CircleUserRound className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
