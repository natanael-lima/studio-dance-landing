import React from 'react'

// Define la interfaz para las props del componente
interface TeacherCardProps {
  imageSrc: string;
  name: string;
  subtitle: string;
}

export default function TeacherCard({  name, subtitle }: TeacherCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg shadow-lg">
      <img src="https://st2.depositphotos.com/1662991/10981/i/450/depositphotos_109816144-stock-photo-dance-teacher-helping-her-students.jpg" alt={name} className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-rose-500" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{subtitle}</p>
      <button className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 transition-colors duration-300 ease-in-out">
        Ver más
      </button>
    </div>
  )
}
