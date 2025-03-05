import { SignUpSidebar } from '../../feature/sign-up/sign-up-sidebar';
import { SignUpForm } from '../../feature/sign-up/sign-up-form';

export function SignUp() {
  return (
    <div className="flex flex-col mt-8 lg:mt-0 lg:flex-row text-center items-center justify-center">
      <SignUpSidebar />
      <SignUpForm />
    </div>
  );
}
