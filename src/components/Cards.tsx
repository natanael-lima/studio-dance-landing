
import '../index.css'; // Asegúrate de importar el archivo CSS aquí
import Button from './Button';
export default function Principiante() {
  return (
    <section id="principiante" className="bg-white py-8">
      {/* Contenedor del título */}
      <div className="text-center mb-6 mt-20">
        <h1 className="text-4xl font-bold text-rose-800">Clases Principiantes</h1>
      </div>

      {/* Contenedor de las tarjetas */}
      <div className="relative overflow-hidden">
        <div className="flex overflow-x-auto space-x-7 px-2">
          {/* Tarjeta 1 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg transition-all duration-300 flex-none min-w-[350px] h-[350px] card">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <img
                src="https://static01.nyt.com/images/2023/09/17/multimedia/17new-listings-dance-01-ctgf/17new-listings-dance-01-ctgf-superJumbo.jpg"
                alt="Contemporáneo"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            </div>
            <div className="relative p-4 flex flex-col justify-between h-full">
              <h2 className="text-2xl font-bold text-white mb-2">Contemporáneo</h2>
              <p className="text-lg text-gray-200">Edad Permitida: 5-10 años</p>
              <p className="text-lg text-gray-200">Día y Horario: Lunes, 4:00 PM</p>
              <Button content='View More'/>
            </div>
          </div>
          {/* Tarjeta 2 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg transition-all duration-300 flex-none min-w-[350px] h-[350px] card">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <img
                src="https://static01.nyt.com/images/2023/09/17/multimedia/17new-listings-dance-01-ctgf/17new-listings-dance-01-ctgf-superJumbo.jpg"
                alt="Jazz"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            </div>
            <div className="relative p-4 flex flex-col justify-between h-full">
              <h2 className="text-2xl font-bold text-white mb-2">Jazz</h2>
              <p className="text-lg text-gray-200 mb-2">Edad Permitida: 5-10 años</p>
              <p className="text-lg text-gray-200">Día y Horario: Miércoles, 5:00 PM</p>
              <Button content='View More'/>
            </div>
            
          </div>
          {/* Tarjeta 3 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg transition-all duration-300 flex-none min-w-[350px] h-[350px] card">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <img
                src="https://static01.nyt.com/images/2023/09/17/multimedia/17new-listings-dance-01-ctgf/17new-listings-dance-01-ctgf-superJumbo.jpg"
                alt="Clásico"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            </div>
            <div className="relative p-4 flex flex-col justify-between h-full">
              <h2 className="text-2xl font-bold text-white mb-2">Clásico</h2>
              <p className="text-lg text-gray-200 mb-2">Edad Permitida: 11-15 años</p>
              <p className="text-lg text-gray-200">Día y Horario: Martes, 6:00 PM</p>
              <Button content='View More'/>
            </div>
          </div>
          {/* Tarjeta 4 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg transition-all duration-300 flex-none min-w-[350px] h-[350px] card">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <img
                src="https://static01.nyt.com/images/2023/09/17/multimedia/17new-listings-dance-01-ctgf/17new-listings-dance-01-ctgf-superJumbo.jpg"
                alt="Hip-Hop"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            </div>
            <div className="relative p-4 flex flex-col justify-between h-full">
              <h2 className="text-2xl font-bold text-white mb-2">Hip-Hop</h2>
              <p className="text-lg text-gray-200 mb-2">Edad Permitida: 11-15 años</p>
              <p className="text-lg text-gray-200">Día y Horario: Jueves, 7:00 PM</p>
              <Button content='View More'/>
            </div>
          </div>
          {/* Tarjeta 5 */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg transition-all duration-300 flex-none min-w-[350px] h-[350px] card">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <img
                src="https://static01.nyt.com/images/2023/09/17/multimedia/17new-listings-dance-01-ctgf/17new-listings-dance-01-ctgf-superJumbo.jpg"
                alt="Salsa"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
            </div>
            <div className="relative p-4 flex flex-col justify-between h-full">
              <h2 className="text-2xl font-bold text-white mb-2">Salsa</h2>
              <p className="text-lg text-gray-200 mb-2">Edad Permitida: 16 años en adelante</p>
              <p className="text-lg text-gray-200">Día y Horario: Viernes, 8:00 PM</p>
              <Button content='View More'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}