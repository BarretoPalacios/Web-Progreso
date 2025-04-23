"use client"

import { Building2, DollarSign, FileText } from "lucide-react"

export default function LocalCard({ data, onClick }) {
  // Calcular el total pendiente (simplificado para el ejemplo)
  const pendingAmount = Number.parseFloat(data["Saldo por cancelar"].replace(/[^\d.-]/g, "")) || 0

  return (
    <div
      className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500 transition-all cursor-pointer"
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{data.local}</h3>
          <span className="px-2 py-1 bg-purple-900 text-purple-200 text-xs font-medium rounded">{data.proyecto}</span>
        </div>

        <div className="space-y-3">
          <div className="flex items-center text-gray-300">
            <Building2 className="h-4 w-4 mr-2 text-gray-400" />
            <span className="text-sm">Proyecto: {data["PROYECTO 2"] || "N/A"}</span>
          </div>

          <div className="flex items-center text-gray-300">
            <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
            <span className="text-sm">Saldo pendiente: {data["Saldo por cancelar"]}</span>
          </div>

          <div className="flex items-center text-gray-300">
            <FileText className="h-4 w-4 mr-2 text-gray-400" />
            <span className="text-sm">Cuota inicial: {data["C.INICIAL"]}</span>
          </div>
        </div>
      </div>

      <div className="px-5 py-3 bg-gray-800 flex justify-between items-center">
        <div className="text-sm font-medium">
          {pendingAmount > 0 ? (
            <span className="text-red-400">Pendiente</span>
          ) : (
            <span className="text-green-400">Pagado</span>
          )}
        </div>
        <button
          className="text-sm text-purple-400 hover:text-purple-300"
          onClick={(e) => {
            e.stopPropagation()
            onClick()
          }}
        >
          Ver detalles
        </button>
      </div>
    </div>
  )
}
