import { MenuItem } from '../types/types';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: () => void;
}

const MenuCard = ({ item, onAddToCart }: MenuCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h5 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h5>
        <button
          onClick={onAddToCart}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
        >
          Agregar pedido - ${item.price.toLocaleString()}
        </button>
      </div>
    </div>
  );
};

export default MenuCard;