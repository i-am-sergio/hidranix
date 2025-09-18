import express from 'express';
import { 
  receiveTemperatureData, 
  getTemperatureDataByUserId,
  getWeeklyAverageByUserId
} from './iot.controller.js';

const router = express.Router();

router.post('/temperature', receiveTemperatureData);
router.get('/temperature/:userId', getTemperatureDataByUserId);
router.get('/temperature/:userId/weekly-average', getWeeklyAverageByUserId);

export default router;
