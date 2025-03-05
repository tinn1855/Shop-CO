import { Button } from '../../ui/button';
import { Checkbox } from '../../ui/checkbox';
import { Input } from '../../ui/input';

export function SignUpWithEmail() {
  return (
    <form action="" className="lg:w-3/5 w-full flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <Input placeholder="Full name" className="w-full" />
        <Input placeholder="Email" className="w-full" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Re-enter password" type="password" />
        <div className="flex items-center">
          <Checkbox />
          <label className="ml-2">I agree to the terms</label>
        </div>
      </div>
      <div>
        <Button>Sign Up</Button>
      </div>
    </form>
  );
}
