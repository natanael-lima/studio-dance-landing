
import Button from './Button'

export default function Avanzado() {
  return (
    <section id="avanzado" className="bg-zinc-50 py-8">
      {/* Contenedor del título */}
      <div className="text-center mb-6 mt-20">
        <h1 className="text-4xl font-bold text-gray-800">Clases Avanzados</h1>
      </div>

      {/* Contenedor de las tarjetas */}
      <div className="relative overflow-hidden">
        <div className="flex overflow-x-auto space-x-7 px-2">

            {/* Tarjeta 1*/}
            <a href="#" className="group relative block bg-black min-w-[280px] sm:min-w-[350px] ">
              <img
                alt=""
                src="https://p1.pxfuel.com/preview/240/130/439/dance-dancer-dancing-woman-girl-elegance.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Contemporáneo</p>
                <p className="text-xl font-bold text-white sm:text-2xl">Adulto</p>
                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <h2 className="text-2xl font-bold text-white mb-2">Contemporáneo</h2>
                    <p className="text-md text-gray-200 mb-2">12-15 años</p>
                    <p className="text-md text-gray-200">Día y Horario: Jueves, 16:00 hs</p>
                    <p className="text-xl font-bold text-white">$99.000</p>
                   
                    <Button content='Reservar'/>
                    <p className="text-sm text-zinc-300 mt-2">El valor corresponde a TODAS LAS CLASES del mes que indica el título. </p>
                  </div>
                </div>
              </div>
            </a>
          {/* Tarjeta 2 */}
          <a href="#" className="group relative block bg-black min-w-[280px] sm:min-w-[350px] ">
              <img
                alt=""
                src="https://www.diariodesanse.com/wp-content/uploads/2024/02/Claudia-Avalos.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Contemporáneo</p>

                <p className="text-xl font-bold text-white sm:text-2xl">Adulto</p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    
                    <h2 className="text-2xl font-bold text-white mb-2">Contemporáneo</h2>
                    <p className="text-md text-gray-200 mb-2">12-15 años</p>
                    <p className="text-md text-gray-200">Día y Horario: Jueves, 7:00 PM</p>
                    <p className="text-xl font-bold text-white">$99.000</p>
                   
                    <Button content='Reservar'/>
                    <p className="text-sm text-zinc-300 mt-2">El valor corresponde a TODAS LAS CLASES del mes que indica el título. </p>
                  </div>
                </div>
              </div>
            </a>
          {/* Tarjeta 3 */}
          <a href="#" className="group relative block bg-black min-w-[280px] sm:min-w-[350px] ">
              <img
                alt=""
                src="https://transformtheworldartistically.wordpress.com/wp-content/uploads/2013/08/ace_balletireland_scheherazade_2_018.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Contemporáneo</p>

                <p className="text-xl font-bold text-white sm:text-2xl">Adulto</p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <h2 className="text-2xl font-bold text-white mb-2">Contemporáneo</h2>
                    <p className="text-md text-gray-200 mb-2">12-15 años</p>
                    <p className="text-md text-gray-200">Día y Horario: Jueves, 7:00 PM</p>
                    <p className="text-xl font-bold text-white">$99.000</p>
                   
                    <Button content='Reservar'/>
                    <p className="text-sm text-zinc-300 mt-2">El valor corresponde a TODAS LAS CLASES del mes que indica el título. </p>
                  </div>
                </div>
              </div>
            </a>
          {/* Tarjeta 4 */}
          <a href="#" className="group relative block bg-black min-w-[280px] sm:min-w-[350px]">
              <img
                alt=""
                src="https://media.istockphoto.com/id/1152417954/photo/young-graceful-female-ballet-dancer-dancing-in-mixed-light.jpg?s=612x612&w=0&k=20&c=fnrtFxHP4uRZUf0lCVOYkN_mL-MxgU2yZ-5BQI-85hU="
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Clasico</p>

                <p className="text-xl font-bold text-white sm:text-2xl">Adulto</p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <h2 className="text-2xl font-bold text-white mb-2">Clasico</h2>
                    <p className="text-sm text-white mt-2">
                    Explora la expresión moderna a través del movimiento contemporáneo, donde la creatividad 
                    y la innovación se encuentran en cada paso.
                    </p>
                    <Button content='Reservar'/>
                    <p className="text-sm text-zinc-300 mt-2">El valor corresponde a TODAS LAS CLASES del mes que indica el título. </p>
                  </div>
                </div>
              </div>
            </a>
          {/* Tarjeta 5 */}
          <a href="#" className="group relative block bg-black min-w-[280px] sm:min-w-[350px]">
              <img
                alt=""
                src="https://static01.nyt.com/images/2023/05/24/arts/NYCB-season-highlights-03/NYCB-season-highlights-03-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Clasico</p>

                <p className="text-xl font-bold text-white sm:text-2xl">Adulto</p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <h2 className="text-2xl font-bold text-white mb-2">Clasico</h2>
                    <p className="text-md text-gray-200 mb-2">12-15 años</p>
                    <p className="text-md text-gray-200">Día y Horario: Jueves, 7:00 PM</p>
                    <p className="text-xl font-bold text-white">$99.000</p>
                   
                    <Button content='Reservar'/>
                    <p className="text-sm text-zinc-300 mt-2">El valor corresponde a TODAS LAS CLASES del mes que indica el título. </p>
                  </div>
                </div>
              </div>
            </a>
        </div>
      </div>
    </section>
  )
}
