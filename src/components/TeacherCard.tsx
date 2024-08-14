
// Define la interfaz para las props del componente
interface TeacherCardProps {
  imageSrc: string;
  name: string;
  subtitle: string;
}

export default function TeacherCard({  name, subtitle }: TeacherCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-zinc-50 rounded-lg shadow-md w-full sm:w-1/2 lg:w-1/2 xl:w-1/3 mx-auto">
    <img
      src="https://st2.depositphotos.com/1662991/10981/i/450/depositphotos_109816144-stock-photo-dance-teacher-helping-her-students.jpg"
      alt={name}
      className="w-60 h-60 rounded-full object-cover mb-4"
    />
    <h3 className="text-gray-800 text-2xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-400 mb-4 text-lg">{subtitle}</p>
    <p className="text-gray-500 mb-4 text-sm">Florencia Cardozo es una destacada profesora de danza con una sólida formación en el 
      Instituto Superior de Profesorado de Arte (ISPA). Con una pasión por el contemporáneo y 
      el clásico, Florencia combina técnica rigurosa con una creatividad vibrante en sus clases. 
     </p> <br />
      <p className="text-gray-500 mb-4 text-sm"> Su enfoque personalizado y su dedicación a cada estudiante hacen que cada lección sea una 
      experiencia enriquecedora. Con años de experiencia en el escenario y en la enseñanza, 
      Florencia inspira a sus alumnos a alcanzar su máximo potencial en el arte de la danza.</p>
  </div>
  )
}
