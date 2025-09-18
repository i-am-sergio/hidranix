import sequelize from "./sequelize.js";

export async function syncDatabase() {
  try {
    await sequelize.sync();
    console.log("Tabla User creada (o ya existente).");
  } catch (error) {
    console.error("Error al sincronizar la tabla:", error);
  }
}