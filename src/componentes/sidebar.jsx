// "use client"

// import { useState, useEffect } from "react"
// import { Link, NavLink, useLocation } from "react-router-dom"
// import {
//   Shield,
//   Home,
//   Users,
//   Briefcase,
//   Flame,
//   Phone,
//   ChevronRight,
//   X,
//   Menu,
//   Mail,
//   MapPin,
//   Clock,
//   ExternalLink,
// } from "lucide-react"

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   const location = useLocation()
//   const [activeSection, setActiveSection] = useState("")

//   // Update active section based on current path
//   useEffect(() => {
//     const path = location.pathname
//     if (path === "/") setActiveSection("inicio")
//     else if (path === "/nosotros") setActiveSection("nosotros")
//     else if (path === "/servicios") setActiveSection("servicios")
//     else if (path === "/especialidades") setActiveSection("especialidades")
//     else if (path === "/contacto") setActiveSection("contacto")
//   }, [location])

//   return (
//     <>
//       {/* Mobile sidebar backdrop */}
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
//           isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={toggleSidebar}
//       ></div>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full bg-white shadow-xl z-50 transition-transform duration-300 transform w-72 md:w-64 ${
//           isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
//         } md:sticky md:top-0 md:z-0`}
//       >
//         {/* Sidebar Header */}
//         <div className="p-4 border-b flex justify-between items-center">
//           <Link to="/" className="flex items-center space-x-2" onClick={() => toggleSidebar()}>
//             <Shield className="h-8 w-8 text-red-600" />
//             <span className="text-xl font-bold text-gray-800">Engineers Pandex</span>
//           </Link>
//           <button
//             className="md:hidden text-gray-500 hover:text-gray-700"
//             onClick={toggleSidebar}
//             aria-label="Cerrar menú"
//           >
//             <X className="h-6 w-6" />
//           </button>
//         </div>

//         {/* Sidebar Content */}
//         <div className="py-4 overflow-y-auto h-[calc(100vh-64px)]">
//           {/* Navigation Links */}
//           <div className="px-4 mb-6">
//             <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Navegación</h3>
//             <nav className="space-y-1">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
//                     isActive ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
//                   }`
//                 }
//                 onClick={() => toggleSidebar()}
//               >
//                 <Home className="mr-3 h-5 w-5" />
//                 Inicio
//               </NavLink>
//               <NavLink
//                 to="/nosotros"
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
//                     isActive ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
//                   }`
//                 }
//                 onClick={() => toggleSidebar()}
//               >
//                 <Users className="mr-3 h-5 w-5" />
//                 Nosotros
//               </NavLink>
//               <NavLink
//                 to="/servicios"
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
//                     isActive ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
//                   }`
//                 }
//                 onClick={() => toggleSidebar()}
//               >
//                 <Briefcase className="mr-3 h-5 w-5" />
//                 Servicios
//               </NavLink>
//               <NavLink
//                 to="/especialidades"
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
//                     isActive ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
//                   }`
//                 }
//                 onClick={() => toggleSidebar()}
//               >
//                 <Flame className="mr-3 h-5 w-5" />
//                 Especialidades
//               </NavLink>
//               <NavLink
//                 to="/contacto"
//                 className={({ isActive }) =>
//                   `flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
//                     isActive ? "bg-red-50 text-red-600" : "text-gray-700 hover:bg-gray-100"
//                   }`
//                 }
//                 onClick={() => toggleSidebar()}
//               >
//                 <Phone className="mr-3 h-5 w-5" />
//                 Contacto
//               </NavLink>
//             </nav>
//           </div>

//           {/* Quick Contact */}
//           <div className="px-4 mb-6">
//             <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Contacto Rápido</h3>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-start">
//                 <Phone className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
//                 <div>
//                   <p className="text-gray-700 font-medium">Teléfono</p>
//                   <a href="tel:+51123456789" className="text-gray-600 hover:text-red-600 transition-colors">
//                     +51 123 456 789
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <Mail className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
//                 <div>
//                   <p className="text-gray-700 font-medium">Email</p>
//                   <a
//                     href="mailto:info@engineerspandex.com"
//                     className="text-gray-600 hover:text-red-600 transition-colors"
//                   >
//                     info@engineerspandex.com
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <MapPin className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
//                 <div>
//                   <p className="text-gray-700 font-medium">Dirección</p>
//                   <p className="text-gray-600">Av. Principal 123, Lima, Perú</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <Clock className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
//                 <div>
//                   <p className="text-gray-700 font-medium">Horario</p>
//                   <p className="text-gray-600">Lun-Vie: 8:00 AM - 6:00 PM</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Emergency Contact */}
//           <div className="px-4 mb-6">
//             <div className="bg-red-50 p-4 rounded-lg">
//               <h3 className="font-bold text-red-700 mb-2">Emergencias 24/7</h3>
//               <p className="text-sm text-red-600 mb-2">Servicio de atención de emergencias disponible las 24 horas.</p>
//               <a
//                 href="tel:+51987654321"
//                 className="inline-flex items-center text-sm font-medium text-red-700 hover:text-red-800"
//               >
//                 +51 987 654 321
//                 <ExternalLink className="ml-1 h-4 w-4" />
//               </a>
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="px-4">
//             <Link
//               to="/contacto"
//               className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
//               onClick={() => toggleSidebar()}
//             >
//               Solicitar Cotización
//               <ChevronRight className="ml-2 h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Mobile sidebar toggle button */}
//       <button
//         className="fixed bottom-4 right-4 md:hidden bg-red-600 text-white p-3 rounded-full shadow-lg z-30"
//         onClick={toggleSidebar}
//         aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
//       >
//         <Menu className="h-6 w-6" />
//       </button>
//     </>
//   )
// }

// export default Sidebar

