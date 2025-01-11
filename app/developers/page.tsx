import { DeveloperList } from '@/components/developer-list';
import { Navbar } from '@/components/navbar';
import { SearchFilters } from '@/components/search-filters';

export default function DevelopersPage() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Find Blockchain Developers</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <SearchFilters />
          <div className="lg:col-span-3">
            <DeveloperList />
          </div>
        </div>
      </div>
    </main>
  );
}