import { useState } from 'react';
import { toast } from 'sonner';

export function useCreateUser() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...userData,
          avatar: 'https://picsum.photos/800',
        }),
      });
      if (!response.ok) {
        throw new Error('Create an account fail');
      }
      const result = await response.json();
      setData(result);
      toast.success('Create an account successfully');
      return true;
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { createUser, data, error, loading };
}
