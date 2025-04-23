"use client"

import { Link } from "react-router-dom"
import { Menu, Search, Bell } from "lucide-react"

export default function Navbar({ onMenuClick }) {
  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-30">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={onMenuClick} className="md:hidden p-2 rounded-md hover:bg-gray-800">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menú</span>
          </button>

          <Link to="/" className="flex items-center gap-2">
            <span className="bg-purple-600 text-white p-1 rounded">GL</span>
            <span className="font-bold text-xl hidden sm:inline-block">Gestión de Locales</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-4 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div> */}

          <button className="p-2 rounded-md hover:bg-gray-800 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-purple-500 rounded-full"></span>
            <span className="sr-only">Notificaciones</span>
          </button>

          <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
            <span className="font-medium text-sm">AD</span>
          </div>
        </div>
      </div>
    </header>
  )
}
