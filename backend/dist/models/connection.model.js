"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = require("../database");
var _typeRequest = _interopRequireDefault(require("./typeRequest.model"));
var _categoryRequest = _interopRequireDefault(require("./categoryRequest.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Connection = _database.sequelize.define('Connection', {
  connectionId: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  typeId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: _typeRequest["default"],
      key: 'typeId'
    }
  },
  categoryId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: _categoryRequest["default"],
      key: 'categoryId'
    }
  },
  quoteTime: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});
Connection.belongsTo(_typeRequest["default"], {
  foreignKey: 'typeId'
});
Connection.belongsTo(_categoryRequest["default"], {
  foreignKey: 'categoryId'
});
var _default = Connection;
exports["default"] = _default;