import { LoginWithSocial } from '@/src/components/molecules/login-with-social';
import { SignUpWithEmail } from '@/src/components/molecules/sign-up-with-email';
import { Logo } from '@/src/components/shared/logo';
import { Description } from '@/src/components/ui/description';
import { HeadingH3 } from '@/src/components/ui/heading-h3';
import { Link } from 'react-router-dom';

export function SignUpForm() {
  return (
    <div className="lg:w-3/5 w-full px-5 flex flex-col gap-4 lg:justify-center items-center">
      <Logo />
      <HeadingH3>Create An Account</HeadingH3>
      <div className="border-b-2 border-black w-20 flex justify-center mt-2"></div>
      <Description>
        Fill up personal information or create an account with
      </Description>
      <LoginWithSocial />
      <SignUpWithEmail />

      {/* responsive */}
      <div className="text-sm lg:hidden">
        <h3>
          If you already have an account.
          <Link to="/login" className="font-bold">
            {' '}
            LOGIN NOW
          </Link>
        </h3>
      </div>
    </div>
  );
}
