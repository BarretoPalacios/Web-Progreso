"use client"

import { Link, useLocation } from "react-router-dom"
import { X, Home, Settings, FileBarChart, Search, Building2 } from "lucide-react"

export default function Sidebar({ open, onClose }) {
  const location = useLocation()

  const links = [
    { to: "/", label: "Dashboard", icon: <Home className="h-5 w-5" /> },
    { to: "/reports", label: "Reportes", icon: <FileBarChart className="h-5 w-5" /> },
    { to: "/settings", label: "Configuración", icon: <Settings className="h-5 w-5" /> },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <>
      {/* Overlay para móvil */}
      {open && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={onClose}></div>}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-50 h-full w-64 bg-gray-900 border-r border-gray-800 transform transition-transform duration-200 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 border-b border-gray-800 flex justify-between items-center">
          <h2 className="font-bold text-xl">Menú</h2>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-800 md:hidden">
            <X className="h-5 w-5" />
            <span className="sr-only">Cerrar menú</span>
          </button>
        </div>

        <div className="p-4">
          {/* <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar local..."
              className="bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div> */}

          <nav className="space-y-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive(link.to) ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* <div className="mt-6 pt-6 border-t border-gray-800">
            <h3 className="text-xs uppercase text-gray-500 font-semibold mb-3 px-3">Proyectos</h3>
            <nav className="space-y-1">
              {["PLAZA NORTE", "MEGA PLAZA", "REAL PLAZA"].map((project) => (
                <Link
                  key={project}
                  to={`/?project=${encodeURIComponent(project)}`}
                  className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm">{project}</span>
                </Link>
              ))}
            </nav>
          </div> */}
        </div>
      </aside>
    </>
  )
}
