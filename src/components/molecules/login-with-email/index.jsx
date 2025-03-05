import { Input } from '../../ui/input';
import { Link } from 'react-router-dom';
import { Button } from '../../ui/button';
import { useState } from 'react';
import { useQueryUsers } from '@/src/hooks/queries/use-query-users';
import { Checkbox } from '../../ui/checkbox';

export function LoginWithEmail() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const { handleLogin, error, loading } = useQueryUsers();

  const validateEmail = (email) => {
    if (!email) return 'Email không được để trống!';
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return 'Email không hợp lệ!';
    return '';
  };

  const validatePassword = (password) => {
    if (!password) return 'Mật khẩu không được để trống!';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    setErrors({ email: '', password: '' });
    handleLogin(email, password);
  };

  return (
    <div className="lg:w-2/5 w-full flex flex-col gap-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <Input
          placeholder="Email"
          className="w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-between text-sm lg:text-base">
          <div>
            <Checkbox />
            <label className="ml-2">Remember me</label>
          </div>
          <Link to="/" className="font-medium ">
            Forgot Password?
          </Link>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div>
          <Button type="submit" disabled={loading}>
            {' '}
            {loading ? 'Signing In...' : 'Sign In'}
          </Button>
        </div>
      </form>
    </div>
  );
}
