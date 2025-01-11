'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

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

interface FilterState {
  selectedSkills: string[];
  priceRange: number[];
  availability: {
    availableNow: boolean;
    availableWeek: boolean;
  };
}

interface SearchFiltersProps {
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}

export function SearchFilters({ filters, setFilters }: SearchFiltersProps) {
  const handleSkillChange = (skill: string, checked: boolean) => {
    setFilters({
      ...filters,
      selectedSkills: checked
        ? [...filters.selectedSkills, skill]
        : filters.selectedSkills.filter(s => s !== skill),
    });
  };

  const handleAvailabilityChange = (key: 'availableNow' | 'availableWeek', checked: boolean) => {
    setFilters({
      ...filters,
      availability: {
        ...filters.availability,
        [key]: checked,
      },
    });
  };

  return (
    <Card className="p-6 mb-6">
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-4">Skills</h3>
          <div className="space-y-3">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center space-x-2">
                <Checkbox 
                  id={skill}
                  checked={filters.selectedSkills.includes(skill)}
                  onCheckedChange={(checked) => handleSkillChange(skill, checked as boolean)}
                />
                <Label htmlFor={skill}>{skill}</Label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Hourly Rate (USD)</h3>
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
            min={0}
            max={300}
            step={10}
            className="mt-2"
          />
          <div className="mt-2 text-sm text-muted-foreground">
            ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Availability</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="available-now"
                checked={filters.availability.availableNow}
                onCheckedChange={(checked) => 
                  handleAvailabilityChange('availableNow', checked as boolean)
                }
              />
              <Label htmlFor="available-now">Available Now</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="available-week"
                checked={filters.availability.availableWeek}
                onCheckedChange={(checked) => 
                  handleAvailabilityChange('availableWeek', checked as boolean)
                }
              />
              <Label htmlFor="available-week">Available This Week</Label>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}