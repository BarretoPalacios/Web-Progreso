import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X, Shield } from "lucide-react"

const Navbar = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Sidebar toggle button (visible on medium screens) */}
            {/* <button
              className="hidden md:block text-gray-600 mr-3 focus:outline-none"
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              <Menu className="h-6 w-6" />
            </button> */}

            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Shield className="h-8 w-8 text-red-600" />
              <span className="text-xl font-bold text-gray-800">Engineers pandex</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-medium" : "text-gray-600 hover:text-red-600 transition-colors"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-medium" : "text-gray-600 hover:text-red-600 transition-colors"
              }
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-medium" : "text-gray-600 hover:text-red-600 transition-colors"
              }
            >
              Servicios
            </NavLink>
            <NavLink
              to="/especialidades"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-medium" : "text-gray-600 hover:text-red-600 transition-colors"
              }
            >
              Especialidades
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-medium" : "text-gray-600 hover:text-red-600 transition-colors"
              }
            >
              Contacto
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 py-2 space-y-3 min-h-screen">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 px-4 ${isActive ? "bg-red-50 text-red-600 font-medium" : "text-gray-600 hover:bg-red-50 hover:text-red-600"}`
              }
              onClick={closeMenu}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/nosotros"
              className={({ isActive }) =>
                `block py-2 px-4 ${isActive ? "bg-red-50 text-red-600 font-medium" : "text-gray-600 hover:bg-red-50 hover:text-red-600"}`
              }
              onClick={closeMenu}
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/servicios"
              className={({ isActive }) =>
                `block py-2 px-4 ${isActive ? "bg-red-50 text-red-600 font-medium" : "text-gray-600 hover:bg-red-50 hover:text-red-600"}`
              }
              onClick={closeMenu}
            >
              Servicios
            </NavLink>
            <NavLink
              to="/especialidades"
              className={({ isActive }) =>
                `block py-2 px-4 ${isActive ? "bg-red-50 text-red-600 font-medium" : "text-gray-600 hover:bg-red-50 hover:text-red-600"}`
              }
              onClick={closeMenu}
            >
              Especialidades
            </NavLink>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                `block py-2 px-4 ${isActive ? "bg-red-50 text-red-600 font-medium" : "text-gray-600 hover:bg-red-50 hover:text-red-600"}`
              }
              onClick={closeMenu}
            >
              Contacto
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar

