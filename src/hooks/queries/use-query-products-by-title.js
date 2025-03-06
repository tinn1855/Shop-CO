import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useQueryProductsByTitle = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  // Lấy title từ URL
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get('title');

  useEffect(() => {
    if (!title) return;

    setLoading(true);
    fetch(
      `https://api.escuelajs.co/api/v1/products/?title=${encodeURIComponent(
        title
      )}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [title]);

  return { products, loading, error };
};

export default useQueryProductsByTitle;
