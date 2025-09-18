import ConsumoHoy from './ConsumoHoy';
import ConsumoSemanal from './ConsumoSemanal';

const Inicio = () => {
  const userId = "18f602e0-b79c-4e7f-9ea3-48d8dbc97c1d"; // ⚡️ Cambia por el userId dinámico si lo tienes en contexto

  return (
    <div className="mt-8 space-y-6">
      {/* Card de Consumo Diario */}
      <div className="bg-white border border-primary-light shadow-lg rounded-2xl p-6 w-full">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
          Consumo Diario
        </h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Gráfico de las temperaturas registradas durante el día.
        </p>
        <div className="w-full">
          <ConsumoHoy />
        </div>
      </div>

      {/* Card de Consumo Semanal */}
      <div className="bg-white border border-primary-light shadow-lg rounded-2xl p-6 w-full">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
          Consumo Semanal
        </h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Promedio diario de temperaturas en la última semana.
        </p>
        <div className="w-full">
          <ConsumoSemanal userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
