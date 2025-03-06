import { useEffect, useState } from 'react';

const useQueryProductsByTitle = (searchTerm) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm === undefined) return;
    setLoading(true);
    setError(null);

    const api = debouncedSearchTerm.trim()
      ? `https://api.escuelajs.co/api/v1/products/?title=${encodeURIComponent(
          debouncedSearchTerm
        )}`
      : `https://api.escuelajs.co/api/v1/products`;

    fetch(api)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [debouncedSearchTerm]);

  return { products, loading, error };
};

export default useQueryProductsByTitle;
