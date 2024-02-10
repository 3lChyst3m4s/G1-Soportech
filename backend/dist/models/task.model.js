"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = require("../database");
var _user = _interopRequireDefault(require("./user.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Task = _database.sequelize.define('Task', {
  title: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: _sequelize.DataTypes.DATE,
    defaultValue: _sequelize.DataTypes.NOW
  },
  userId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: _user["default"],
      key: 'userId'
    }
  }
}, {
  timestamps: true
});
var _default = Task;
exports["default"] = _default;