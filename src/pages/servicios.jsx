import { Link } from "react-router-dom"
import { Shield, CheckCircle, Clock, FileText, PenToolIcon as Tool, Settings, Flame, Building } from "lucide-react"
import Footer from "../componentes/Footer"

const Servicios = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[url('/img/servicios-padex.jpg')] bg-cover bg-center text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Soluciones integrales en sistemas contra incendios para proteger vidas y propiedades.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Servicios Integrales</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              En Engineers Pandex ofrecemos una amplia gama de servicios especializados en sistemas contra incendios,
              adaptados a las necesidades específicas de cada cliente.
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
                cumpliendo con todas las normativas nacionales e internacionales.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Análisis de riesgos y necesidades</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Diseño de sistemas de rociadores</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Sistemas de detección y alarma</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Planos y especificaciones técnicas</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Tool className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Instalación y Montaje</h3>
              <p className="text-gray-600 mb-4">
                Instalamos sistemas de rociadores, alarmas, detección y extinción de incendios con los más altos
                estándares de calidad y seguridad.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Sistemas de rociadores automáticos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Sistemas de detección y alarma</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Sistemas de extinción especiales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Redes de agua contra incendios</span>
                </li>
              </ul>
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
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Mantenimiento preventivo programado</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Reparación y mantenimiento correctivo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Pruebas de funcionamiento</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Servicio de emergencia 24/7</span>
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <FileText className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Consultoría y Asesoría</h3>
              <p className="text-gray-600 mb-4">
                Brindamos asesoramiento especializado en normativas, regulaciones y mejores prácticas en sistemas contra
                incendios.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Evaluación de riesgos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Asesoría en normativas NFPA</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Planes de emergencia y evacuación</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Auditorías de seguridad</span>
                </li>
              </ul>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Settings className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Ingeniería y Proyectos</h3>
              <p className="text-gray-600 mb-4">
                Desarrollamos proyectos integrales de ingeniería contra incendios, desde la concepción hasta la
                implementación.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Gestión integral de proyectos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Cálculos hidráulicos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Modelado BIM</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Supervisión de obras</span>
                </li>
              </ul>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Flame className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Capacitación</h3>
              <p className="text-gray-600 mb-4">
                Ofrecemos programas de capacitación en prevención y respuesta ante incendios para empresas y
                organizaciones.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Uso de extintores</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Brigadas de emergencia</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Simulacros de evacuación</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Primeros auxilios</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Sectores que Atendemos</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nuestros servicios están adaptados a las necesidades específicas de diversos sectores industriales y
              comerciales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Industry 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sector Industrial</h3>
              <p className="text-gray-600">
                Soluciones para fábricas, plantas de producción, almacenes y centros de distribución, adaptadas a los
                riesgos específicos de cada industria.
              </p>
            </div>

            {/* Industry 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sector Comercial</h3>
              <p className="text-gray-600">
                Sistemas para centros comerciales, oficinas, hoteles y restaurantes, enfocados en la protección de
                personas y bienes.
              </p>
            </div>

            {/* Industry 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sector Residencial</h3>
              <p className="text-gray-600">
                Protección para edificios residenciales, condominios y viviendas unifamiliares, garantizando la
                seguridad de los habitantes.
              </p>
            </div>

            {/* Industry 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sector Salud</h3>
              <p className="text-gray-600">
                Sistemas especializados para hospitales, clínicas y centros de salud, considerando las necesidades
                específicas de estos entornos.
              </p>
            </div>

            {/* Industry 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sector Educativo</h3>
              <p className="text-gray-600">
                Soluciones para escuelas, universidades y centros educativos, priorizando la seguridad de estudiantes y
                personal.
              </p>
            </div>

            {/* Industry 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sector Público</h3>
              <p className="text-gray-600">
                Sistemas para edificios gubernamentales, instituciones públicas y espacios de uso común, cumpliendo con
                todas las normativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Nuestro Proceso</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Trabajamos de manera metódica y organizada para garantizar resultados óptimos en cada proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Evaluación</h3>
              <p className="text-gray-600 mb-4">
                Analizamos las necesidades específicas de su proyecto y realizamos una evaluación detallada de riesgos.
              </p>
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-5 left-10 w-full h-0.5 bg-red-200"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Diseño</h3>
              <p className="text-gray-600 mb-4">
                Desarrollamos un diseño personalizado que se adapta a sus necesidades y cumple con todas las normativas
                vigentes.
              </p>
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-5 left-10 w-full h-0.5 bg-red-200"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Implementación</h3>
              <p className="text-gray-600 mb-4">
                Instalamos los sistemas con los más altos estándares de calidad, siguiendo un cronograma establecido.
              </p>
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-5 left-10 w-full h-0.5 bg-red-200"></div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Seguimiento</h3>
              <p className="text-gray-600 mb-4">
                Realizamos pruebas, capacitación y ofrecemos servicios de mantenimiento continuo para garantizar el
                funcionamiento óptimo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Lo que dicen nuestros clientes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestro mejor aval.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img src="https://img.freepik.com/vector-premium/ilustracion-diseno-logotipo-fabrica-industrial_92167-257.jpg?semt=ais_hybrid" alt="Cliente" className="w-12 h-12 rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Carlos Rodríguez</h4>
                  <p className="text-sm text-gray-600">Gerente de Operaciones, Industrias XYZ</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Engineers Pandex ha sido un socio clave en la implementación de nuestros sistemas contra incendios. Su
                profesionalismo y calidad de servicio son excepcionales."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/industry-logo-design-template-ec52f4458b42c32be2fd42d039161b43_screen.jpg?ts=1690281335" alt="Cliente" className="w-12 h-12 rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">María Fernández</h4>
                  <p className="text-sm text-gray-600">Directora de Seguridad, Centro Comercial ABC</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Gracias a Engineers Pandex, nuestro centro comercial cuenta con un sistema contra incendios de primera
                categoría. Su equipo es altamente profesional y eficiente."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img src="https://api.freelogodesign.org/assets/thumb/logo/c78e7342a8474d0d89ccbdd516745b08_300.png" alt="Cliente" className="w-12 h-12 rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Jorge Méndez</h4>
                  <p className="text-sm text-gray-600">Gerente General, Hospital San Juan</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "La seguridad de nuestros pacientes es primordial, y Engineers Pandex nos ha ayudado a implementar un
                sistema contra incendios que cumple con todas las normativas del sector salud."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesita un sistema contra incendios?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contáctenos hoy mismo para una consulta gratuita y descubra cómo podemos ayudarle a proteger su negocio o
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
      <Footer/>
    </div>
  )
}

export default Servicios

