// src/users/users.model.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js'; 

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  clerkId: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  role: {
    type: DataTypes.ENUM('CLIENT', 'ADMIN'),
    defaultValue: 'CLIENT',
    allowNull: false
  },
  servicestatus: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
});

export default User;