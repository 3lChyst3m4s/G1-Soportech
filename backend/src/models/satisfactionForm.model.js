import { DataTypes } from 'sequelize';
import { sequelize } from '../database';

const SatisfactionForm = sequelize.define('SatisfactionForm', {
  sFormId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  answer: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

module.exports = SatisfactionForm;