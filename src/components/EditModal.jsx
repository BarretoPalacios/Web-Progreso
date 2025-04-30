"use client";

import { useState, useEffect } from "react";
import { X, Save } from "lucide-react";

export default function EditModal({ isOpen, onClose, data, onSave }) {
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState("general");

  useEffect(() => {
    if (data) {
      setFormData({ ...data });
    }
  }, [data]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  // Agrupar campos por categorías para mejor organización
  const tabs = [
    { id: "general", label: "General" },
    { id: "mantenimiento", label: "Mantenimiento" },
    { id: "cuotas", label: "Cuotas PLUZ" },
    { id: "sedapal", label: "Sedapal" },
    { id: "consumo", label: "Consumo Agua" },
    { id: "otros", label: "Luz - Areas Comunes" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex justify-between items-center sticky top-0 bg-gray-900">
          <h2 className="text-xl font-bold text-white">
            Editar Local: {formData["LOCAL"]}
          </h2>
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
                <label className="block text-sm font-medium text-gray-300">
                  Cuota Inicial
                </label>
                <input
                  type="text"
                  name="CUOTA_INICIAL"
                  value={formData["CUOTA_INICIAL"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Proyecto Eléctrico
                </label>
                <input
                  type="text"
                  name="PROYECTO_ELECTRICO"
                  value={formData["PROYECTO_ELECTRICO"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Proyecto 2
                </label>
                <input
                  type="text"
                  name="PROYECTO_2"
                  value={formData["PROYECTO_2"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Pollada
                </label>
                <input
                  type="text"
                  name="POLLADA"
                  value={formData["POLLADA"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  ITSE
                </label>
                <input
                  type="text"
                  name="ITSE"
                  value={formData["ITSE"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  DNI
                </label>
                <input
                  type="text"
                  name="NUMERO_DNI"
                  value={formData["NUMERO_DNI"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Número
                </label>
                <input
                  type="text"
                  name="NUMERO"
                  value={formData["NUMERO"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Propietario
                </label>
                <input
                  type="text"
                  name="LOCAL"
                  value={formData["LOCAL"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Datos Personales
                </label>
                <input
                  type="text"
                  name="DATOS_PROPIETARIOS_SEGUN_SUNARP"
                  value={formData["DATOS_PROPIETARIOS_SEGUN_SUNARP"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Local
                </label>
                <input
                  type="text"
                  name="LOCAL"
                  value={formData["LOCAL"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>


              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Saldo por cancelar
                </label>
                <input
                  type="text"
                  name="SALDO_CANCELAR"
                  value={formData["SALDO_CANCELAR"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>


              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Conceptos varios
                </label>
                <input
                  type="text"
                  name="CONCEPTOS_VARIOS"
                  value={formData["CONCEPTOS_VARIOS"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  ABR
                </label>
                <input
                  type="text"
                  name="ABR"
                  value={formData["ABR"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  MAY
                </label>
                <input
                  type="text"
                  name="MAY"
                  value={formData["MAY"] || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white"
                />
              </div>
            </div>
          )}

          {activeTab === "mantenimiento" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "MANT_JUN_2024",
                "MANT_JUL_2024",
                "MANT_AGO_2024",
                "MANT_SET_2024",
                "MANT_OCT_2024",
                "MANT_NOV_2024",
                "MANT_DIC_2024",
                "MANT_ENE_2025",
                "MANT_FEB_2025",
                "MANT_MAR_2025",
                "MANT_ABR_2025",
              ].map((field) => (
                <div key={field} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    {field.replace(/_/g, " ")}
                  </label>
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
                "CUOTA_PLUZ_1_OCT_24\n Oct 24\n  ",
                "CUOTA_PLUZ_2_NOV_24",
                "CUOTA_PLUZ_3_DIC_24",
                "CUOTA_PLUZ_4_ENE_25",
                "CUOTA_PLUZ_5_FEB_25",
                "CUOTA_PLUZ_6_MAR_25",
                "CUOTA_PLUZ_7_ABR_25",
                "CUOTA_PLUZ_7_MAY_25",
                "CUOTA_PLUZ_7_JUN25",
                "CUOTA_PLUZ_7_JUL25",
                "CUOTA_PLUZ_7_AGO25",
                "CUOTA_PLUZ_11_SET_25 ",
                "CUOTA_PLUZ_12_OCT_25",
                "CUOTA_PLUZ_12_NOV_25",
                "CUOTA_PLUZ_12_DIC_25",
              ].map((field) => (
                <div key={field} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    CUOTA PLUZ {field.replace(/PLUZ_/g, "").replace(/_/g, " ")}
                  </label>
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
                "CUOTA_1_SEDAPAL_NOV_2024",
                "CUOTA_2_SEDAPAL_DIC_2024",
                "CUOTA_3_SEDAPAL_ENE_2025",
                "CUOTA_4_SEDAPAL_FEB_2025",
                "CUOTA_5_SEDAPAL_MAR_2025",
                "CUOTA_5_SEDAPAL_ABR_2025",
              ].map((field) => (
                <div key={field} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    {field.replace(/\n/g, " ").trim()}
                  </label>
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
                "CONSUMO_AGUA_NOV_2024",
                "CONSUMO_AGUA_DIC_2024",
                "CONSUMO_AGUA_ENE_2025",
                "CONSUMO_AGUA_FEB_2025",
                "CONSUMO_AGUA_MARZ_2025",
                "CONSUMO_AGUA_ABR_2025",
                "Medidor",
              ].map((field) => (
                <div key={field} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    {field.replace(/\n/g, " ").trim()}
                  </label>
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
                "LUZ \nMARZO",
              ].map((field) => (
                <div key={field} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    {field.replace(/\n/g, " ").trim()}
                  </label>
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
  );
}
