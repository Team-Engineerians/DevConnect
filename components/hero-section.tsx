'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Find Top Blockchain Developers
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Connect with skilled blockchain developers for your next project. 
            Secure, transparent, and efficient hiring powered by smart contracts.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/developers">
              <Button size="lg">
                Find Developers
              </Button>
            </Link>
            <Link href="/companies">
              <Button variant="outline" size="lg">
                For Companies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
