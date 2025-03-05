import { useForm } from 'react-hook-form';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../../ui/form';
import { useCreateUser } from '@/src/hooks/queries/use-create-user';
import { Toaster } from '../../ui/sonner';

const formSignUp = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email(),
  password: z.string().min(6),
});

export function SignUpWithEmail() {
  const { createUser, data, error, loading } = useCreateUser();
  const form = useForm({
    resolver: zodResolver(formSignUp),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  function onSubmitFormSignUp(values) {
    createUser(values);
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitFormSignUp)}
        className="lg:w-3/5 w-full flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
          {error && <Toaster richColors />}
          {data && <Toaster richColors />}
        </div>
      </form>
    </Form>
  );
}
