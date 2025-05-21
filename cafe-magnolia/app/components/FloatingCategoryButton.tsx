'use client';

interface FloatingCategoryButtonProps {
  show: boolean;
  onClick: () => void;
}

const FloatingCategoryButton = ({ show, onClick }: FloatingCategoryButtonProps) => {
  return (
    <button
      className={`fixed top-1/2 left-0 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-r-lg z-40 cursor-pointer transition-opacity duration-300 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ writingMode: 'vertical-rl' }}
      onClick={onClick}
    >
      Categorías
    </button>
  );
};

export default FloatingCategoryButton;