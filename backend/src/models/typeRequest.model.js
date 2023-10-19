import { DataTypes } from 'sequelize';
import { sequelize } from '../database';

const TypeRequest = sequelize.define('TypeRequest', {
  typeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
});

export default TypeRequest;