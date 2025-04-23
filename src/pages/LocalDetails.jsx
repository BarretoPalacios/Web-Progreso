"use client"

import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { mockData } from "../data/mockData"
import { ArrowLeft, Edit, Printer, Download } from "lucide-react"

export default function LocalDetails() {
  const { localId } = useParams()
  const [localData, setLocalData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular carga de datos
    setLoading(true)

    // Buscar el local en los datos de ejemplo
    const data = mockData.find((item) => item.local === localId)

    setTimeout(() => {
      setLocalData(data || null)
      setLoading(false)
    }, 500)
  }, [localId])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (!localData) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Local no encontrado</h2>
        <p className="text-gray-400 mb-6">No se encontró información para el local {localId}</p>
        <Link to="/" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md">
          Volver al Dashboard
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <Link to="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-2">
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Volver al Dashboard</span>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-100">Local: {localData.local}</h1>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg text-sm flex items-center gap-2">
            <Printer className="h-4 w-4" />
            <span>Imprimir</span>
          </button>
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg text-sm flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Exportar</span>
          </button>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm flex items-center gap-2">
            <Edit className="h-4 w-4" />
            <span>Editar</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Información General</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Proyecto:</span>
              <span className="font-medium">{localData.proyecto}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Proyecto 2:</span>
              <span className="font-medium">{localData["PROYECTO 2"] || "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Cuota Inicial:</span>
              <span className="font-medium">{localData["C.INICIAL"]}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Saldo por cancelar:</span>
              <span className="font-medium text-red-400">{localData["Saldo por cancelar"]}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Total:</span>
              <span className="font-medium">{localData.TOTAL}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Conceptos Adicionales</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Pollada:</span>
              <span className="font-medium">{localData.pollada}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">ITSE:</span>
              <span className="font-medium">{localData.ITSE}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Conceptos varios:</span>
              <span className="font-medium">{localData["conceptos varios"]}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">ABR:</span>
              <span className="font-medium">{localData.ABR}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">MAY:</span>
              <span className="font-medium">{localData.MAY}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Medidor</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Número de medidor:</span>
              <span className="font-medium">{localData.Medidor}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Último consumo:</span>
              <span className="font-medium">{localData["CONSUMO AGUA ABR 2025"]}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Historial de Mantenimiento</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4">Periodo</th>
                  <th className="text-right py-3 px-4">Monto</th>
                  <th className="text-right py-3 px-4">Estado</th>
                </tr>
              </thead>
              <tbody>
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
                ].map((period) => (
                  <tr key={period} className="border-b border-gray-800">
                    <td className="py-3 px-4">{period}</td>
                    <td className="py-3 px-4 text-right">{localData[period]}</td>
                    <td className="py-3 px-4 text-right">
                      <span className="inline-block px-2 py-1 rounded-full text-xs bg-green-900 text-green-300">
                        Pagado
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
