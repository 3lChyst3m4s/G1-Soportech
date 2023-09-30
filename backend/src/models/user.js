import { DataTypes } from 'sequelize';
import { sequelize } from '../config';


const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    trim: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    trim: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

export default User;