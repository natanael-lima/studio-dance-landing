//import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="overflow-hidden bg-white flex flex-col md:flex-row">
      <div className="flex-1 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center justify-center text-center md:text-left mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visítanos y Encuéntranos</h2>
            <p className="text-gray-700 mb-6">Nos encantaría saber de ti. Puedes contactarnos de las siguientes maneras:</p>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row space-y-6 md:space-y-0 md:space-x-6 ">
            <div className="flex items-center  space-x-4 p-4 rounded-lg shadow-md text-rose-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg>
              <p className="text-lg font-medium text-gray-900">+123 456 789</p>
            </div>
            <div className="flex items-center  space-x-4 p-4 rounded-lg shadow-md text-rose-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
              </svg>
              <p className="text-lg font-medium text-gray-900">contact@example.com</p>
            </div>
            <div className="flex items-center  space-x-4 p-4 rounded-lg shadow-md text-rose-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
              </svg>
              <p className="text-lg font-medium text-gray-900">Av. Queteimporta Mateo Merida 450</p>
            </div>
          </div>
          {/* Form */}
          <div className="mt-12 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Envíanos un mensaje</h3>
            <form className="space-y-6">

              <label className="block text-center font-bold text-rose-900 ">Nombre</label>
                <input
                  type="text"
                  className="w-full rounded-full border-rose-200 bg-zinc-100 p-4 pe-32 text-sm font-medium text-rose-900"
                  placeholder="Introduce tu nombre"
                />
             
             <label className="block text-center font-bold text-rose-900 ">Correo Electronico</label>
                <input
                  type="email"
                  className="w-full rounded-full border-rose-200 bg-zinc-100 p-4 pe-32 text-sm font-medium text-rose-900"
                  placeholder="Introduce tu correo"
                />
              <label className="block text-center font-bold text-rose-900 ">Mensaje</label>
                <textarea
                  className="form-textarea w-full rounded-md border-rose-200 bg-zinc-100 p-4 pe-32 text-sm font-medium text-rose-900"
                  placeholder="Introduce tu mensaje"
                  rows={4}
                ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-rose-400 text-white px-6 py-3 rounded-full hover:bg-rose-500 transition-colors duration-300 ease-in-out w-full"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>

      <div className="flex-1">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.938590546291!2d-122.40641708468114!3d37.78515327975817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d6c10c87f%3A0xdce4f68b008b8dfb!2sGoogleplex!5e0!3m2!1sen!2sus!4v1619817414675!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>


  )
}
