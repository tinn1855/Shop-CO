import { HeadingH3 } from '@/src/components/ui/heading-h3';
import { Link } from 'react-router-dom';

export function SignUpSidebar() {
  return (
    <div className="hidden lg:block lg:w-2/5 bg-[url(/images/model.png)] bg-cover">
      <div className=" bg-black opacity-85 h-screen  text-white text-center px-20 flex flex-col gap-5 items-center justify-center">
        <HeadingH3>Hello, friend!</HeadingH3>
        <div className="border-b border-white w-20"></div>
        <p className="text-white text-xl">
          Fill up personal information and start shopping with us. If you
          already have an account. Please click this button
        </p>
        <Link
          to="/login"
          className="bg-white text-black px-5 py-3 rounded-full w-3/5 hover:bg-gray-300"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
