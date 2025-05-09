"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import LocalCard from "../components/LocalCard"
import EditModal from "../components/EditModal"
import { useNavigate, useLocation } from "react-router-dom"
import axios from "axios"

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [selectedLocal, setSelectedLocal] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()


  const handleSearch = async () => {
    if (!searchTerm.trim()) return
  
    setIsLoading(true)
    setError(null)
  
    try {
      const response = await axios.get(`http://127.0.0.1:8000/find_one/?local=${searchTerm}`)
  
      const result = response.data

      console.log(result)
  
      if (Array.isArray(result)) {
        setSearchResults(result)
      } else if (result) {
        // Si la API devuelve un solo objeto en vez de un array
        setSearchResults([result])
      } else {
        setSearchResults([])
      }
  
      setHasSearched(true)
  
      const params = new URLSearchParams(location.search)
      params.set("search", searchTerm)
      navigate(`?${params.toString()}`, { replace: true })
  
    } catch (err) {
      setError(err.message)
      console.error("Error al buscar:", err)
      setSearchResults([])
    } finally {
      setIsLoading(false)
    }
  }
  

  const handleCardClick = (local) => {
    setSelectedLocal(local)
    setIsModalOpen(true)
  }

  const handleSave = async (updatedData) => {
    try {
      console.log("Datos actualizados:", updatedData);
  
      const response = await axios.put(
        `http://127.0.0.1:8000/edit/${updatedData._id}`, 
        updatedData,
        {
          headers: {
            'Content-Type': 'application/json',
            // Add other headers (e.g., auth) if needed
          },
        }
      );
  
      console.log("Respuesta del servidor:", response.data);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error en la petición PUT:", error.response?.data || error.message);
      // Optional: Mostrar error al usuario (ej. con un toast/alert)
    }
  };

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
              onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <button
            onClick={handleSearch}
            disabled={isLoading}
            className="px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Buscando..." : "Buscar"}
          </button>
          <button className="p-2.5 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg">
            <Filter className="h-5 w-5" />
            <span className="sr-only">Filtros</span>
          </button>
        </div>
      </div>

      {/* Mensaje de error */}
      {error && (
        <div className="mb-4 p-4 bg-red-900/50 border border-red-700 text-red-200 rounded-lg">
          Error: {error}
        </div>
      )}

      {/* Resultados */}
      {hasSearched && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-200">
              Resultados ({searchResults.length})
              {isLoading && <span className="ml-2 text-sm text-gray-400">Cargando...</span>}
            </h2>

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
                <LocalCard 
                  key={item["LOCAL"] || item["ID"]} // Usamos ID como fallback
                  data={item} 
                  onClick={() => handleCardClick(item)} 
                />
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