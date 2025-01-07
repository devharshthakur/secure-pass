import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/custom/NavBar';
import { GitCommit, Package, FileCode, Settings, Layout, Database, Container, RefreshCw } from 'lucide-react';
import React from 'react';

// Update types for badges
const updateTypes = {
  feature: 'bg-green-500/10 text-green-500 hover:bg-green-500/20',
  config: 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20',
  setup: 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20',
  docker: 'bg-orange-500/10 text-orange-500 hover:bg-orange-500/20',
} as const;

interface Update {
  title: string;
  date: string;
  type: keyof typeof updateTypes;
  icon: keyof typeof iconMap;
  changes: string[];
}

const iconMap = {
  Package,
  Layout,
  Settings,
  Database,
  FileCode,
  Container,
};

export default async function Updates() {
  // Import the updates data from the TypeScript file
  const { updates } = await import('./updates');

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="container mx-auto max-w-4xl flex-grow px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-center text-4xl font-bold tracking-tight">Updates & Changes</h1>
            <p className="text-center text-xl text-muted-foreground">
              Track the evolution of Secure Pass with our detailed changelog
            </p>
          </div>

          <Separator />

          {/* Updates Timeline */}
          <div className="relative space-y-8">
            {updates.map((update, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`rounded-full p-2 ${updateTypes[update.type]} shrink-0`}>
                    {React.createElement(iconMap[update.icon])}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl font-semibold">{update.title}</h2>
                      <Badge variant="secondary" className={updateTypes[update.type]}>
                        {update.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <GitCommit className="mr-1 inline-block h-4 w-4" />
                      Committed on {update.date}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 pl-12">
                  {update.changes.map((change, changeIndex) => (
                    <li
                      key={changeIndex}
                      className="relative text-muted-foreground before:absolute before:left-[-1rem] before:top-[0.75rem] before:h-2 before:w-2 before:rounded-full before:bg-muted-foreground"
                    >
                      {change}
                    </li>
                  ))}
                </ul>
                {index < updates.length - 1 && <Separator className="my-6" />}
              </div>
            ))}
          </div>

          {/* Manual Notice */}
          <div className="flex items-center justify-center gap-2 pt-4 text-sm text-muted-foreground">
            <RefreshCw className="h-4 w-4" />
            <p>I automatically update this page when new changes are committed to the main branch.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
