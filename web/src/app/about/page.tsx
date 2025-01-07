import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/custom/NavBar';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield, Key, Lock, UserCheck, RefreshCw } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

export default function About() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="container mx-auto max-w-4xl flex-grow px-4 py-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight">About Secure Pass</h1>
            <p className="text-xl text-muted-foreground">A simple & secure password manager project.</p>
          </div>

          <Separator />

          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">What is Secure Pass?</h2>
            <p className="leading-7 text-muted-foreground">
              Secure Pass is a modern, open-source password manager designed to help individuals and teams manage their
              digital credentials securely. Built with the latest web technologies and security practices, it provides a
              robust solution for password management while maintaining simplicity and ease of use.
            </p>
          </section>

          {/* Key Features */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Key Features</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Advanced Encryption</h3>
                </div>
                <p className="text-muted-foreground">
                  Industry-standard AES-256 encryption ensures your passwords remain secure at rest and in transit.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Password Generation</h3>
                </div>
                <p className="text-muted-foreground">
                  Generate strong, unique passwords that meet modern security requirements.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">Secure Storage</h3>
                </div>
                <p className="text-muted-foreground">
                  Your data is encrypted locally before being stored, ensuring only you have access to your passwords.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">User-Friendly Interface</h3>
                </div>
                <p className="text-muted-foreground">
                  Clean, intuitive interface makes password management accessible to everyone.
                </p>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Security Measures</h2>
            <p className="leading-7 text-muted-foreground">
              I take your security seriously and have implemented several measures in Secure Pass to protect your
              sensitive information:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4 text-muted-foreground">
              <li>I use AES-256-CBC encryption to encrypt your passwords before storing them in the database.</li>
              <li>I apply SHA-256 hashing to password labels for added security.</li>
              <li>I employ secure key derivation using scrypt to ensure strong encryption keys.</li>
              <li>I store encrypted data in MongoDB, providing an additional layer of protection.</li>
              <li>I have implemented CORS protection for API endpoints to prevent unauthorized access.</li>
            </ul>
            <p className="leading-7 text-muted-foreground">
              While I strive to maintain a high level of security, it's important to note that the current architecture
              does not fully implement a zero-knowledge approach. Encryption and decryption processes involve the
              server, which means that the server has access to the encryption keys.
            </p>
            <p className="leading-7 text-muted-foreground">
              I am continuously working on enhancing the security of Secure Pass and aim to implement a true
              zero-knowledge architecture in future updates, where encryption and decryption happen entirely on the
              client-side, and the server has no access to your plaintext passwords.
            </p>
          </section>

          {/* Technical Stack */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Technical Stack</h2>
            <div className="space-y-2">
              <p className="leading-7 text-muted-foreground">
                Built with modern technologies for optimal performance and security:
              </p>
              <ul className="list-inside list-disc space-y-2 pl-4 text-muted-foreground">
                <li>Next.js 14 with App Router for robust application architecture</li>
                <li>TypeScript for type-safe code and better developer experience</li>
                <li>Tailwind CSS for responsive and maintainable styling</li>
                <li>shadcn/ui for beautiful and accessible components</li>
                <li>Modern cryptography libraries for secure password handling</li>
              </ul>
            </div>
          </section>

          {/* Updates and Maintenance */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Regular Updates</h2>
            <div className="flex items-start gap-4">
              <RefreshCw className="mt-1 h-5 w-5 text-primary" />
              <p className="leading-7 text-muted-foreground">
                I plane to update Secure Pass to incorporate the latest security practices and features. Fell free to
                create an issue if you thought of any.
              </p>
            </div>
          </section>

          {/* Important Note */}
          <section className="space-y-4">
            <Alert variant="destructive">
              <Info className="h-5 w-5" />
              <AlertTitle>Important Note</AlertTitle>
              <AlertDescription>
                This project is intended to use in local dev environment for testing only. It is not made for
                production.
              </AlertDescription>
            </Alert>
          </section>

          {/* Call to Action */}
          <section className="space-y-6 py-8 text-center">
            <h2 className="text-2xl font-semibold">Get Started Today</h2>
            <p className="text-muted-foreground">Feel Free to contribute to the project.</p>
            <div className="flex justify-center gap-4">
              <Link href="/">
                <Button size="lg">Try Secure Pass</Button>
              </Link>
              <Link href="https://github.com/devharshthakur/secure-pass">
                <Button size="lg" variant="outline">
                  <FaGithub className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
