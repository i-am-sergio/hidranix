import { Op, fn, col, literal } from 'sequelize';
import TemperatureData from './iot.model.js'; 

export const saveTemperatureData = async (temperature, userId) => {
  try {
    await TemperatureData.create({ temperature, userId });
    console.log(`Temperatura guardada: ${temperature}°C del user ${userId}`);
  } catch (error) {
    console.error('Error al guardar la temperatura en la base de datos:', error);
    throw error;
  }
};

export const getTemperatureDataByUserId = async (userId) => {
  try {
    const temperatureData = await TemperatureData.findAll({
      where: {
        userId: userId,
      },
      order: [['timestamp', 'DESC']], // Opcional: ordenar por fecha y hora descendente
    });
    return temperatureData;
  } catch (error) {
    console.error('Error al obtener los datos de temperatura por userId:', error);
    throw error;
  }
};

export const getWeeklyAverageByUserId = async (userId) => {
  try {
    const avgData = await TemperatureData.findAll({
      attributes: [
        [fn('DATE', col('timestamp')), 'date'], 
        [fn('AVG', col('temperature')), 'averageTemperature'],
      ],
      where: {
        userId,
        timestamp: {
          [Op.gte]: literal("DATE_SUB(NOW(), INTERVAL 7 DAY)"), // últimos 7 días
        },
      },
      group: [fn('DATE', col('timestamp'))],
      order: [[fn('DATE', col('timestamp')), 'ASC']],
    });

    return avgData;
  } catch (error) {
    console.error('Error al obtener la media semanal de temperatura:', error);
    throw error;
  }
};