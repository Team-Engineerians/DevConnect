'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

const skills = [
  'Solidity',
  'Smart Contracts',
  'Web3.js',
  'Ethereum',
  'React',
  'Node.js',
  'Rust',
  'Blockchain Architecture',
];

export function SearchFilters() {
  const [priceRange, setPriceRange] = useState([50, 200]);

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-4">Skills</h3>
          <div className="space-y-3">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center space-x-2">
                <Checkbox id={skill} />
                <Label htmlFor={skill}>{skill}</Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Hourly Rate (USD)</h3>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            min={0}
            max={300}
            step={10}
            className="mt-2"
          />
          <div className="mt-2 text-sm text-muted-foreground">
            ${priceRange[0]} - ${priceRange[1]}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Availability</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="available-now" />
              <Label htmlFor="available-now">Available Now</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="available-week" />
              <Label htmlFor="available-week">Available This Week</Label>
            </div>
          </div>
        </div>

        <Button className="w-full">Apply Filters</Button>
      </div>
    </Card>
  );
}