import { Routes, Route } from 'react-router-dom';
import { DefaultTemplate } from '../components/templates/default';
import { PageHome } from '../components/pages/home';
import { PageCategory } from '../components/pages/category';
import { PageProductDetail } from '../components/pages/product-detail';
import { PageCart } from '../components/pages/cart';
import { SearchProduct } from '../components/feature/search-product';
import { Login } from '../components/pages/login';
import { SignUp } from '../components/pages/sign-up';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultTemplate />}>
        <Route index element={<PageHome />} />
        <Route path="categories/:id/products" element={<PageCategory />} />
        <Route path="products/:id" element={<PageProductDetail />} />
        <Route path="cart" element={<PageCart />} />
        <Route path="products" element={<SearchProduct />} />
        <Route path="*" element={<>Not found</>} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}
