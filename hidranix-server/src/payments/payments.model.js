import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js"; // Importa la conexión a la base de datos

const Payment = sequelize.define("Payment", {
  transaction_amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  payment_method: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default Payment;
