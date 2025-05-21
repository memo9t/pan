'use client';

import Image from 'next/image';
import { MenuItem } from '@/types/types';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: () => void;
}

const MenuCard = ({ item, onAddToCart }: MenuCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-60">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
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