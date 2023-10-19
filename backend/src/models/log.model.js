import { DataTypes } from 'sequelize';
import { sequelize } from '../database';
import Message from './message.model';

const Log = sequelize.define('Log', {
  logId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  messageId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Message,
      key: 'messageId'
    }
  },
}, {
  timestamps: false,
});

Log.belongsTo(Message, { foreignKey: 'messageId' });

export default Log;