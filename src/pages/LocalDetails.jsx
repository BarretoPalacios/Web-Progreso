"use client"

import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { ArrowLeft, Edit, Printer, Download } from "lucide-react"

const mockData = [
  {
    "DNI": "32132139",
    "NUMERO": "83",
    "PROPIETARIO": "B-023",
    "DATOS_PERSONALES": "GONZALES VEGA,ERICA MILAGROS",
    "LOCAL": "B-023",
    "GLOSARIO": "MANT.",
    "CUOTA_INICIAL": "300.00",
    "PROYECTO_ELECTRICO": "700.00",
    "PROYECTO_2": "",
    "SALDO_CANCELAR": "0.00",
    "POLLADA": "40.00",
    "ITSE": "44.00",
    "CONCEP_VARIOS": "",
    "ABR": "",
    "MAY": "",
    "MANT_AGO_2024": "40.00",
    "MANT_SET_2024": "40.00",
    "MANT_OCT_2024": "40.00",
    "MANT_NOV_2024": "40.00",
    "MANT_DIC_2024": "40.00",
    "MANT_ENE_2025": "40.00",
    "MANT_FEB_2025": "40.00",
    "TOTAL": "674.00",
    "Medidor": "",
    "TELEFONO": "",
  },
]

export default function LocalDetails() {
  const { localId } = useParams()
  const [localData, setLocalData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const data = mockData.find((item) => item["LOCAL"] === localId)
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
          <h1 className="text-2xl md:text-3xl font-bold text-gray-100">Local: {localData["LOCAL"]}</h1>
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
            <Info label="Propietario" value={localData["PROPIETARIO"]} />
            <Info label="Datos personales" value={localData["DATOS_PERSONALES"]} />
            <Info label="Cuota inicial" value={localData["CUOTA_INICIAL"]} />
            <Info label="Proyecto eléctrico" value={localData["PROYECTO_ELECTRICO"]} />
            <Info label="Proyecto 2" value={localData["PROYECTO_2"] || "N/A"} />
            <Info label="Saldo por cancelar" value={localData["SALDO_CANCELAR"]} />
            <Info label="Total" value={localData["TOTAL"]} />
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Pagos y Conceptos</h2>
          <div className="space-y-3">
            <Info label="Pollada" value={localData["POLLADA"]} />
            <Info label="ITSE" value={localData["ITSE"]} />
            <Info label="Conceptos varios" value={localData["CONCEP_VARIOS"] || "N/A"} />
            <Info label="Pago ABR" value={localData["ABR"] || "N/A"} />
            <Info label="Pago MAY" value={localData["MAY"] || "N/A"} />
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Medidor y Contacto</h2>
          <div className="space-y-3">
            <Info label="Medidor" value={localData["Medidor"] || "N/A"} />
            <Info label="Teléfono" value={localData["TELEFONO"] || "N/A"} />
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-12">
        <h2 className="text-lg font-semibold mb-4">Mantenimientos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Info label="AGO 2024" value={localData["MANT_AGO_2024"] || "-"} />
          <Info label="SET 2024" value={localData["MANT_SET_2024"] || "-"} />
          <Info label="OCT 2024" value={localData["MANT_OCT_2024"] || "-"} />
          <Info label="NOV 2024" value={localData["MANT_NOV_2024"] || "-"} />
          <Info label="DIC 2024" value={localData["MANT_DIC_2024"] || "-"} />
          <Info label="ENE 2025" value={localData["MANT_ENE_2025"] || "-"} />
          <Info label="FEB 2025" value={localData["MANT_FEB_2025"] || "-"} />
        </div>
      </div>
    </div>
  )
}

function Info({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-400">{label}:</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  )
}
