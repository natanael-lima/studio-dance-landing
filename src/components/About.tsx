import Button from './Button'
//p-8 flex bg-red-700 h-screen  flex flex-col items-center justify-center
export default function About() {
  return ( 
    <section  id="about" className='bg-zinc-50'>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src="https://www.escueladedanza.uy/wp-content/uploads/2018/01/ballet-clasico.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-white">
            <span
              className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-white"
            ></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl text-black">
              Sobre Nosotros
              </h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est
                esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam
                architecto eius quis quibusdam fugiat dicta.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est 
                esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam 
                architecto eius quis quibusdam fugiat dicta.
              </p>

              <Button content="Leer Mas"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
