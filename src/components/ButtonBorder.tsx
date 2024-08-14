
// Define la interfaz para los props del componente
interface ButtonBorderProps {
    content: string;
  }

export default function ButtonBorder({ content }: ButtonBorderProps) {
  return (
    <a href="#" className="mt-8 inline-block text-center rounded-full border border-rose-600 bg-rose-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-rose-600 focus:outline-none focus:ring active:text-rose-500">
     {content}
    </a>
  )
}
