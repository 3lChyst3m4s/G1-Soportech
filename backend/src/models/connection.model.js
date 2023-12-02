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
  quoteTime: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
});

Connection.belongsTo(TypeRequest, { foreignKey: 'typeId' });
Connection.belongsTo(CategoryRequest, { foreignKey: 'categoryId' });

export default Connection;