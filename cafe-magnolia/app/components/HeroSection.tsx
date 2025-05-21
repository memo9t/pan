'use client';

import Image from 'next/image';

const HeroSection = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen bg-cover bg-center relative">
      <Image
        src="/images/hero-bg.jpg"
        alt="Café Magnolia"
        fill
        className="object-cover"
        priority
      />
      <div
        className="absolute inset-0 flex flex-col justify-end items-center cursor-pointer"
        onClick={scrollToMenu}
      >
        <div className="w-full h-48 bg-black bg-opacity-60 rounded-t-[30%_100%] flex flex-col justify-center items-center animate-pulse">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
            Bienvenido a Café Magnolia
          </h2>
          <p className="text-white">Haz clic aquí para ver el menú</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;