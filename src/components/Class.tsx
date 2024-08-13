import { useState } from 'react';
import '../index.css'; // Asegúrate de importar el archivo CSS aquí
//import dancer1 from '../assets/images/img-p.png'; 
//import dancer2 from '../assets/images/img-i.webp'; 
import dancer3 from '../assets/images/img-a.png'; // Ajusta la ruta si es necesario
export default function Class() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleExpand = (category: string) => {
    setExpanded(expanded === category ? null : category);
  };
  // Función para asignar un color de fondo diferente a cada categoría
  const getBackgroundColor = (category: string) => {
    switch (category) {
      case 'Principiante':
        return 'bg-neutral-800 text-t-primary';
      case 'Medio':
        return 'bg-t-primary text-rose-900';
      case 'Avanzado':
        return 'bg-sky-100 text-sky-900';
      default:
        return 'bg-gray-100 text-neutral-800';
    }
  };
  return (
    <section id="class" className="p-8 bg-zinc-50 flex flex-col lg:h-screen">
      <h2 className="text-2xl font-bold mb-4">Clases</h2>
      {/* Contenedor para pantallas grandes */}
      <div className="hidden md:flex flex overflow-x-hidden h-[100%]">
        {['Principiante', 'Medio', 'Avanzado'].map(category => (
          <div
            key={category}
            className={`transition-all duration-300 ease-in-out cursor-pointer flex-shrink-0 h-full p-4 rounded-lg bg-gray-500 flex flex-col justify-between ${getBackgroundColor(category)} ${
              expanded === category ? 'w-[60%]' : 'flex-grow'
            }`}
            onClick={() => handleExpand(category)}
          >
            <h3 className="text-xl font-semibold text-primary">Danza Contemporánea {category}</h3>
            <div className="flex items-center"> 
              <img 
                src={dancer3} 
                alt="Dancer" 
                className=" w-32 h-32 object-cover mr-4 hidden md:block" 
              />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">{category}</h3>
                {expanded === category && (
                  <div className="mt-2">
                    <p className="text-lg mb-4">
                      Danza Contemporánea para {category} 
                      <p>¡Aprende y disfruta de la danza moderna con nosotros! </p>
                       <p>Nuestro horario flexible te permite unirte a nuestras clases en el momento que más te convenga.</p>
                    </p>
                    <button className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition-colors duration-300">
                      Call Us
                    </button>
                  </div>
                )}
              </div>
            </div>
            {expanded === category && (
              <div className="mt-4">
                <p className="text-lg">Horario y más información:</p>
                <ul className="list-disc pl-5">
                  <li>Lunes y Miércoles: 10:00 AM - 11:30 AM</li>
                  <li>Viernes: 6:00 PM - 7:30 PM</li>
                </ul>
                <p className="mt-2">¡Únete a nuestras clases y mejora tus habilidades en danza contemporánea!</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Contenedor para pantallas móviles */}
      <div className="md:hidden flex flex-col overflow-auto gap-4 h-[90%]">
        {['Principiante', 'Medio', 'Avanzado'].map(category => (
          <div
            key={category}
            className={`transition-all duration-300 ease-in-out cursor-pointer h-full p-4 rounded-lg bg-gray-500 flex flex-col justify-between ${getBackgroundColor(category)} ${
              expanded === category ? 'h-[70%]' : 'h-[30%]'
            }`}
            onClick={() => handleExpand(category)}
          >
            <h3 className="text-xl font-semibold text-primary text-center">Danza Contemporánea {category}</h3>
            <div className="flex flex-col items-center">
              <img 
                src={dancer3} 
                alt="Dancer" 
                className="w-32 h-32 object-cover mb-4" 
              />
              <div className="flex-1 text-center">
                <h3 className="text-2xl font-semibold mb-2">{category}</h3>
                {expanded === category && (
                  <div className="mt-2">
                    <p className="text-lg mb-4">
                      Danza Contemporánea para {category} - ¡Aprende y disfruta de la danza moderna con nosotros! 
                      Nuestro horario flexible te permite unirte a nuestras clases en el momento que más te convenga.
                    </p>
                    <button className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition-colors duration-300">
                      Call Us
                    </button>
                  </div>
                )}
              </div>
            </div>
            {expanded === category && (
              <div className="mt-4">
                <p className="text-lg">Horario y más información:</p>
                <ul className="list-disc pl-5 text-left">
                  <li>Lunes y Miércoles: 10:00 AM - 11:30 AM</li>
                  <li>Viernes: 6:00 PM - 7:30 PM</li>
                </ul>
                <p className="mt-2">¡Únete a nuestras clases y mejora tus habilidades en danza contemporánea!</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}