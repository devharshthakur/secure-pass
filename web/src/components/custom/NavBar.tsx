/**
 * @file navbar.tsx
 * @description The navigation bar component displayed at the top of the pages.
 */

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="https://github.com/devharshthakur" passHref>
        <Button variant="ghost" className="text-base">
          <FaGithub className="mr-2" />
          @devharshthakur
        </Button>
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/about" passHref>
          <Button variant="ghost">About</Button>
        </Link>
        <Link href="https://github.com/devharshthakur/secure-pass" passHref>
          <Button variant="outline">
            <FaGithub className="mr-2" />
            GitHub
          </Button>
        </Link>
      </div>
    </nav>
  );
}
