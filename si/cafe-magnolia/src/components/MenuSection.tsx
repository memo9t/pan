import MenuCard from './MenuCard';
import { MenuItem, MenuCategory } from '../types/types';

interface MenuSectionProps {
  menuItems: MenuItem[];
  categories: MenuCategory[];
  onAddToCart: (item: MenuItem) => void;
}

const MenuSection = ({ menuItems, categories, onAddToCart }: MenuSectionProps) => {
  return (
    <section id="menu" className="container mx-auto px-4 my-8 pb-10">
      {categories.map(category => {
        const categoryItems = menuItems.filter(item => item.category === category.id);
        if (categoryItems.length === 0) return null;

        return (
          <div key={category.id} id={category.id} className="mb-10">
            <h3 className="text-2xl font-bold mb-6 pl-4 border-l-4 border-green-600 text-green-600">
              {category.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {categoryItems.map(item => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onAddToCart={() => onAddToCart(item)}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MenuSection;