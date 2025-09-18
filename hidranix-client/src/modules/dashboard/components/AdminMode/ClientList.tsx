interface Client {
  id: number;
  nombre: string;
  apellido: string;
  dni: string;
  codigoDispositivo: string;
  estado: 'Activo' | 'Inactivo';
}

const columns = [
  { name: 'Nombre', key: 'nombre' },
  { name: 'Apellido', key: 'apellido' },
  { name: 'DNI', key: 'dni' },
  { name: 'Código de Dispositivo', key: 'codigoDispositivo' },
  { name: 'Estado', key: 'estado' },
];

const rows: Client[] = [
  { id: 1, apellido: 'Pérez', nombre: 'Juan', dni: '12345678', codigoDispositivo: 'DISP-ABC-123', estado: 'Activo' },
  { id: 2, apellido: 'González', nombre: 'María', dni: '98765432', codigoDispositivo: 'DISP-DEF-456', estado: 'Inactivo' },
  { id: 3, apellido: 'López', nombre: 'Carlos', dni: '11223344', codigoDispositivo: 'DISP-GHI-789', estado: 'Activo' },
  { id: 4, apellido: 'Rodríguez', nombre: 'Ana', dni: '55667788', codigoDispositivo: 'DISP-JKL-012', estado: 'Inactivo' },
  { id: 5, apellido: 'Sánchez', nombre: 'Luis', dni: '99001122', codigoDispositivo: 'DISP-MNO-345', estado: 'Activo' },
];

const ClientList = () => {
  return (
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
          {rows.map((client) => (
            <tr key={client.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.nombre}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.apellido}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.dni}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.codigoDispositivo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span
                  className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                    client.estado === 'Activo' ? 'bg-green-100 text-green-700' :
                    client.estado === 'Inactivo' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {client.estado}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ClientList;