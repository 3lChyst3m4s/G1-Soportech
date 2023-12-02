import { DataTypes } from 'sequelize';
import { sequelize } from '../database';

const CategoryRequest = sequelize.define('CategoryRequest', {
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
});

export default CategoryRequest;