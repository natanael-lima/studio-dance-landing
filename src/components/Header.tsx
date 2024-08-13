import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <header className={`z-50 fixed top-0 left-0 w-full transition-colors duration-300 ease-in-out ${scrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <button onClick={() => scrollToSection('home')} className={`hidden lg:block`}>
            <img src="https://img.icons8.com/hatch/64/dance-with-devil.png" alt="dance-with-devil" className="h-8 w-auto" />
          </button>
        </div>

        {/* Toggle Button for Mobile */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="lg:hidden p-2 text-zinc-600 hover:text-gray-700 focus:outline-none"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Menu - Mobile View */}
        <div 
          className={`fixed inset-0 bg-rose-50 z-40 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`} 
        >
          <button 
            onClick={() => setMenuOpen(false)} 
            className="absolute top-4 right-4 text-zinc-600 hover:text-gray-400"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <button onClick={() => scrollToSection('home')} className="text-white text-xl font-bold">
              <img src="https://img.icons8.com/hatch/64/dance-with-devil.png" alt="dance Logo" className="h-8 w-auto" />
            </button>
            <ul className="flex flex-col space-y-6 w-full text-center p-2">
              <button onClick={() => scrollToSection('home')} className="text-rose-900 hover:bg-rose-100 px-4 py-2 rounded-full transition-colors duration-300 ease-in-out">
                INICIO
              </button>
              <button onClick={() => scrollToSection('class')} className="text-rose-900 hover:bg-rose-100 px-4 py-2 rounded-full transition-colors duration-300 ease-in-out">
                CLASES
              </button>
              <button onClick={() => scrollToSection('teacher')}className="text-rose-900 hover:bg-rose-100 px-4 py-2 rounded-full transition-colors duration-300 ease-in-out">
                PROFESORES
              </button>
              <button onClick={() => scrollToSection('about')} className="text-rose-900 hover:bg-rose-100 px-4 py-2 rounded-full transition-colors duration-300 ease-in-out">
                SOBRE NOSOTROS
              </button>
              <button onClick={() => scrollToSection('contact')}className="text-rose-900 hover:bg-rose-100 px-4 py-2 rounded-full transition-colors duration-300 ease-in-out">
                CONTACTO
              </button>
              <a href="tel:+123456789" className="bg-rose-400 text-rose-100 px-4 py-2 rounded-full hover:text-rose-50 hover:bg-rose-500 transition-colors duration-300 ease-in-out">
                +123 456 789
              </a>
            </ul>
          </div>
        </div>

        {/* Menu - Desktop View */}
        <div className="hidden lg:flex space-x-4">
          <button onClick={() => scrollToSection('home')} className=" text-zinc-500 hover:text-zinc-800 px-3 py-2 rounded-full transition-colors duration-300 ease-in-out">
            INICIO
          </button>
          <button onClick={() => scrollToSection('class')} className="text-zinc-500 hover:text-zinc-800 px-3 py-2 rounded-full transition-colors duration-300 ease-in-out">
            CLASES
          </button>
          <button onClick={() => scrollToSection('teacher')} className="text-zinc-500 hover:text-zinc-800 px-3 py-2 rounded-full transition-colors duration-300 ease-in-out">
            PROFESORES
          </button>
          <button onClick={() => scrollToSection('about')} className="text-zinc-500 hover:text-zinc-800  px-3 py-2 rounded-full transition-colors duration-300 ease-in-out">
            SOBRE NOSOTROS
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-zinc-500 hover:text-zinc-800  px-3 py-2 rounded-full transition-colors duration-300 ease-in-out">
            CONTACTO
          </button>
          <a href="tel:+123456789" className="bg-rose-400 text-rose-100 px-4 py-2 rounded-full hover:text-rose-50 hover:bg-rose-500 transition-colors duration-300 ease-in-out">
            +123456789
          </a>
        </div>
      </div>
    </header>
  );
}