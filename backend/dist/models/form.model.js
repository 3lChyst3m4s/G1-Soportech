"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _database = require("../database");
var _sequelize = require("sequelize");
var _request = _interopRequireDefault(require("./request.model"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Form = _database.sequelize.define('Form', {
  formId: {
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
  starCount: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false
  },
  sentimentValue: {
    type: _sequelize.DataTypes.FLOAT,
    allowNull: true
  }
}, {
  timestamps: false
});
Form.belongsTo(_request["default"], {
  foreignKey: 'requestId'
});
var _default = Form;
exports["default"] = _default;