import React, { useState } from 'react';

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
    <section id="class" className="p-8 h-screen bg-zinc-50 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Clases</h2>
      <div className="flex overflow-x-hidden gap-4 h-[90%]">
        {['Principiante', 'Medio', 'Avanzado'].map(category => (
          <div
            key={category}
            className={`transition-all duration-300 ease-in-out cursor-pointer flex-shrink-0 h-full p-4 rounded-lg bg-gray-500 flex flex-col justify-between ${getBackgroundColor(category)} ${
              expanded === category ? 'w-[70%]' : 'flex-grow'
            }`}
            onClick={() => handleExpand(category)}
          >
            <h3 className="text-xl font-semibold text-primary">{category}</h3>
            {expanded === category && (
              <div className="mt-2">
                <p>Información detallada sobre la categoría {category}.</p>
                {/* Agrega más contenido aquí si es necesario */}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}