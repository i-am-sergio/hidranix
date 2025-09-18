import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface DataPoint {
  hour: string;
  value: number;
}

interface MonitoreoDiarioProps {
  data: DataPoint[];
  dataKey: string;
  color: string;
  yAxisLabel: string;
}

const MonitoreoDiario: React.FC<MonitoreoDiarioProps> = ({ data, dataKey, color, yAxisLabel }) => {
  return (
    <LineChart
      width={400} // Ajusta el ancho según necesites
      height={200} // Ajusta la altura según necesites
      data={data}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="hour" />
      <YAxis label={{ value: yAxisLabel, angle: -90, position: 'left', offset: 0 }} />
      <Tooltip />
      <Line type="monotone" dataKey={dataKey} stroke={color} activeDot={{ r: 8 }} strokeWidth={2} />
    </LineChart>
  );
};

export default MonitoreoDiario;