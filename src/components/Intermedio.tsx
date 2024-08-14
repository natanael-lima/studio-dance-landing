import Button from './Button'

export default function Intermedio() {
  return (
    <section id="intermedio" className="bg-zinc-50 py-8">
      {/* Contenedor del título */}
      <div className="text-center mb-6 mt-20">
        <h1 className="text-4xl font-bold text-gray-800">Clases Intermedios</h1>
      </div>

      {/* Contenedor de las tarjetas */}
      <div className="relative overflow-hidden">
        <div className="flex overflow-x-auto space-x-5 px-5">

            {/* Tarjeta 1*/}
            <div className="group relative block bg-black min-w-[300px] sm:min-w-[300px] ">
              <img
                alt="foto"
                src="https://st.depositphotos.com/20363444/i/600/depositphotos_543134244-stock-photo-ballet-master-showing-choreographic-element.jpg"
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
                    <p className="text-md text-gray-200 mb-2">5-9 años</p>
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
                alt="foto"
                src="https://www.shutterstock.com/image-photo/pretty-young-girl-boy-sitting-600nw-1218026314.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Clásico</p>

                <p className="text-xl font-bold text-white sm:text-2xl">Niños</p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    
                    <h2 className="text-2xl font-bold text-white mb-2">Clásico</h2>
                    <p className="text-md text-gray-200 mb-2">5-9 años</p>
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
                alt=""
                src="https://static01.nyt.com/images/2023/05/24/arts/NYCB-season-highlights-03/NYCB-season-highlights-03-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
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
                    <p className="text-md text-gray-200 mb-2">10-15 años</p>
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
                src="https://img.freepik.com/foto-gratis/joven-bailarina-hermosa-vestido-beige-bailando-pared-negra_155003-4067.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">Contemporáneo</p>

                <p className="text-xl font-bold text-white sm:text-2xl">Adultos</p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <h2 className="text-2xl font-bold text-white mb-2">Contemporáneo</h2>
                    {/*<p className="text-sm text-white mt-2">
                    Explora la expresión moderna a través del movimiento contemporáneo, donde la creatividad 
                    y la innovación se encuentran en cada paso.
                    </p> */}
                    <p className="text-md text-gray-200 mb-2">16 años en adelante</p>
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
