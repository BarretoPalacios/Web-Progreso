"use client"

import { useState, useEffect } from "react"
import { X, Save } from "lucide-react"

export default function EditModal({ isOpen, onClose, data, onSave }) {
  const [formData, setFormData] = useState({})
  const [activeTab, setActiveTab] = useState("general")

  useEffect(() => {
    if (data) {
      setFormData({ ...data })
    }
  }, [data])

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  // Agrupar campos por categorías para mejor organización
  const tabs = [
    { id: "general", label: "General" },
    { id: "mantenimiento", label: "Mantenimiento" },
    { id: "cuotas", label: "Cuotas PLUZ" },
    { id: "sedapal", label: "Sedapal" },
    { id: "consumo", label: "Consumo Agua" },
    { id: "otros", label: "Otros Gastos" },
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex justify-between items-center sticky top-0 bg-gray-900">
          <h2 className="text-xl font-bold text-white">Editar Local: {data.local}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="h-30 border-b  px-4 flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-3 px-4 font-medium text-sm whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-purple-400  border-purple-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="overflow-y-auto flex-1 p-4">
          {activeTab === "general" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Local</label>
                <input
                  type="text"
                  name="local"
                  value={formData.local || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Cuota Inicial</label>
                <input
                  type="text"
                  name="C.INICIAL"
                  value={formData["C.INICIAL"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Proyecto</label>
                <input
                  type="text"
                  name="proyecto"
                  value={formData.proyecto || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Proyecto 2</label>
                <input
                  type="text"
                  name="PROYECTO 2"
                  value={formData["PROYECTO 2"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Saldo por cancelar</label>
                <input
                  type="text"
                  name="Saldo por cancelar"
                  value={formData["Saldo por cancelar"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Pollada</label>
                <input
                  type="text"
                  name="pollada"
                  value={formData.pollada || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">ITSE</label>
                <input
                  type="text"
                  name="ITSE"
                  value={formData.ITSE || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Conceptos varios</label>
                <input
                  type="text"
                  name="conceptos varios"
                  value={formData["conceptos varios"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">ABR</label>
                <input
                  type="text"
                  name="ABR"
                  value={formData.ABR || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">MAY</label>
                <input
                  type="text"
                  name="MAY"
                  value={formData.MAY || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>
            </div>
          )}

          {activeTab === "mantenimiento" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "MANT JUN 2024",
                "MANT. JUL 2024",
                "MANT AGO 2024",
                "MANT SET 2024",
                "MANT OCT 2024",
                "MANT NOV 2024",
                "MANT DIC 2024",
                "MANT ENE 2025",
                "MANT FEB 2025",
                "MANT MAR 2025",
                "MANT ABR 2025",
              ].map((field) => (
                <div key={field} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">{field}</label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field] || ""}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === "cuotas" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "CUOTA PLUZ 1 Oct 24",
                "CUOTA PLUZ 2 Nov 24",
                "CUOTA PLUZ 3 Dic 24",
                "CUOTA PLUZ 4 Ene 25",
                "CUOTA PLUZ 5 Feb 25",
                "CUOTA PLUZ 6 Mar 25",
                "CUOTA PLUZ 7 Abr 25",
                "CUOTA PLUZ 7 May 25",
                "CUOTA PLUZ 7 Jun25",
                "CUOTA PLUZ 7 Jul25",
                "CUOTA PLUZ 7 Ago25",
                "CUOTA PLUZ 11 SET 25",
                "CUOTA PLUZ 12 OCT 25",
                "CUOTA PLUZ 12 NOV 25",
                "CUOTA PLUZ 12 DIC 25",
              ].map((field) => (
                <div key={field} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">{field}</label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field] || ""}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === "sedapal" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "CUOTA 1 SEDAPAL NOV 2024",
                "CUOTA 2 SEDAPAL DIC 2024",
                "CUOTA 3 SEDAPAL ENE 2025",
                "CUOTA 4 SEDAPAL FEB 2025",
                "CUOTA 5 SEDAPAL MAR 2025",
                "CUOTA 5 SEDAPAL ABR 2025",
              ].map((field) => (
                <div key={field} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">{field}</label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field] || ""}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === "consumo" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "CONSUMO AGUA NOV 2024",
                "CONSUMO AGUA DIC 2024",
                "CONSUMO AGUA ENE 2025",
                "CONSUMO AGUA FEB 2025",
                "CONSUMO AGUA MARZ 2025",
                "CONSUMO AGUA ABR 2025",
                "Medidor",
              ].map((field) => (
                <div key={field} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">{field}</label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field] || ""}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === "otros" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "TOTAL",
                "AREAS COMUNES ENERO",
                "LUZ ENERO",
                "AREAS COMUNES FEBRERO",
                "LUZ FEBRERO",
                "AREAS COMUNES MARZO",
                "LUZ MARZO",
              ].map((field) => (
                <div key={field} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">{field}</label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field] || ""}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                  />
                </div>
              ))}
            </div>
          )}
        </form>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 flex justify-end gap-3 sticky bottom-0 bg-gray-900">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-md text-sm font-medium"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm font-medium flex items-center gap-2"
          >
            <Save className="h-4 w-4" />
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  )
}
