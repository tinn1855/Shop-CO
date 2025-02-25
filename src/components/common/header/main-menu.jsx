import { useState } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from '../../ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQueryCategories } from '@/src/hooks/queries/use-query-categories';

export function MainMenu() {
    const [open, setOpen] = useState(false);

    const {data: categories} = useQueryCategories()

    return <ul className="hidden lg:flex justify-between space-x-6">
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="flex items-center"
      >
        Shop <ChevronDown className="text-sm" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {categories.map(category => <DropdownMenuItem>
          <Link to={category.link}>{category.name}</Link>
        </DropdownMenuItem>)}
      </DropdownMenuContent>
    </DropdownMenu>
    <li>On Sale</li>
    <li>New Arrivals</li>
    <li>Brands</li>
  </ul>
}