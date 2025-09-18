import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { BACKEND_URL } from "../../../../modules/services/config";

interface WeeklyPoint {
  date: string;
  averageTemperature: number;
}

interface ChartPoint {
  day: string;
  averageTemperature: number;
}

const ConsumoSemanal = ({ userId }: { userId: string }) => {
  const [data, setData] = useState<ChartPoint[]>([]);

  useEffect(() => {
    const fetchWeeklyData = async () => {
      try {
        const res = await axios.get<WeeklyPoint[]>(
          `${BACKEND_URL}/iot/temperature/${userId}/weekly-average`
        );

        // 🔄 transformar fecha a día local
        const transformed = res.data.map((item) => {
          const localDay = new Date(item.date).toLocaleDateString("es-ES", {
            weekday: "short", // "lun.", "mar.", "mié."
          });
          return {
            day: localDay.charAt(0).toUpperCase() + localDay.slice(1), // capitalizar
            averageTemperature: parseFloat(item.averageTemperature.toFixed(2)),
          };
        });

        setData(transformed);
      } catch (error) {
        console.error("Error al obtener datos semanales:", error);
      }
    };

    fetchWeeklyData();
  }, [userId]);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="averageTemperature"
          stroke="#10b981"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ConsumoSemanal;
