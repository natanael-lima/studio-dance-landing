import Button from './Button'

export default function Intermedio() {
  return (
    <section id="principiante" className="bg-white py-8">
      {/* Contenedor del título */}
      <div className="text-center mb-6 mt-20">
        <h1 className="text-4xl font-bold text-gray-800">Clases Principiantes</h1>
      </div>

      {/* Contenedor de las tarjetas */}
      <div className="relative overflow-hidden">
        <div className="flex overflow-x-auto space-x-5 px-5">

            {/* Tarjeta 1*/}
            <div className="group relative block bg-black min-w-[300px] sm:min-w-[300px] ">
              <img
                alt="Foto"
                src="https://images.pexels.com/photos/20432873/pexels-photo-20432873/free-photo-of-little-ballerina-in-black-and-white.jpeg"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Contemporáneo</p>
                <p className="text-xl font-bold text-white sm:text-2xl">Niños</p>
                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <h2 className="text-2xl font-bold text-white mb-2">Contemporáneo</h2>
                    <p className="text-md text-gray-200 mb-2">5-10 años</p>
                    <p className="text-md text-gray-200">Día y Horario: Jueves, 16:00 hs</p>
                    <p className="text-xl font-bold text-white">$99.000</p>
                   
                    <Button content='Reservar'/>
                    <p className="text-sm text-zinc-300 mt-2">El valor corresponde a TODAS LAS CLASES del mes que indica el título. </p>
                  </div>
                </div>
              </div>
            </div>
          {/* Tarjeta 2 */}
          <div className="group relative block bg-black min-w-[300px] sm:min-w-[300px] ">
              <img
                alt=""
                src="https://img.freepik.com/foto-gratis/silueta-hermosa-bailarina-bailando-velo-sobre-fondo-azul-oscuro_155003-31548.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1723248000&semt=ais_hybrid"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Contemporáneo</p>

                <p className="text-xl font-bold text-white sm:text-2xl">Adolecentes</p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    
                    <h2 className="text-2xl font-bold text-white mb-2">Contemporáneo</h2>
                    <p className="text-md text-gray-200 mb-2">11-16 años</p>
                    <p className="text-md text-gray-200">Día y Horario: Jueves, 7:00 PM</p>
                    <p className="text-xl font-bold text-white">$99.000</p>
                   
                    <Button content='Reservar'/>
                    <p className="text-sm text-zinc-300 mt-2">El valor corresponde a TODAS LAS CLASES del mes que indica el título. </p>
                  </div>
                </div>
              </div>
            </div>
          {/* Tarjeta 3 */}
          <div className="group relative block bg-black min-w-[300px] sm:min-w-[300px]  ">
              <img
                alt="foto"
                src="https://img.freepik.com/foto-gratis/joven-bailarina-hermosa-vestido-beige-bailando-pared-negra_155003-4067.jpg"
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
                    <p className="text-md text-gray-200 mb-2">16-99 años</p>
                    <p className="text-md text-gray-200">Día y Horario: Jueves, 7:00 PM</p>
                    <p className="text-xl font-bold text-white">$99.000</p>
                   
                    <Button content='Reservar'/>
                    <p className="text-sm text-zinc-300 mt-2">El valor corresponde a TODAS LAS CLASES del mes que indica el título. </p>
                  </div>
                </div>
              </div>
            </div>
          {/* Tarjeta 4 */}
          <div className="group relative block bg-black min-w-[300px] sm:min-w-[300px] ">
              <img
                alt="foto"
                src="https://png.pngtree.com/background/20231126/original/pngtree-silhouetted-ballet-dancer-a-small-girl-in-ballerina-attire-dancing-photo-picture-image_6584573.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Clasico</p>

                <p className="text-xl font-bold text-white sm:text-2xl">Niños</p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <h2 className="text-2xl font-bold text-white mb-2">Clasico</h2>
                    {/*<p className="text-sm text-white mt-2">
                    Explora la expresión moderna a través del movimiento contemporáneo, donde la creatividad 
                    y la innovación se encuentran en cada paso.
                    </p> */}
                    <p className="text-md text-gray-200 mb-2">5-10 años</p>
                    <p className="text-md text-gray-200">Día y Horario: Jueves, 16:00 hs</p>
                    <p className="text-xl font-bold text-white">$99.000</p>
                    <Button content='Reservar'/>
                    <p className="text-sm text-zinc-300 mt-2">El valor corresponde a TODAS LAS CLASES del mes que indica el título. </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

