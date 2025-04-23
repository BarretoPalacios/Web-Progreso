"use client"

import { useState, useEffect } from "react"
import { Search, Filter } from "lucide-react"
import LocalCard from "../components/LocalCard"
import EditModal from "../components/EditModal"
import { useNavigate, useLocation } from "react-router-dom"

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [selectedLocal, setSelectedLocal] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const location = useLocation()

  function parseCSV(csvText) {
    const lines = csvText.trim().split("\n");
    const headers = lines[0].split(",");
  
    return lines.slice(1).map((line) => {
      const values = line.split(",");
      const entry = {};
      headers.forEach((header, i) => {
        entry[header.trim()] = values[i]?.trim();
      });
      return entry;
    });
  }
  

  useEffect(() => {
    const fetchData = async () => {
      const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS4T6YXfLFCaMW44TiMCd9KTTm1QopVK9Fv4ZOo8gCeudZzExG8G-svE3StNUIqOZMRAT-8j5dXNSwf/pub?output=csv";
      try {
        const response = await fetch(csvUrl);
        const csvText = await response.text();
        const jsonData = parseCSV(csvText);
        setData(jsonData);
        console.log("Datos cargados:", jsonData);
      } catch (error) {
        console.error("Error al cargar datos del sheet:", error);
      }
    };
  
    fetchData();
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) return

    // Filtrar datos basados en el término de búsqueda (case insensitive)
    const results = data.filter((item) => item.local.toLowerCase().includes(searchTerm.toLowerCase()))

    setSearchResults(results)
    setHasSearched(true)

    // Actualizar la URL con el término de búsqueda
    const params = new URLSearchParams(location.search)
    params.set("search", searchTerm)
    navigate(`?${params.toString()}`, { replace: true })
  }

  const handleCardClick = (local) => {
    setSelectedLocal(local)
    setIsModalOpen(true)

    // También podríamos navegar a una página de detalles
    // navigate(`/local/${local.local}`)
  }

  const handleSave = (updatedData) => {
    console.log("Datos actualizados:", updatedData)
    // Aquí iría la lógica para guardar en el backend
    setIsModalOpen(false)
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-100">Dashboard</h1>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="bg-gray-900 border border-gray-700 text-gray-100 text-sm rounded-lg block w-full pl-10 p-2.5 focus:ring-purple-500 focus:border-purple-500"
              placeholder="Buscar local (ej: X-034)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <button
            onClick={handleSearch}
            className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg text-sm"
          >
            Buscar
          </button>
          <button className="p-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg">
            <Filter className="h-5 w-5" />
            <span className="sr-only">Filtros</span>
          </button>
        </div>
      </div>

      {/* Resultados */}
      {hasSearched && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-200">Resultados ({searchResults.length})</h2>

            <div className="flex gap-2">
              <select className="bg-gray-800 border border-gray-700 text-gray-200 text-sm rounded-lg p-2.5 focus:ring-purple-500 focus:border-purple-500">
                <option value="">Ordenar por</option>
                <option value="local">Código (A-Z)</option>
                <option value="saldo">Saldo pendiente</option>
              </select>
            </div>
          </div>

          {searchResults.length === 0 ? (
            <div className="text-center py-8 bg-gray-900 rounded-lg">
              <p className="text-gray-400">No se encontraron resultados para "{searchTerm}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((item) => (
                <LocalCard key={item.local} data={item} onClick={() => handleCardClick(item)} />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Modal de edición */}
      {selectedLocal && (
        <EditModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={selectedLocal}
          onSave={handleSave}
        />
      )}
    </div>
  )
}
