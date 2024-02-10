import { DataTypes } from 'sequelize';
import { sequelize } from '../database';
import User from './user.model';
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
  solverId: {
    type: DataTypes.INTEGER,
    allowNull: true,
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
    type: DataTypes.STRING,
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
  startTime: {
    type: DataTypes.DATE, 
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  closedTime: {
    type: DataTypes.DATE,
    allowNull: true
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
Request.belongsTo(User, { foreignKey: 'solverId' });
Request.belongsTo(Connection, { foreignKey: 'connectionId' });
Request.belongsTo(StateRequest, { foreignKey: 'stateId' });
Request.belongsTo(ConditionRequest, { foreignKey: 'conditionId' });

export default Request;