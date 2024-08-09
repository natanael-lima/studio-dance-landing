import React from 'react'
// Define la interfaz para los props del componente
interface ButtonBorderProps {
    content: string;
  }

export default function ButtonBorder({ content }: ButtonBorderProps) {
  return (
    <a href="#" className="mt-8 inline-block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
     {content}
    </a>
  )
}
