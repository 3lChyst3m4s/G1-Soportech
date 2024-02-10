"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _database = require("../database");
var _role = _interopRequireDefault(require("./role.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var User = _database.sequelize.define('User', {
  userId: {
    type: _sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true,
    trim: true
  },
  email: {
    type: _sequelize.DataTypes.STRING,
    unique: true,
    trim: true,
    allowNull: false
  },
  password: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  photo: {
    type: _sequelize.DataTypes.STRING,
    allowNull: true
  },
  roleId: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: _role["default"],
      key: 'roleId'
    }
  }
}, {
  timestamps: true
});
User.belongsTo(_role["default"], {
  foreignKey: 'roleId'
});
var _default = User;
exports["default"] = _default;