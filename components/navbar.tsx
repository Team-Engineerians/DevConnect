'use client';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, Wallet2Icon } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { isSignedIn, userId } = useAuth();

  // Only render theme toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Wallet2Icon className="h-8 w-8" />
              <span className="font-bold text-xl">DevConnect</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/developers">
              <Button variant="ghost">Find Developers</Button>
            </Link>
            <Link href="/companies">
              <Button variant="ghost">For Companies</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost">About</Button>
            </Link>
            
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton mode="modal">
                  <Button variant="outline">Sign In</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button>Get Started</Button>
                </SignUpButton>
              </>
            )}

            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}