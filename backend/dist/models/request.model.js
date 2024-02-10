"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = require("../database");
var _user = _interopRequireDefault(require("./user.model"));
var _connection = _interopRequireDefault(require("./connection.model"));
var _stateRequest = _interopRequireDefault(require("./stateRequest.model"));
var _conditionRequest = _interopRequireDefault(require("./conditionRequest.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Request = _database.sequelize.define('Request', {
  requestId: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  clientId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: _user["default"],
      key: 'userId'
    }
  },
  solverId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: _user["default"],
      key: 'userId'
    }
  },
  connectionId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: _connection["default"],
      key: 'connectionId'
    }
  },
  stateId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: _stateRequest["default"],
      key: 'stateId'
    }
  },
  title: {
    type: _sequelize.DataTypes.STRING(50),
    allowNull: false
  },
  description: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  endTime: {
    type: _sequelize.DataTypes.DATE,
    allowNull: false
  },
  classroom: {
    type: _sequelize.DataTypes.STRING(50),
    allowNull: false
  },
  startTime: {
    type: _sequelize.DataTypes.DATE,
    allowNull: false,
    defaultValue: _sequelize.DataTypes.NOW
  },
  closedTime: {
    type: _sequelize.DataTypes.DATE,
    allowNull: true
  },
  conditionId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: _conditionRequest["default"],
      key: 'conditionId'
    }
  },
  answerForm: {
    type: _sequelize.DataTypes.STRING(250),
    allowNull: true
  }
}, {
  timestamps: false
});
Request.belongsTo(_user["default"], {
  foreignKey: 'clientId'
});
Request.belongsTo(_user["default"], {
  foreignKey: 'solverId'
});
Request.belongsTo(_connection["default"], {
  foreignKey: 'connectionId'
});
Request.belongsTo(_stateRequest["default"], {
  foreignKey: 'stateId'
});
Request.belongsTo(_conditionRequest["default"], {
  foreignKey: 'conditionId'
});
var _default = Request;
exports["default"] = _default;