export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center p-8 text-blue-600">
        Contenido Principal
      </h1>
      {/* Añade temporalmente esto para prueba */}
      <div className="container mx-auto p-4 bg-white shadow-lg">
        <p className="text-lg">Texto de prueba visible</p>
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => alert('Funciona!')}
        >
          Prueba este botón
        </button>
      </div>
    </div>
  )
}