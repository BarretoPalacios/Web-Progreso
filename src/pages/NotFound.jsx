import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h1 className="text-6xl font-bold text-purple-500 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-gray-100 mb-6">Página no encontrada</h2>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        La página que estás buscando no existe o ha sido movida a otra ubicación.
      </p>
      <Link to="/" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium">
        Volver al Dashboard
      </Link>
    </div>
  )
}
