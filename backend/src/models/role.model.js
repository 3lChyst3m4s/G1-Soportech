import { DataTypes } from 'sequelize';
import { sequelize } from '../database';

const Role = sequelize.define('Role', {
  roleId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
}
);

export default Role;