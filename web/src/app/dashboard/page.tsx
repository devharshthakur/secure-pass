/**
 * @file page.tsx (dashboard)
 * @description Dashboard page with navigation to different actions.
 */

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, PlusCircle, List, LucideIcon } from 'lucide-react';
import Navbar from '@/components/custom/NavBar';

interface ActionItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

const actions: ActionItem[] = [
  {
    title: 'Search Password',
    description: 'Find a specific password from your stored entries',
    icon: Search,
    href: '/search',
  },
  {
    title: 'Add Password',
    description: 'Store a new password securely in your vault',
    icon: PlusCircle,
    href: '/add',
  },
  {
    title: 'All Passwords',
    description: 'View and manage all your stored passwords',
    icon: List,
    href: '/all',
  },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-grow flex-col items-center justify-center p-6">
        <div className="w-full max-w-4xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome to Secure Pass</h1>
            <p className="text-muted-foreground">Manage your passwords securely. What would you like to do?</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {actions.map((action) => (
              <Link key={action.title} href={action.href} className="group block">
                <Card className="h-full transition-colors hover:border-primary">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-primary/10 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <action.icon className="h-6 w-6" />
                      </div>
                      <CardTitle>{action.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{action.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
