import { Shield, CheckCircle, Flame, Droplet, Bell, Building, Factory, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../componentes/Footer';

const Especialidades = () => {
  return (
    <div>
      {/* Hero Section */}
      
      <section className="bg-[url('/img/especialidades-padex.jpg')] bg-cover bg-center text-white py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestras Especialidades</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Soluciones especializadas en sistemas contra incendios para diferentes sectores y necesidades.
          </p>
        </div>
      </section>

      {/* Specialties Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Áreas de Especialización</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              En Engineers Pandex nos especializamos en diversas áreas de protección contra incendios, ofreciendo soluciones integrales y adaptadas a cada necesidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Specialty 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Flame className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Sistemas de Rociadores Automáticos</h3>
                  <p className="text-gray-600 mb-4">
                    Diseño, instalación y mantenimiento de sistemas de rociadores automáticos para todo tipo de edificaciones, cumpliendo con las normativas NFPA 13, 13R y 13D.
                  </p>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Rociadores para riesgos ligeros, ordinarios y extra</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Sistemas de tubería húmeda, seca y preacción</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Cálculos hidráulicos especializados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Pruebas y certificación de sistemas</span>
                    </li>
                  </ul>
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhq1AFP2kR9CdzQXeKWqTG52hUxbMDZEGqVQ&s" 
                    alt="Sistema de Rociadores" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Specialty 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Bell className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Sistemas de Detección y Alarma</h3>
                  <p className="text-gray-600 mb-4">
                    Implementación de sistemas avanzados de detección temprana y alarma contra incendios, siguiendo la normativa NFPA 72.
                  </p>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Detectores de humo, calor y llama</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Paneles de control inteligentes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Sistemas de notificación audiovisual</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Monitoreo remoto y sistemas direccionables</span>
                    </li>
                  </ul>
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPd1owYE4YPm94GbzBB4gSmEyI7kFgYSJ1oeUEcwD7KyhUxa_c-YQbjyqPqZoRKMBrcs&usqp=CAU" 
                    alt="Sistema de Detección" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Specialty 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Droplet className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Sistemas de Extinción Especiales</h3>
                  <p className="text-gray-600 mb-4">
                    Diseño e instalación de sistemas de extinción especiales para áreas críticas y equipos sensibles.
                  </p>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Sistemas de agua nebulizada</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Sistemas de espuma</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Sistemas de agentes limpios (FM-200, Novec 1230)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Sistemas de CO2 y gases inertes</span>
                    </li>
                  </ul>
                  <img 
                    src="https://img1.wsimg.com/isteam/ip/175c0c32-d5b1-46fd-a399-6f642b4711f1/Fire-Sprinkler-Systems_sm.jpg/:/rs=w:1240,h:620,cg:true,m/cr=w:1240,h:620" 
                    alt="Sistema de Extinción Especial" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Specialty 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Protección Pasiva contra Incendios</h3>
                  <p className="text-gray-600 mb-4">
                    Implementación de soluciones de protección pasiva para contener la propagación del fuego y el humo.
                  </p>
                  <ul className="text-gray-600 mb-6 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Sellado cortafuego</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Barreras contra humo y fuego</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Recubrimientos intumescentes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Puertas y compuertas cortafuego</span>
                    </li>
                  </ul>
                  <img 
                    src="https://gruponk.com.pe/wp-content/uploads/2024/11/Sistemas-de-proteccion-pasiva-contra-incendios-Seguridad-esencial-para-tu-hogar.jpg" 
                    alt="Protección Pasiva" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Specialties */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Especialización por Sectores</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones adaptadas a las necesidades específicas de cada sector industrial y comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Industry 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Factory className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Industria Manufacturera</h3>
              <p className="text-gray-600 mb-4">
                Sistemas especializados para fábricas y plantas de producción, considerando los riesgos específicos de cada proceso industrial.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Protección para áreas de alto riesgo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Sistemas para líquidos inflamables</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Protección de maquinaria especializada</span>
                </li>
              </ul>
            </div>

            {/* Industry 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Centros de Datos</h3>
              <p className="text-gray-600 mb-4">
                Soluciones de protección para centros de datos y salas de servidores, minimizando el riesgo de daños a equipos críticos.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Sistemas de detección temprana</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Agentes limpios que no dañan equipos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Monitoreo 24/7 y respuesta automática</span>
                </li>
              </ul>
            </div>

            {/* Industry 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Home className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Hospitales y Centros de Salud</h3>
              <p className="text-gray-600 mb-4">
                Sistemas diseñados específicamente para entornos sanitarios, considerando la seguridad de pacientes y personal médico.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Evacuación por fases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Protección para áreas críticas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Cumplimiento de normativas sanitarias</span>
                </li>
              </ul>
            </div>

            {/* Industry 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Almacenes y Centros Logísticos</h3>
              <p className="text-gray-600 mb-4">
                Protección para grandes espacios de almacenamiento, considerando la altura de estanterías y tipos de mercancías.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Sistemas ESFR para gran altura</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Protección para mercancías especiales</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Sistemas de control de humos</span>
                </li>
              </ul>
            </div>

            {/* Industry 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Hoteles y Edificios Residenciales</h3>
              <p className="text-gray-600 mb-4">
                Sistemas diseñados para garantizar la seguridad de los ocupantes en edificios de gran altura y con múltiples habitaciones.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Sistemas de evacuación por voz</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Protección para áreas comunes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Sistemas integrados de seguridad</span>
                </li>
              </ul>
            </div>

            {/* Industry 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-100 p-3 rounded-full w-fit mb-6">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Industria Petrolera y Química</h3>
              <p className="text-gray-600 mb-4">
                Soluciones especializadas para entornos de alto riesgo con presencia de sustancias inflamables y explosivas.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Sistemas de espuma de alta expansión</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Protección para tanques de almacenamiento</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <span>Sistemas de diluvio y refrigeración</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Tecnologías Avanzadas</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Utilizamos las tecnologías más avanzadas para ofrecer soluciones de protección contra incendios eficientes y confiables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technology 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Modelado BIM</h3>
              <p className="text-gray-600 mb-4">
                Utilizamos Building Information Modeling (BIM) para diseñar sistemas contra incendios de manera precisa e integrada con otros sistemas del edificio.
              </p>
              <img 
                src="https://www.aram.pe/images/services/og/683-modelado-de-bim-de-proyectos-de-edificaciones-6266b64258e91.jpg" 
                alt="Modelado BIM" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Technology 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Simulación Computacional de Incendios</h3>
              <p className="text-gray-600 mb-4">
                Realizamos simulaciones de dinámica de fluidos computacional (CFD) para predecir el comportamiento del fuego y optimizar los sistemas de protección.
              </p>
              <img 
                src="https://www.cepreven.com/fotos/noticias/noticia_612.jpg" 
                alt="Simulación CFD" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Technology 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Sistemas Inteligentes de Monitoreo</h3>
              <p className="text-gray-600 mb-4">
                Implementamos sistemas de monitoreo remoto que permiten la supervisión en tiempo real y el diagnóstico preventivo de los sistemas contra incendios.
              </p>
              <img 
                src="https://iac-intl.com/wp-content/uploads/2021/01/IAC_Smart_PLant_Remote_Monitoring_System_Sensor_Box_600x496px.jpg" 
                alt="Monitoreo Inteligente" 
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Technology 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Integración con Sistemas de Edificios Inteligentes</h3>
              <p className="text-gray-600 mb-4">
                Nuestros sistemas se integran con plataformas de gestión de edificios (BMS) para una operación coordinada y eficiente de todos los sistemas de seguridad.
              </p>
              <img 
                src="https://www.mundohvacr.com/wp-content/uploads/2011/05/integracion-de-sistemas.jpg" 
                alt="Edificios Inteligentes" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Certificaciones y Normativas</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Todos nuestros sistemas cumplen con las normativas y estándares internacionales más exigentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Certification 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/NFPA_logo.svg/1200px-NFPA_logo.svg.png" 
                  alt="NFPA" 
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">NFPA</h3>
              <p className="text-gray-600 text-sm">
                National Fire Protection Association
              </p>
            </div>

            {/* Certification 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYD6n6Tb-bSHtcKLa5a9Jl1VRl1UdDCcDpfA&s" 
                  alt="ISO 9001" 
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">ISO 9001</h3>
              <p className="text-gray-600 text-sm">
                Sistema de Gestión de Calidad
              </p>
            </div>

            {/* Certification 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://blog.qrfs.com/wp-content/uploads/2019/08/fm-200.jpg" 
                  alt="FM Global" 
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">FM Global</h3>
              <p className="text-gray-600 text-sm">
                Factory Mutual Approved
              </p>
            </div>

            {/* Certification 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-red-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://blog.qrfs.com/wp-content/uploads/2019/08/ul-mark-200.png" 
                  alt="UL" 
                  className="h-12 w-12"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">UL Listed</h3>
              <p className="text-gray-600 text-sm">
                Underwriters Laboratories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Casos de Éxito</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Conozca algunos de nuestros proyectos más destacados en diferentes sectores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://elmen.pe/wp-content/uploads/2024/10/Megaplaza.jpg" 
                alt="Centro Comercial Mega Plaza" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Centro Comercial Mega Plaza</h3>
                <p className="text-gray-600 mb-4">
                  Implementación de un sistema integral de protección contra incendios para un centro comercial de 120,000 m².
                </p>
                <Link to="#" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
                  Ver caso completo
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://cdn.www.gob.pe/uploads/document/file/336947/Paciente_N.N._del_hospital_nacional_dos_de_mayo_solicita_apoyo_para_encontrar_a_sus_familiares20190625-15927-1fdo8o6.jpg" 
                alt="Hospital Nacional" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Hospital Nacional</h3>
                <p className="text-gray-600 mb-4">
                  Diseño e instalación de sistemas de protección contra incendios para un hospital de 15 pisos con áreas críticas.
                </p>
                <Link to="#" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
                  Ver caso completo
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://postgradoindustrial.com/wp-content/uploads/planta-quimica.jpg" 
                alt="Planta Industrial Química" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Planta Industrial Química</h3>
                <p className="text-gray-600 mb-4">
                  Implementación de sistemas especializados de extinción para una planta química con materiales peligrosos.
                </p>
                <Link to="#" className="text-red-600 hover:text-red-700 font-medium inline-flex items-center">
                  Ver caso completo
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Necesita un sistema especializado?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contáctenos hoy mismo para una consulta gratuita y descubra cómo nuestras soluciones especializadas pueden proteger su negocio o propiedad.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-colors"
          >
            Solicitar Asesoría Especializada
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Especialidades;
