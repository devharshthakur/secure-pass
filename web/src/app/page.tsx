/**
 * @file page.tsx (home)
 * @description Home page of the application.
 */

import Navbar from '@/components/custom/NavBar';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-grow flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold">Secure Pass</h1>
        <p className="mb-8 max-w-md text-xl">Simple secure password management and storage application.</p>
        <Link href="/dashboard">
          <Button size="lg">Get Started</Button>
        </Link>
      </main>
    </div>
  );
}
