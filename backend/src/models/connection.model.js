import { DataTypes } from 'sequelize';
import { sequelize } from '../database';
import TypeRequest from './typeRequest.model';
import CategoryRequest from './categoryRequest.model';

const Connection = sequelize.define('Connection', {
  connectionId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  typeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: TypeRequest,
      key: 'typeId'
    }
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: CategoryRequest,
      key: 'categoryId'
    }
  },
});

module.exports = Connection;