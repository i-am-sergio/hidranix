import { Sequelize } from 'sequelize';
import { DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, GCP_PROJECT_ID, GCP_REGION, INSTANCE_NAME, NODE_ENV } from './config.js';

let sequelize;

if (NODE_ENV === 'development') {
  console.log('Conectando a la base de datos en desarrollo...');
  sequelize = new Sequelize(
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    {
      host: DB_HOST,
      port: DB_PORT,
      dialect: 'mysql',
    }
  );
} else if (NODE_ENV === 'production') {
  console.log('Conectando a la base de datos en producción...');
  sequelize = new Sequelize(
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    {
      host: DB_HOST,
      port: DB_PORT,
      dialect: 'mysql',
    }
  );
} else {
  console.log('Entorno no reconocido. Configurando Sequelize con opciones predeterminadas (podría fallar).');
}

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

testConnection();

export default sequelize;