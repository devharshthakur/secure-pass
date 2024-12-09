/**
 * @file page.tsx (all)
 * @description Page to view all stored passwords using React Query.
 */

'use client';

import { useQuery } from '@tanstack/react-query';
import Navbar from '@/components/custom/NavBar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { Copy, Eye, EyeOff } from 'lucide-react';
import { getAllPasswords } from '@/lib/api';
import { useState } from 'react';

export default function AllPasswords() {
  const {
    data: passwords,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['allPasswords'],
    queryFn: getAllPasswords,
  });
  const [visiblePasswords, setVisiblePasswords] = useState<Record<number, boolean>>({});

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex flex-grow items-center justify-center px-4 py-8">
          <p>Loading...</p>
        </main>
      </div>
    );
  }

  if (isError || !passwords) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex flex-grow items-center justify-center px-4 py-8">
          <p>Error loading passwords.</p>
        </main>
      </div>
    );
  }

  const togglePasswordVisibility = (index: number) => {
    setVisiblePasswords((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: 'Password Copied',
        description: 'The password has been copied to your clipboard.',
      });
    } catch {
      toast({
        title: 'Copy Failed',
        description: 'Failed to copy password. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-grow flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl space-y-6">
          <h1 className="text-center text-3xl font-bold">All Stored Passwords</h1>
          <p className="mb-6 text-center text-muted-foreground">
            Below is a list of all your stored passwords. Passwords are hidden by default.
          </p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Label Hash</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Password</TableHead>
                <TableHead className="w-[120px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {passwords.map((item, index) => {
                const isVisible = visiblePasswords[index] || false;
                return (
                  <TableRow key={index}>
                    <TableCell className="font-mono">{item.labelHash.slice(0, 16)}...</TableCell>
                    <TableCell>{item.username}</TableCell>
                    <TableCell>
                      <span className="font-mono">{isVisible ? item.password : '•'.repeat(12)}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => togglePasswordVisibility(index)}
                          aria-label={isVisible ? 'Hide password' : 'Show password'}
                        >
                          {isVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => copyToClipboard(item.password)}
                          aria-label="Copy password"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
