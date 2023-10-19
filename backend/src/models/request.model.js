import { DataTypes } from 'sequelize';
import { sequelize } from '../database';
import User from './user.model';
import Log from './log.model';
import Connection from './connection.model';
import StateRequest from './stateRequest.model';
import ConditionRequest from './conditionRequest.model';

const Request = sequelize.define('Request', {
  requestId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'userId'
    }
  },
  resolutorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'userId'
    }
  },
  connectionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Connection,
      key: 'connectionId'
    }
  },
  stateId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: StateRequest,
      key: 'stateId'
    }
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(250),
    allowNull: false
  },
  endTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  classroom: {
    type: DataTypes.STRING(50),
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
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  closedTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  conditionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ConditionRequest,
      key: 'conditionId'
    }
  },
  answerForm: {
    type: DataTypes.STRING(250),
    allowNull: true
  },
}, {
  timestamps: false,
});

Request.belongsTo(User, { foreignKey: 'clientId' });
Request.belongsTo(User, { foreignKey: 'resolutorId' });
Request.belongsTo(Connection, { foreignKey: 'connectionId' });
Request.belongsTo(StateRequest, { foreignKey: 'stateId' });
Request.belongsTo(Log, { foreignKey: 'logId' });
Request.belongsTo(ConditionRequest, { foreignKey: 'conditionId' });

export default Request;