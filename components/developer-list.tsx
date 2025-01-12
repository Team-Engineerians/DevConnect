'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarIcon, MessageSquare, Star, Video } from 'lucide-react';

interface FilterState {
  selectedSkills: string[];
  priceRange: number[];
  availability: {
    availableNow: boolean;
    availableWeek: boolean;
  };
}

interface DeveloperListProps {
  filters: FilterState;
}

const developers = [
  {
    id: 1,
    name: 'Alex Thompson',
    title: 'Senior Blockchain Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rate: 150,
    rating: 4.9,
    skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'React'],
    available: true,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    title: 'Blockchain Architect',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rate: 180,
    rating: 4.8,
    skills: ['Web3.js', 'Solidity', 'Node.js', 'DeFi'],
    available: true,
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    title: 'Smart Contract Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rate: 120,
    rating: 4.7,
    skills: ['Rust', 'Solidity', 'Smart Contracts'],
    available: false,
  },
  {
    id: 4,
    name: 'Emily Davis',
    title: 'Full-Stack Blockchain Developer',
    image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rate: 160,
    rating: 4.6,
    skills: ['React', 'Node.js', 'Solidity', 'IPFS'],
    available: true,
  },
  {
    id: 5,
    name: 'John Miller',
    title: 'Blockchain Security Specialist',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rate: 200,
    rating: 4.9,
    skills: ['Security Audits', 'Penetration Testing', 'Smart Contracts', 'Python'],
    available: true,
  },
  {
    id: 6,
    name: 'Sophia Turner',
    title: 'Decentralized App (DApp) Developer',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rate: 140,
    rating: 4.5,
    skills: ['React', 'Web3.js', 'Solidity', 'Ethereum'],
    available: true,
  },
  {
    id: 7,
    name: 'Liam Johnson',
    title: 'NFT Developer',
    image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rate: 130,
    rating: 4.8,
    skills: ['NFT Smart Contracts', 'Solidity', 'OpenSea API', 'React'],
    available: false,
  },
  {
    id: 8,
    name: 'Isabella Martinez',
    title: 'DeFi Protocol Developer',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rate: 220,
    rating: 4.9,
    skills: ['Solidity', 'Web3.js', 'DeFi Protocols', 'Truffle'],
    available: true,
  },
  {
    id: 9,
    name: 'Ethan Brown',
    title: 'Solana Blockchain Developer',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rate: 170,
    rating: 4.7,
    skills: ['Rust', 'Solana SDK', 'Anchor Framework'],
    available: false,
  },
  {
    id: 10,
    name: 'Olivia Wilson',
    title: 'Hyperledger Developer',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rate: 190,
    rating: 4.8,
    skills: ['Hyperledger Fabric', 'Go', 'Smart Contracts', 'Blockchain Governance'],
    available: true,
  },
];

export function DeveloperList() {
  return (
    <div className="space-y-6">
      {developers.map((dev) => (
        <Card key={dev.id} className="p-6">
          <div className="flex items-start gap-6">
            <img
              src={dev.image}
              alt={dev.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{dev.name}</h3>
                  <p className="text-muted-foreground">{dev.title}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold">${dev.rate}/hr</div>
                  <div className="flex items-center text-muted-foreground">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="ml-1">{dev.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {dev.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant={dev.available ? "success" : "secondary"}>
                    {dev.available ? 'Available Now' : 'Unavailable'}
                  </Badge>
                  <span className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    Next available: Today
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                  <Button size="sm">
                    <Video className="w-4 h-4 mr-2" />
                    Schedule Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}