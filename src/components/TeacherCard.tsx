
// Define la interfaz para las props del componente
interface TeacherCardProps {
  imageSrc: string;
  name: string;
  subtitle: string;
}

export default function TeacherCard({  name, subtitle }: TeacherCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-zinc-50 rounded-lg shadow-md w-full md:w-2/2 lg:w-2/3 xl:w-2/4 mx-auto">
    <img
      src="https://st2.depositphotos.com/1662991/10981/i/450/depositphotos_109816144-stock-photo-dance-teacher-helping-her-students.jpg"
      alt={name}
      className="w-80 h-80 rounded-full object-cover mb-4"
    />
    <h3 className="text-gray-800 text-2xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-400 mb-4 text-lg">{subtitle}</p>
    <button className="bg-rose-400 text-white px-6 py-3 rounded-full hover:bg-rose-500 transition-colors duration-300 ease-in-out">
      Ver más
    </button>
  </div>
  )
}
