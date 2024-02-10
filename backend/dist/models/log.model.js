"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = require("../database");
var _user = _interopRequireDefault(require("./user.model"));
var _request = _interopRequireDefault(require("./request.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Log = _database.sequelize.define('Log', {
  logId: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  requestId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: _request["default"],
      key: 'requestId'
    }
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
    allowNull: false,
    references: {
      model: _user["default"],
      key: 'userId'
    }
  }
}, {
  timestamps: false
});
Log.belongsTo(_request["default"], {
  foreignKey: 'requestId'
});
Log.belongsTo(_user["default"], {
  foreignKey: 'clientId'
});
Log.belongsTo(_user["default"], {
  foreignKey: 'solverId'
});
var _default = Log;
exports["default"] = _default;