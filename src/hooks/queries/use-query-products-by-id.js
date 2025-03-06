import { useEffect, useState } from 'react';

export function useQueryProductsById(apiGetProductsById) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (!apiGetProductsById) return;

    fetch(apiGetProductsById)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log('Error fetching data:', error));
  }, [apiGetProductsById]);

  return {
    data: product,
  };
}
