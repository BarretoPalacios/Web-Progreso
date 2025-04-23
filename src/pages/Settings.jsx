"use client"

import { useState } from "react"
import { Save } from "lucide-react"

export default function Settings() {
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    language: "es",
    currency: "PEN",
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Configuración guardada:", settings)
    // Aquí iría la lógica para guardar la configuración
  }

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-100 mb-8">Configuración</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-6">Preferencias generales</h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Idioma</label>
                  <select
                    name="language"
                    value={settings.language}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="es">Español</option>
                    <option value="en">Inglés</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Moneda</label>
                  <select
                    name="currency"
                    value={settings.currency}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="PEN">Soles (S/)</option>
                    <option value="USD">Dólares ($)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="darkMode"
                    checked={settings.darkMode}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500 focus:ring-offset-gray-900"
                  />
                  <span className="ml-2 text-sm text-gray-300">Modo oscuro</span>
                </label>
              </div>

              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={settings.notifications}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500 focus:ring-offset-gray-900"
                  />
                  <span className="ml-2 text-sm text-gray-300">Activar notificaciones</span>
                </label>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm font-medium flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Guardar configuración</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Información de la cuenta</h2>
            <div className="space-y-3">
              <div>
                <span className="text-gray-400 text-sm">Usuario:</span>
                <p className="font-medium">admin@example.com</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Rol:</span>
                <p className="font-medium">Administrador</p>
              </div>
              <div>
                <span className="text-gray-400 text-sm">Último acceso:</span>
                <p className="font-medium">22/04/2025, 8:09 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
