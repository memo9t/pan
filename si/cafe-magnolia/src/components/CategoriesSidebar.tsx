import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MenuCategory } from '../types/types';

interface CategoriesSidebarProps {
  show: boolean;
  onClose: () => void;
  categories: MenuCategory[];
  onCategoryClick: (id: string) => void;
}

const CategoriesSidebar = ({
  show,
  onClose,
  categories,
  onCategoryClick,
}: CategoriesSidebarProps) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-full max-w-xs bg-gray-800 text-white z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${
        show ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        <h5 className="text-lg font-semibold">Categorías</h5>
        <button onClick={onClose} className="text-gray-300 hover:text-white">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="p-4">
        <ul>
          {categories.map(category => (
            <li key={category.id} className="mb-1">
              <button
                onClick={() => onCategoryClick(category.id)}
                className="block w-full text-left py-2 px-3 rounded hover:bg-gray-700"
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesSidebar;