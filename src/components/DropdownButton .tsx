import  { useState } from 'react';

interface ButtonBorderProps {
    content: string;
  }

export default function DropdownButton ({ content }: ButtonBorderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setDropdownOpen(false); // Close the dropdown after clicking an item
  };


  return (
    <div className="relative inline-block text-left">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="text-zinc-500 hover:text-zinc-800 px-4 py-2 rounded-full transition-colors duration-300 ease-in-out flex items-center"
      >
        {content}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-down-fill ml-2"
          viewBox="0 0 16 16"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
        </svg>
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-0 w-38 bg-white border border-gray-300 rounded-md shadow-lg"
        onMouseEnter={handleMouseEnter}  // Ensure the dropdown remains open when hovering over it
        onMouseLeave={handleMouseLeave}  // Close the dropdown when leaving both the button and the menu 
        >
          <a onClick={() => scrollToSection('principiante')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Principiante</a>
          <a onClick={() => scrollToSection('intermedio')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Intermedio</a>
          <a onClick={() => scrollToSection('avanzado')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">Avanzado</a>
        </div>
      )}
    </div>
  )
}
