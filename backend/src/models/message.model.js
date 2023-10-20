import { DataTypes } from 'sequelize';
import { sequelize } from '../database';
import User from './user.model';
import Log from './log.model';

const Message = sequelize.define('Message', {
  messageId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  logId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Log,
      key: 'logId'
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'userId'
    }
  },
  content: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  sentTime: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
}, {
  timestamps: false,
}
);

Message.belongsTo(Log, { foreignKey: 'logId' });
Message.belongsTo(User, { foreignKey: 'userId' });

export default Message;