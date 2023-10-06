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
  userId: {
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
  startTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  pendingTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updateTime: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endTime: {
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
});

module.exports = Request;