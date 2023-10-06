import { DataTypes } from 'sequelize';
import { sequelize } from '../database';

const ResolutionForm = sequelize.define('ResolutionForm', {
  rFormId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  resolutionTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  answer: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
});

module.exports = ResolutionForm;