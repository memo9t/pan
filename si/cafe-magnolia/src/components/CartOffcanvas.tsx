import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { CartItem } from '../types/types';

interface CartOffcanvasProps {
  show: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

const CartOffcanvas = ({
  show,
  onClose,
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
}: CartOffcanvasProps) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-lg z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${
        show ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h5 className="text-lg font-semibold">Carrito de Compras</h5>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p className="text-center py-4">El carrito está vacío.</p>
        ) : (
          <>
            {cartItems.map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2 mb-2"
              >
                <div>
                  <h6 className="font-medium mb-1">{item.name}</h6>
                  <small className="text-gray-500">
                    Cantidad: {item.quantity}
                  </small>
                  <br />
                  <div className="mt-1 space-x-1">
                    <button
                      onClick={() => onDecrease(item.id)}
                      className="text-sm border border-gray-300 rounded px-2 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <button
                      onClick={() => onIncrease(item.id)}
                      className="text-sm border border-gray-300 rounded px-2 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-sm bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
                <span>${(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
            <hr className="my-2" />
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${total.toLocaleString()}</span>
            </div>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 mt-3">
              Finalizar compra
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartOffcanvas;