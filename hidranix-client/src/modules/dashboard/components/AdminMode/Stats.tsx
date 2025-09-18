import MonitoreoDiario from "./MonitoreoDiario";

// Datos de ejemplo por hora para 4 clientes
const clientesConDatosPorHora = [
  {
    id: 1,
    nombre: "Cliente A",
    datosSensor: [
      { hour: "00:00", value: 25 },
      { hour: "03:00", value: 28 },
      { hour: "06:00", value: 23 },
      { hour: "09:00", value: 30 },
      { hour: "12:00", value: 26 },
      { hour: "15:00", value: 32 },
      { hour: "18:00", value: 29 },
      { hour: "21:00", value: 31 },
    ],
  },
  {
    id: 2,
    nombre: "Cliente B",
    datosSensor: [
      { hour: "01:00", value: 18 },
      { hour: "04:00", value: 20 },
      { hour: "07:00", value: 25 },
      { hour: "10:00", value: 22 },
      { hour: "13:00", value: 28 },
      { hour: "16:00", value: 35 },
      { hour: "19:00", value: 31 },
      { hour: "22:00", value: 27 },
    ],
  },
  {
    id: 3,
    nombre: "Cliente C",
    datosSensor: [
      { hour: "02:00", value: 31 },
      { hour: "05:00", value: 33 },
      { hour: "08:00", value: 29 },
      { hour: "11:00", value: 36 },
      { hour: "14:00", value: 32 },
      { hour: "17:00", value: 38 },
      { hour: "20:00", value: 34 },
      { hour: "23:00", value: 30 },
    ],
  },
  {
    id: 4,
    nombre: "Cliente D",
    datosSensor: [
      { hour: "00:30", value: 20 },
      { hour: "03:30", value: 24 },
      { hour: "06:30", value: 21 },
      { hour: "09:30", value: 27 },
      { hour: "12:30", value: 23 },
      { hour: "15:30", value: 29 },
      { hour: "18:30", value: 25 },
      { hour: "21:30", value: 22 },
    ],
  },
];

// interface DataPointHora {
//   hour: string;
//   value: number;
// }

// interface ClienteConDatosHora {
//   id: number;
//   nombre: string;
//   datosSensor: DataPointHora[];
// }

const Stats = () => {
  return (
    <div className="mt-8 space-y-6 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-4">
      <h1 className="text-2xl font-semibold mb-4 col-span-full">
        Monitoreo Diario de Sensores de Calor
      </h1>
      <p className="text-gray-600 mb-6 col-span-full">
        Visualización de los datos del sensor de calor por hora para cada
        cliente.
      </p>

      {clientesConDatosPorHora.map((cliente, index) => (
        <div key={cliente.id} className="bg-white shadow-md rounded-lg p-4">
          <h4 className="text-md font-semibold mb-2">{`Monitoreo Diario - ${cliente.nombre}`}</h4>
          <div className="w-full overflow-x-auto">
            <MonitoreoDiario
              data={cliente.datosSensor}
              dataKey="value"
              color={["#3182ce", "#e45858", "#68d391", "#f6ad55"][index % 4]} // Asigna un color diferente a cada cliente
              yAxisLabel="Valor"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;