/**
 * @file page.tsx (add)
 * @description Page to add a new password entry using React Hook Form.
 */

'use client';

import { useForm } from 'react-hook-form';
import Navbar from '@/components/custom/NavBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { addPassword } from '@/lib/api';

interface AddForm {
  label: string;
  username: string;
  password: string;
}

export default function AddPassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<AddForm>();

  const onSubmit = async (data: AddForm) => {
    try {
      await addPassword(data.label, data.username, data.password);
      toast({
        title: 'Password Added',
        description: 'Your password has been successfully added.',
      });
      reset();
    } catch {
      toast({
        title: 'Error',
        description: 'There was a problem adding your password.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-grow flex-col items-center justify-center px-4">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-center text-3xl font-bold">Add a Password</h1>
          <p className="text-center text-muted-foreground">
            Enter the details of the password you want to store securely.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="label">Label</Label>
              <Input
                id="label"
                type="text"
                placeholder="e.g., Gmail, Twitter etc."
                {...register('label', { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Your username or email"
                {...register('username', { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Your secure password"
                {...register('password', { required: true })}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Add Password
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
