import React from 'react'
interface ButtonBorderProps {
  content: string;
}
export default function Button({ content }: ButtonBorderProps) {
  return (
    <button className='mt-4 bg-rose-400 text-rose-100 px-4 py-2 rounded-full hover:text-rose-50 hover:bg-rose-500 transition-colors duration-300 ease-in-out'>{content}</button>
  )
}
