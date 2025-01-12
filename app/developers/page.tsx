"use client"

import { DeveloperList } from '@/components/developer-list';
import { Navbar } from '@/components/navbar';
import { SearchFilters } from '@/components/search-filters';
import { useState } from 'react';

interface FilterState {
  selectedSkills: string[];
  priceRange: number[];
  availability: {
    availableNow: boolean;
    availableWeek: boolean;
  };
}

export default function DevelopersPage() {
  const [filters, setFilters] = useState<FilterState>({
    selectedSkills: [],
    priceRange: [50, 200],
    availability: {
      availableNow: false,
      availableWeek: false,
    },
  });

  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Find Blockchain Developers</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <SearchFilters filters={filters} setFilters={setFilters} />
          <div className="lg:col-span-3">
          <DeveloperList filters={filters} />
          </div>
        </div>
      </div>
    </main>
  );
}