import { Routes, Route } from 'react-router-dom';
import { DefaultTemplate } from '../components/templates/default';
import { PageHome } from '../components/pages/home';
import { PageCategory } from '../components/pages/category';
import { PageProductDetail } from '../components/pages/product-detail';
import { PageCart } from '../components/pages/cart';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultTemplate />}>
        <Route index element={<PageHome />} />
        <Route path="categories/:id/products" element={<PageCategory />} />
        <Route path="product/:id" element={<PageProductDetail />} />
        <Route path="cart" element={<PageCart />} />
        <Route path="*" element={<>Not found</>} />
      </Route>
    </Routes>
  );
}
