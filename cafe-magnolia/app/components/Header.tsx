'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  onCategoriesClick: () => void;
}

const Header = ({ cartCount, onCartClick, onCategoriesClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Café Magnolia</h1>
          <h2 className="text-sm text-gray-600">Mesa 12</h2>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onCartClick}
            className="relative p-2 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={onCategoriesClick}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Categorías
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;