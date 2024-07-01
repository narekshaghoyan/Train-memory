import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite:./database.db');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  regDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  lastRecord: {
    type: DataTypes.REAL,
    allowNull: true,
  }
}, {
  indexes: [
    {
      fields: ['email']
    }
  ]
});

sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log('Error syncing database:', err));

export default User;
