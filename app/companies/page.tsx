import { Navbar } from '@/components/navbar';

export default function CompaniesPage() {
  return (
    <main>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">For Companies</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Why Choose DevConnect?</h2>
            <div className="prose">
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Verified Blockchain Talent</h3>
                    <p className="text-muted-foreground">Access a curated pool of pre-vetted blockchain developers with proven expertise.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quick Hiring Process</h3>
                    <p className="text-muted-foreground">Find and hire the right developer within days, not weeks or months.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Secure Payments</h3>
                    <p className="text-muted-foreground">Smart contract-based escrow and milestone payments for peace of mind.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <h2 className="text-2xl font-semibold mb-6">Get Started</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter your company name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Work Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="requirements" className="block text-sm font-medium mb-1">Project Requirements</label>
                <textarea
                  id="requirements"
                  rows={4}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Tell us about your project and the type of developer you're looking for"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
              >
                Connect with Developers
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}