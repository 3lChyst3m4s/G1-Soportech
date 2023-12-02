import { DataTypes } from 'sequelize';
import { sequelize } from '../database';
import Role from './role.model';

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    trim: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    trim: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Role,
      key: 'roleId'
    }
  },
}, 
{
  timestamps: true,
});

User.belongsTo(Role, { foreignKey: 'roleId' });

export default User;