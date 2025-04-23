"use client"

import { useState } from "react"
import { Download, Filter, BarChart3, PieChart } from "lucide-react"

export default function Reports() {
  const [reportType, setReportType] = useState("payments")

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-100">Reportes</h1>

        <div className="flex gap-2">
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="bg-gray-900 border border-gray-700 text-gray-100 text-sm rounded-lg p-2.5 focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="payments">Pagos</option>
            <option value="maintenance">Mantenimiento</option>
            <option value="water">Consumo de agua</option>
          </select>

          <button className="p-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg">
            <Filter className="h-5 w-5" />
            <span className="sr-only">Filtros</span>
          </button>

          <button className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg text-sm flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Exportar</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Total recaudado</h2>
          <p className="text-3xl font-bold text-purple-400">S/ 45,280.00</p>
          <p className="text-sm text-gray-400 mt-1">+12% respecto al mes anterior</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Pagos pendientes</h2>
          <p className="text-3xl font-bold text-red-400">S/ 12,450.00</p>
          <p className="text-sm text-gray-400 mt-1">8 locales con pagos pendientes</p>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-2">Tasa de cumplimiento</h2>
          <p className="text-3xl font-bold text-green-400">78%</p>
          <p className="text-sm text-gray-400 mt-1">+5% respecto al mes anterior</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Pagos por proyecto</h2>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </div>

          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-400">Gráfico de barras aquí</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Distribución de pagos</h2>
            <PieChart className="h-5 w-5 text-gray-400" />
          </div>

          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-400">Gráfico circular aquí</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Últimos pagos registrados</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-4">Local</th>
                <th className="text-left py-3 px-4">Proyecto</th>
                <th className="text-left py-3 px-4">Concepto</th>
                <th className="text-right py-3 px-4">Monto</th>
                <th className="text-right py-3 px-4">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  local: "X-034",
                  proyecto: "PLAZA NORTE",
                  concepto: "Mantenimiento",
                  monto: "S/ 120.00",
                  fecha: "15/04/2025",
                },
                {
                  local: "X-035",
                  proyecto: "PLAZA NORTE",
                  concepto: "Cuota PLUZ",
                  monto: "S/ 500.00",
                  fecha: "14/04/2025",
                },
                {
                  local: "X-036",
                  proyecto: "PLAZA NORTE",
                  concepto: "Consumo agua",
                  monto: "S/ 33.00",
                  fecha: "12/04/2025",
                },
                {
                  local: "X-037",
                  proyecto: "MEGA PLAZA",
                  concepto: "Mantenimiento",
                  monto: "S/ 120.00",
                  fecha: "10/04/2025",
                },
                {
                  local: "X-038",
                  proyecto: "MEGA PLAZA",
                  concepto: "Cuota PLUZ",
                  monto: "S/ 500.00",
                  fecha: "08/04/2025",
                },
              ].map((payment, index) => (
                <tr key={index} className="border-b border-gray-800">
                  <td className="py-3 px-4">{payment.local}</td>
                  <td className="py-3 px-4">{payment.proyecto}</td>
                  <td className="py-3 px-4">{payment.concepto}</td>
                  <td className="py-3 px-4 text-right">{payment.monto}</td>
                  <td className="py-3 px-4 text-right">{payment.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
