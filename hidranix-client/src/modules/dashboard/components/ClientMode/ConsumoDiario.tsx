import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface DataPoint {
  day: string;
  consumption: number;
}

const data: DataPoint[] = [
  { day: 'Lun', consumption: 15 },
  { day: 'Mar', consumption: 28 },
  { day: 'Mié', consumption: 22 },
  { day: 'Jue', consumption: 35 },
  { day: 'Vie', consumption: 20 },
  { day: 'Sáb', consumption: 40 },
  { day: 'Dom', consumption: 30 },
];

const ConsumoDiario = () => {
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="consumption" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
};

export default ConsumoDiario;