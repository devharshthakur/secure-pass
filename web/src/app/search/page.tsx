/**
 * @file page.tsx (search)
 * @description Page to search for a password by its label using React Hook Form and React Query.
 */

'use client';

import { useForm } from 'react-hook-form';
import Navbar from '@/components/custom/NavBar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { searchPasswordByLabel } from '@/lib/api';
import { PasswordEntryResult } from '@/types/password';

interface SearchForm {
  label: string;
}

export default function SearchPassword() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchForm>();
  const [result, setResult] = useState<PasswordEntryResult | null | undefined>();
  const [searched, setSearched] = useState<boolean>(false);

  const onSubmit = async (data: SearchForm) => {
    const res = await searchPasswordByLabel(data.label);
    setResult(res);
    setSearched(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-grow flex-col items-center justify-center px-4">
        <div className="w-full max-w-md space-y-4">
          <h1 className="text-center text-3xl font-bold">Search a Password</h1>
          <p className="text-center text-muted-foreground">Type the label of the password you're looking for.</p>
          <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-2">
            <Input
              type="text"
              placeholder="Enter password label"
              {...register('label', { required: true })}
              aria-label="Password label"
            />
            <Button type="submit" disabled={isSubmitting}>
              Search
            </Button>
          </form>
          {searched && (
            <Card>
              <CardContent className="pt-6">
                {result === null ? (
                  <p className="text-center text-muted-foreground">No results found</p>
                ) : result ? (
                  <div className="rounded bg-muted p-2">
                    <p>
                      <strong>Label:</strong> {result.label}
                    </p>
                    <p>
                      <strong>Username:</strong> {result.username}
                    </p>
                    <p>
                      <strong>Password:</strong> {result.password}
                    </p>
                  </div>
                ) : null}
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
