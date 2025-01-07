import { Package, Layout, Settings, Database, FileCode, Container } from 'lucide-react';

export interface Update {
  title: string;
  date: string;
  type: 'feature' | 'config' | 'setup' | 'docker';
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

export const updates: Update[] = [
  {
    title: 'Initial project setup',
    date: '2024-01-08',
    type: 'setup',
    icon: 'Package',
    changes: [
      'Added .gitattributes file with text file normalization settings',
      'Added .gitignore file to exclude node_modules and other generated files',
      'Added LICENSE file with MIT license text',
      'Added README.md file with project overview',
      'Added package.json file with project metadata and scripts',
      'Added pnpm-workspace.yaml file to configure the monorepo workspace',
      'Added api and web directories for the backend and frontend',
    ],
  },
  {
    title: 'Implement frontend About page',
    date: '2024-01-08',
    type: 'feature',
    icon: 'Layout',
    changes: [
      'Added About page component in web/src/app/about/page.tsx',
      'Implemented hero section with project title and description',
      'Added introduction section explaining what Secure Pass is',
      'Listed key features of the project',
      'Described security measures taken in the project',
      'Added a section on the technical stack used',
      'Mentioned regular updates and maintenance plans',
      'Included an important note about the project being for local development only',
    ],
  },
  {
    title: 'Configure Prettier and Tailwind CSS',
    date: '2024-01-08',
    type: 'config',
    icon: 'Settings',
    changes: [
      'Added .prettierrc file in the web directory',
      'Configured Prettier with single quotes and trailing commas',
      'Added tailwind.config.ts file in the web directory',
      'Configured Tailwind CSS with custom color palette',
      'Included the tailwindcss-animate plugin for animations',
    ],
  },
  {
    title: 'Set up the backend project',
    date: '2024-01-08',
    type: 'setup',
    icon: 'Database',
    changes: [
      'Added package.json file in the api directory',
      'Configured Jest for testing',
      'Added README.md file with NestJS badge',
      'Added .gitignore file for backend',
      'Added .prettierrc file for backend',
      'Added tsconfig.json and tsconfig.build.json files',
    ],
  },
  {
    title: 'Set up the web project',
    date: '2024-01-08',
    type: 'setup',
    icon: 'FileCode',
    changes: [
      'Added README.md file with Next.js instructions',
      'Added .gitignore file for Next.js',
      'Added globals.css file for Tailwind CSS',
      'Added components.json for shadcn/ui',
      'Added postcss.config.mjs file',
      'Added next.config.ts file',
      'Implemented the Dashboard page component',
    ],
  },
  {
    title: 'Docker Configuration',
    date: '2024-01-08',
    type: 'docker',
    icon: 'Container',
    changes: [
      'Added Dockerfile in the api directory',
      'Specified Node.js 22 as the base image',
      'Configured Docker build process',
      'Added docker-compose.yaml file',
      'Defined services for MongoDB, backend API, and frontend',
      'Configured container names and dependencies',
      'Set up environment variables for MongoDB',
      'Mapped ports for the backend and frontend',
      'Configured restart policies for containers',
    ],
  },
];
