import  { useState } from 'react';

interface ButtonBorderProps {
    content: string;
  }

export default function DropdownButton ({ content }: ButtonBorderProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setDropdownOpen(false); // Close the dropdown after clicking an item
  };
  
  return (
    <div className="relative inline-block text-left w-full">
      <button
        onClick={handleButtonClick}
        className="text-zinc-500 hover:text-zinc-800 px-4 py-2 rounded-full transition-colors duration-300 ease-in-out flex items-center mx-auto"
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
        <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-2 z-50">
          <a onClick={() => scrollToSection('principiante')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-center">
            Principiante
          </a>
          <a onClick={() => scrollToSection('intermedio')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-center">
            Intermedio
          </a>
          <a onClick={() => scrollToSection('avanzado')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer text-center">
            Avanzado
          </a>
        </div>
      )}
    </div>
  )
}
