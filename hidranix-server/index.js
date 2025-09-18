import app from "./src/app.js";
import { syncDatabase } from "./src/config/database.js";
import { PORT } from './src/config/config.js';

async function startServer() {
  await syncDatabase();

  app.listen(PORT, () => {
    console.log(`Server listening on PORT:${PORT}`);
  });
}

startServer();