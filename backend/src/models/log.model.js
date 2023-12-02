import { DataTypes } from 'sequelize';
import { sequelize } from '../database';
import User from './user.model';
import Request from './request.model';

const Log = sequelize.define('Log', {
  logId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  requestId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Request,
      key: 'requestId'
    }
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'userId'
    }
  },
  solverId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'userId'
    }
  },
}, {
  timestamps: false,
});

Log.belongsTo(Request, { foreignKey: 'requestId' });
Log.belongsTo(User, { foreignKey: 'clientId' });
Log.belongsTo(User, { foreignKey: 'solverId' });

export default Log;