import Footer from "../componentes/Footer"

const Contacto = () => {
    return (
      <div>
        {/* Hero Section */}
        <section className="bg-[url('/img/contacto-padex.jpeg')] bg-cover bg-center  text-white py-20 md:py-28">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Póngase en contacto con nosotros para obtener más información sobre nuestros servicios.
            </p>
          </div>
        </section>
  
        {/* Contact Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Formulario de Contacto</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Tu correo electrónico"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Tu mensaje"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
  
        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Información de Contacto</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Estamos aquí para ayudarle con sus necesidades de protección contra incendios.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Address */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Dirección</h3>
                <p className="text-gray-600">Av. Principal 123</p>
                <p className="text-gray-600">Lima, Perú</p>
              </div>
  
              {/* Phone */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Teléfono</h3>
                <p className="text-gray-600">+51 123 456 789</p>
              </div>
  
              {/* Email */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Correo Electrónico</h3>
                <p className="text-gray-600">info@engineerspandex.com</p>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    )
  }
  
  export default Contacto
  
  