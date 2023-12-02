import { sequelize } from "../database";
import { DataTypes } from "sequelize";

import Request from "./request.model";

const Form = sequelize.define('Form', {
  formId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  requestId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Request,
      key: 'requestId'
    }
  },
  starCount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sentimentValue: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
}, {
  timestamps: false,
});

Form.belongsTo(Request, { foreignKey: 'requestId' });

export default Form;