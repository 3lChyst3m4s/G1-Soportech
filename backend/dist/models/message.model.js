"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = require("../database");
var _user = _interopRequireDefault(require("./user.model"));
var _log = _interopRequireDefault(require("./log.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Message = _database.sequelize.define('Message', {
  messageId: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  logId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: _log["default"],
      key: 'logId'
    }
  },
  userId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: _user["default"],
      key: 'userId'
    }
  },
  content: {
    type: _sequelize.DataTypes.STRING(250),
    allowNull: false
  },
  sentTime: {
    type: _sequelize.DataTypes.DATE,
    allowNull: false,
    defaultValue: _sequelize.DataTypes.NOW
  }
}, {
  timestamps: false
});
Message.belongsTo(_log["default"], {
  foreignKey: 'logId'
});
Message.belongsTo(_user["default"], {
  foreignKey: 'userId'
});
var _default = Message;
exports["default"] = _default;