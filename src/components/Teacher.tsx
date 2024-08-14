
import TeacherCard from './TeacherCard'; // Asegúrate de importar el componente Teacher

export default function Teacher() {
  return (
    <section id="teacher" className="p-8 bg-white min-h-screen  flex flex-col items-center justify-center lg:h-screen">
      {/* Contenedor del título */}
      <div className="text-center mb-6 mt-20">
        <h1 className="text-4xl font-bold text-gray-800">Nuestros Profesores</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-6">
        <TeacherCard 
          imageSrc="path-to-teacher1-image.jpg" 
          name="Florencia Cardozo " 
          subtitle="Profe de Contemporáneo" 
        />
        <TeacherCard 
          imageSrc="path-to-teacher2-image.jpg" 
          name="Natanael Lima" 
          subtitle="Profe de Principiante" 
        />
      </div>
    </section>
 
  )
}
