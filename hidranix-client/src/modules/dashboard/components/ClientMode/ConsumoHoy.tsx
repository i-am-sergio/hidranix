import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BACKEND_URL } from "../../../../modules/services/config";

interface TemperaturePoint {
  id: number;
  userId: string;
  temperature: number;
  timestamp: string;
}

const ConsumoHoy = () => {
  const [data, setData] = useState<TemperaturePoint[]>([]);
  const userId = "18f602e0-b79c-4e7f-9ea3-48d8dbc97c1d";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<TemperaturePoint[]>(
          `${BACKEND_URL}/iot/temperature/${userId}`
        );

        const formatted = res.data.map((item) => ({
          ...item,
          time: new Date(item.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        }));

        setData(formatted);
      } catch (err) {
        console.error("Error al obtener datos de temperatura:", err);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div className="w-full h-[300px] sm:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke="#82ca9d"
            strokeWidth={2}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ConsumoHoy;


