
import TeacherCard from './TeacherCard'; // Asegúrate de importar el componente Teacher

export default function Teacher() {
  return (
    <section id="teacher" className="p-8 bg-white min-h-screen  flex flex-col items-center justify-center lg:h-screen">
      <h2 className="text-2xl font-bold mb-4">Nuestros Profesores</h2>
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-6">
        <TeacherCard 
          imageSrc="path-to-teacher1-image.jpg" 
          name="Profesora Florencia Cardozo " 
          subtitle="Profe de Contemporáneo" 
        />
        <TeacherCard 
          imageSrc="path-to-teacher2-image.jpg" 
          name="Profesor Natanael Lima" 
          subtitle="Profe de Principiante" 
        />
      </div>
    </section>
 
  )
}
