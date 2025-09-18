// src/modules/dashboard/components/Historial.tsx

interface Pago {
  id: number;
  monto: number;
  metodo: 'Tarjeta' | 'Yape';
  fecha: string;
}

const columns = [
  { name: 'ID', key: 'id' },
  { name: 'Monto (S/)', key: 'monto' },
  { name: 'Método de Pago', key: 'metodo' },
  { name: 'Fecha', key: 'fecha' },
];

const rows: Pago[] = [
  { id: 1, monto: 35.0, metodo: 'Tarjeta', fecha: '2025-08-27' },
  { id: 2, monto: 35.0, metodo: 'Tarjeta', fecha: '2025-08-29' },
  { id: 3, monto: 35.0, metodo: 'Yape', fecha: '2025-09-01' },
  { id: 4, monto: 35.0, metodo: 'Yape', fecha: '2025-09-02' },
  { id: 5, monto: 35.0, metodo: 'Tarjeta', fecha: '2025-09-03' },
];

const Historial = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Historial de Pagos</h2>
      <p className="text-gray-600 mb-4 text-sm sm:text-base">
        Consulta el historial de tus pagos realizados.
      </p>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((pago) => (
              <tr key={pago.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pago.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  S/ {pago.monto.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                      pago.metodo === 'Tarjeta'
                        ? 'bg-blue-100 text-blue-700'
                        // : pago.metodo === 'Transferencia'
                        : 'bg-purple-100 text-purple-700'
                        // : pago.metodo === 'Efectivo'
                        // ? 'bg-green-100 text-green-700'
                        // : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {pago.metodo}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pago.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Historial;
