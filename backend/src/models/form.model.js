import { DataTypes } from 'sequelize';
import { sequelize } from '../database';
import User from './user.model';
import Request from './request.model';
import SatisfactionForm from './satisfactionForm.model';
import ResolutionForm from './resolutionForm.model';

const Form = sequelize.define('Form', {
  formId: {
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
  requestId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Request,
      key: 'requestId'
    }
  },
  sFormId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: SatisfactionForm,
      key: 'sFormId'
    }
  },
  rFormId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ResolutionForm,
      key: 'rFormId'
    }
  },
});

module.exports = Form;