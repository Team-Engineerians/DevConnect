import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { ClerkProvider } from '@clerk/nextjs';
import { UserButton } from "@clerk/nextjs";
import { HuddleClient, HuddleProvider } from "@huddle01/react";

const inter = Inter({ subsets: ['latin'] });

const huddleClient = new HuddleClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID!,
  });

export const metadata: Metadata = {
  title: 'DevConnect - Blockchain Developer Marketplace',
  description: 'Connect with top developers through our blockchain-powered marketplace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning>
        <HuddleProvider client={huddleClient}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
          </HuddleProvider>
        </body>
      </html>
    </ClerkProvider>

  );
}
