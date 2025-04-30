"use client";

import { useState } from "react";
import { Save, Download, Upload } from "lucide-react";
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    if (!selectedFile) {
      setError("No se seleccionó ningún archivo");
      return;
    }
  
    // Validar extensión del archivo
    const validExtensions = ['.xlsx', '.xls'];
    const fileExtension = selectedFile.name.substring(selectedFile.name.lastIndexOf('.')).toLowerCase();
    
    if (!validExtensions.includes(fileExtension)) {
      setError("Por favor selecciona un archivo Excel (.xlsx o .xls)");
      setFile(null);
      e.target.value = ''; // Limpiar el input
      return;
    }
  
    // Validar tipo MIME (opcional pero recomendado)
    const validMimeTypes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
      'application/vnd.ms-excel' // .xls
    ];
    
    if (!validMimeTypes.includes(selectedFile.type)) {
      setError("El tipo de archivo no es válido");
      setFile(null);
      e.target.value = '';
      return;
    }
  
    // Si pasa todas las validaciones
    setFile(selectedFile);
    setUploadSuccess(false);
    setError(null);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Por favor selecciona un archivo");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploadLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:8000/upload_excel/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadSuccess(true);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Error al cargar el archivo");
    } finally {
      setUploadLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      setDownloadLoading(true);
      const response = await axios.get(
        "http://127.0.0.1:8000/download_excel/",
        {
          responseType: "blob",
        }
      );

      // Create a download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "data.xlsx");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      setDownloadSuccess(true);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Error al descargar el archivo");
    } finally {
      setDownloadLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-100 mb-8">
        Configuración
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <form
            onSubmit={handleUpload}
            className="bg-gray-900 border border-gray-800 rounded-lg p-6"
          >
            <h2 className="text-lg font-semibold mb-6">
              Cargar Excel de Propietarios
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Seleccionar archivo Excel
                </label>
                <input
                  type="file"
                  accept=".xlsx, .xls"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-gray-400
    file:mr-4 file:py-2 file:px-4
    file:rounded-md file:border-0
    file:text-sm file:font-semibold
    file:bg-purple-600 file:text-white
    hover:file:bg-purple-700
    cursor-pointer"
                />
              </div>

              {uploadSuccess && (
                <div className="p-3 bg-green-900/50 border border-green-700 rounded-md text-green-300 text-sm">
                  Archivo cargado exitosamente!
                </div>
              )}

              {error && (
                <div className="p-3 bg-red-900/50 border border-red-700 rounded-md text-red-300 text-sm">
                  {error}
                </div>
              )}

              <div className="pt-4 border-t border-gray-800">
                <button
                  type="submit"
                  disabled={uploadLoading}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm font-medium flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {uploadLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Cargando...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4" />
                      <span>Cargar archivo</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-6">
              Descargar Excel de Propietarios
            </h2>

            <div className="space-y-6">
              <p className="text-sm text-gray-400">
                Descarga un archivo Excel con todos los propietarios registrados
                en el sistema.
              </p>

              {downloadSuccess && (
                <div className="p-3 bg-green-900/50 border border-green-700 rounded-md text-green-300 text-sm">
                  Descarga completada exitosamente!
                </div>
              )}

              <div className="pt-4 border-t border-gray-800">
                <button
                  onClick={handleDownload}
                  disabled={downloadLoading}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {downloadLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Preparando descarga...
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4" />
                      <span>Descargar archivo</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">
              Información de la cuenta
            </h2>
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
  );
}
