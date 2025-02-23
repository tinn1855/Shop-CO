import { Routes, Route } from 'react-router-dom';
import { DefaultTemplate } from '../components/templates/default';
import { PageHome } from '../components/pages/home';
import { PageCategory } from '../components/pages/category';
import { PageProductDetail } from '../components/pages/product-detail';
import { PageCart } from '../components/pages/cart';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultTemplate />}>
        <Route index element={<PageHome />} />
        <Route path="category/:id" element={<PageCategory />} />
        <Route path="product/:id" element={<PageProductDetail />} />
        <Route path="cart" element={<PageCart />} />
        <Route path="*" element={<>Not found</>} />
      </Route>
    </Routes>
  );
}

export default App;
