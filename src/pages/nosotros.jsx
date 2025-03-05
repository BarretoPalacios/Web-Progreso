import { Shield, Target, Award, CheckCircle } from "lucide-react"
import Footer from "../componentes/Footer"

const Nosotros = () => {
  return (
    <div>
      {/* Hero Section */} 
      <section className="bg-[url('/img/nosotros-padex.jpg')] bg-cover bg-center text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Engineers Pandex SAC, expertos en sistemas contra incendios comprometidos con la seguridad y excelencia.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/img/equipo-padex-1.jpg"
                alt="Oficina de Engineers Pandex"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Nuestra Historia</h2>
              <p className="text-gray-600 mb-4">
                Engineers Pandex SAC fue fundada en 2008 por un grupo de ingenieros con amplia experiencia en el sector
                de la seguridad contra incendios. Desde nuestros inicios, nos hemos dedicado a ofrecer soluciones
                integrales y de alta calidad para la protección contra incendios.
              </p>
              <p className="text-gray-600 mb-4">
                A lo largo de los años, hemos crecido hasta convertirnos en una empresa líder en el mercado peruano,
                trabajando con clientes de diversos sectores como industrial, comercial, residencial e institucional.
              </p>
              <p className="text-gray-600">
                Nuestro compromiso con la excelencia y la seguridad nos ha permitido ganar la confianza de nuestros
                clientes y establecer relaciones duraderas basadas en la calidad de nuestro trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Misión, Visión y Valores</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Estos son los principios que guían nuestro trabajo diario y nos impulsan a ser mejores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-6">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Misión</h3>
              <p className="text-gray-600">
                Proporcionar soluciones integrales de protección contra incendios que garanticen la seguridad de
                personas y bienes, mediante un servicio de calidad, personalizado y conforme a las normativas vigentes.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Visión</h3>
              <p className="text-gray-600">
                Ser reconocidos como la empresa líder en sistemas contra incendios en Perú, destacando por nuestra
                innovación, excelencia técnica y compromiso con la seguridad, expandiendo nuestra presencia a nivel
                internacional.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-6">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span>Excelencia en el servicio</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span>Compromiso con la seguridad</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span>Integridad y ética profesional</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span>Innovación constante</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span>Trabajo en equipo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Nuestro Equipo</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Contamos con un equipo de profesionales altamente calificados y comprometidos con la excelencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://bcw-media.s3.ap-northeast-1.amazonaws.com/yce_avatar_v6_poster_16_c2aa37734c.jpg"
                alt="Director General"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Carlos Mendoza</h3>
                <p className="text-red-600 font-medium mb-3">Director General</p>
                <p className="text-gray-600 text-sm">
                  Ingeniero con más de 20 años de experiencia en sistemas contra incendios.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg"
                alt="Directora de Operaciones"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Ana Gutiérrez</h3>
                <p className="text-red-600 font-medium mb-3">Directora de Operaciones</p>
                <p className="text-gray-600 text-sm">
                  Especialista en gestión de proyectos y optimización de procesos.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://starryai.com/cdn-cgi/image/format=avif,quality=90/https://cdn.prod.website-files.com/61554cf069663530fc823d21/6369fecfaa89f609ff356f26_download-14-min.png"
                alt="Jefe de Ingeniería"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">Roberto Sánchez</h3>
                <p className="text-red-600 font-medium mb-3">Jefe de Ingeniería</p>
                <p className="text-gray-600 text-sm">Ingeniero especializado en diseño de sistemas contra incendios.</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA"
                alt="Directora Comercial"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">María Torres</h3>
                <p className="text-red-600 font-medium mb-3">Directora Comercial</p>
                <p className="text-gray-600 text-sm">Experta en desarrollo de negocios y relaciones con clientes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Certificaciones</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Cumplimos con los más altos estándares de calidad y seguridad en la industria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Certification 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-6">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">ISO 9001</h3>
              <p className="text-gray-600">
                Certificación en Sistemas de Gestión de Calidad, garantizando procesos eficientes y orientados al
                cliente.
              </p>
            </div>

            {/* Certification 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-6">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">NFPA</h3>
              <p className="text-gray-600">
                Cumplimiento con las normas de la National Fire Protection Association para sistemas contra incendios.
              </p>
            </div>

            {/* Certification 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-6">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">OHSAS 18001</h3>
              <p className="text-gray-600">Certificación en Sistemas de Gestión de Seguridad y Salud en el Trabajo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Nuestros Clientes</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Empresas que confían en nosotros para sus sistemas de protección contra incendios.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Client logos */}
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <img src="https://e7.pngegg.com/pngimages/979/865/png-clipart-dynafire-casselberry-fire-alarm-system-fire-sprinkler-system-service-fire-letter-miscellaneous-company.png" alt="Logo Cliente 1" className="max-h-16" />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5vbgDuFgM4-lzbHCF9VsE9mkNHEBsULK7SKYn3s7v4lSCi66cy1CyBOkQaP0AE6OXyCo&usqp=CAU" alt="Logo Cliente 2" className="max-h-16" />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <img src="https://www.shutterstock.com/image-vector/fire-guard-logo-design-template-260nw-1766469506.jpg" alt="Logo Cliente 3" className="max-h-16" />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRy-PwxSb_lr9cTuDAQaTUY_VI6o3QfyJfL4FMA96LyS5AKY6hUaH5A8p-xQn4sTW2vHI&usqp=CAU" alt="Logo Cliente 4" className="max-h-16" />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <img src="https://img.freepik.com/vector-premium/logotipo-moderno-seguridad-contra-incendios-simbolo-llama-circulo-azul-proteccion-seguridad_591968-201.jpg?w=360" alt="Logo Cliente 5" className="max-h-16" />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUdTjgMqyh_O9Cz-BR9lPHbtQI3xSYjS2vohIxR_L7IdSKa1jQC2RK4dgddg63LFYt2Y&usqp=CAU" alt="Logo Cliente 6" className="max-h-16" />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-KEdAgXL0n70UknXgWqtqvWArTXgTPz3t9vh7T1CPUD4G5804bBuSAXO_KsyylJGO6o&usqp=CAU" alt="Logo Cliente 7" className="max-h-16" />
            </div>
            <div className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcaGgK0KjT0Rtbzo-gLVrlvbtG772ILZsDd-8vyAjtHxu_iQpzuO6bWbwYC6K2T1sIq_I&usqp=CAU" alt="Logo Cliente 8" className="max-h-16" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para trabajar con nosotros?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte con tus necesidades de protección contra incendios.
          </p>
          <a
            href="/contacto"
            className="inline-block bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-colors"
          >
            Contáctanos
          </a>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Nosotros

