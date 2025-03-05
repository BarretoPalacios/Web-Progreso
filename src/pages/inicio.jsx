import { Link } from "react-router-dom"
import { Shield, CheckCircle, Award, Users, Clock, Phone } from "lucide-react"
import Footer from "../componentes/Footer"

const Inicio = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white h-screen bg-[url('/img/baner-padex.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 ">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Expertos en Sistemas contra Incendios</h1>
            <p className="text-xl md:text-2xl mb-8">
              Protegemos vidas y propiedades con soluciones de seguridad contra incendios de alta calidad y
              confiabilidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/servicios"
                className="bg-white text-red-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-center transition-colors"
              >
                Nuestros Servicios
              </Link>
              <Link
                to="/contacto"
                className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium text-center transition-colors"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/img/equipo-padex.png"
                alt="Engineers Pandex equipo trabajando"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Engineers Pandex SAC</h2>
              <p className="text-gray-600 mb-6">
                Somos una empresa líder en el diseño, instalación y mantenimiento de sistemas contra incendios. Con años
                de experiencia en el sector, nos hemos consolidado como referentes en seguridad contra incendios en
                Perú.
              </p>
              <p className="text-gray-600 mb-8">
                Nuestro equipo de ingenieros altamente calificados trabaja con dedicación para ofrecer soluciones
                personalizadas que cumplen con los más altos estándares de calidad y normativas internacionales.
              </p>
              <Link
                to="/nosotros"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Conoce más sobre nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Nuestros Servicios</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ofrecemos una amplia gama de servicios especializados en sistemas contra incendios para garantizar la
              seguridad de su empresa o edificio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Diseño de Sistemas</h3>
              <p className="text-gray-600 mb-4">
                Diseñamos sistemas contra incendios personalizados según las necesidades específicas de cada proyecto,
                cumpliendo con todas las normativas.
              </p>
              <Link to="/servicios" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
                Saber más
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Instalación y Montaje</h3>
              <p className="text-gray-600 mb-4">
                Instalamos sistemas de rociadores, alarmas, detección y extinción de incendios con los más altos
                estándares de calidad.
              </p>
              <Link to="/servicios" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
                Saber más
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Mantenimiento</h3>
              <p className="text-gray-600 mb-4">
                Realizamos mantenimiento preventivo y correctivo para garantizar el funcionamiento óptimo de sus
                sistemas contra incendios.
              </p>
              <Link to="/servicios" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
                Saber más
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/servicios"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">¿Por qué elegirnos?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              En Engineers Pandex nos distinguimos por nuestro compromiso con la excelencia y la seguridad de nuestros
              clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Reason 1 */}
            <div className="text-center">
              <div className="bg-red-600/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Experiencia</h3>
              <p className="text-gray-300">Más de 15 años de experiencia en el sector de sistemas contra incendios.</p>
            </div>

            {/* Reason 2 */}
            <div className="text-center">
              <div className="bg-red-600/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Equipo Calificado</h3>
              <p className="text-gray-300">Ingenieros y técnicos altamente capacitados y certificados.</p>
            </div>

            {/* Reason 3 */}
            <div className="text-center">
              <div className="bg-red-600/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Calidad Garantizada</h3>
              <p className="text-gray-300">Utilizamos equipos y materiales de primera calidad con garantía.</p>
            </div>

            {/* Reason 4 */}
            <div className="text-center">
              <div className="bg-red-600/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Atención 24/7</h3>
              <p className="text-gray-300">Servicio de atención al cliente y emergencias las 24 horas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesitas un sistema contra incendios?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos ayudarte a proteger tu negocio o
            propiedad.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-colors"
          >
            Solicitar Cotización
          </Link>
        </div>
      </section>
    <Footer />
    </div>
  )
}

export default Inicio

