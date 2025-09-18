import { useState } from 'react';

interface Admin {
  id: number;
  nombre: string;
  email: string;
  permisos: string[];
}

const initialAdmins: Admin[] = [
  { id: 1, nombre: 'Admin Uno', email: 'admin1@example.com', permisos: ['Estadísticas', 'Clientes'] },
  { id: 2, nombre: 'Super Admin', email: 'superadmin@example.com', permisos: ['Estadísticas', 'Clientes', 'Admins'] },
];

const Admins = () => {
  const [admins, setAdmins] = useState(initialAdmins);

  const togglePermiso = (adminId: number, permiso: string) => {
    setAdmins((prevAdmins) =>
      prevAdmins.map((admin) => {
        if (admin.id === adminId) {
          const tienePermiso = admin.permisos.includes(permiso);
          return {
            ...admin,
            permisos: tienePermiso
              ? admin.permisos.filter((p) => p !== permiso)
              : [...admin.permisos, permiso],
          };
        }
        return admin;
      })
    );
  };

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-semibold mb-4">Administradores</h1>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permisos</th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Editar Permisos</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {admins.map((admin) => (
              <tr key={admin.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{admin.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{admin.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {admin.permisos.join(', ')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="space-x-2">
                    {['Estadísticas', 'Clientes', 'Admins'].map((permiso) => (
                      <button
                        key={permiso}
                        onClick={() => togglePermiso(admin.id, permiso)}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${
                          admin.permisos.includes(permiso)
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        } hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                      >
                        {permiso}
                      </button>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admins;