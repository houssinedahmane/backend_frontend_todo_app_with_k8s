const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Todo = sequelize.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    timestamps: false, // Disable createdAt and updatedAt fields
});

// Sync the database
Todo.sync().then(() => {
  console.log("Todo Model synced");
}).catch((error) => {
  console.error('Error syncing Todo model:', error);
});

module.exports = Todo;
