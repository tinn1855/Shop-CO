import { Link } from 'react-router-dom';

export function LoginWithSocial() {
  return (
    <div className="flex justify-center gap-2">
      <Link to="/">
        <img
          src="/images/social/facebook.png"
          alt="logo facebook"
          className="w-14 border rounded-full p-2"
        />
      </Link>
      <Link to="/">
        <img
          src="/images/social/google.png"
          alt="logo facebook"
          className="w-14 border rounded-full p-2"
        />
      </Link>
    </div>
  );
}
