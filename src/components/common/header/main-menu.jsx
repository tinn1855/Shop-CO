import { Link } from 'react-router-dom';
import { useQueryCategories } from '@/src/hooks/queries/use-query-categories';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../../ui/navigation-menu';

export function MainMenu() {

    const {data: categories} = useQueryCategories()

    return <ul className="hidden lg:flex justify-between items-center space-x-6">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            {categories.map(category => 
               <NavigationMenuLink key={category.id} className='flex flex-col px-4 mb-2 py-1'>
                <Link to={`categories/${category.id}/products`}>
                  {category.name}
                  </Link>
               </NavigationMenuLink>
            )}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>

    <li>On Sale</li>
    <li>New Arrivals</li>
    <li>Brands</li>
  </ul>
}