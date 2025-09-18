import * as iotService from './iot.service.js';

export const receiveTemperatureData = async (req, res) => {
  try {
    const { temperature, userId } = req.body;

    if (temperature === undefined || userId === undefined) {
      return res.status(400).json({ message: 'El cuerpo de la solicitud debe contener temperatura y userId.' });
    }

    await iotService.saveTemperatureData(temperature, userId);
    res.status(200).json({ message: 'Datos de temperatura recibidos y guardados exitosamente.' });
  } catch (error) {
    console.error('Error al recibir y guardar datos de temperatura:', error);
    res.status(500).json({ message: 'Error al procesar los datos de temperatura.' });
  }
};


export const getTemperatureDataByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const temperatureData = await iotService.getTemperatureDataByUserId(userId);
    res.status(200).json(temperatureData);
  } catch (error) {
    console.error('Error al obtener los datos de temperatura por userId:', error);
    res.status(500).json({ message: 'Error al obtener los datos de temperatura.' });
  }
};


export const getWeeklyAverageByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const avgData = await iotService.getWeeklyAverageByUserId(userId);
    res.status(200).json(avgData);
  } catch (error) {
    console.error('Error al obtener la media semanal:', error);
    res.status(500).json({ message: 'Error al obtener la media semanal de temperatura.' });
  }
};