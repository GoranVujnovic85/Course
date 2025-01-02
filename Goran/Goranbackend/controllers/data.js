/*=========================================================================================================================================================================================*/
/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*=========================================================================================================================================================================================*/
/*---------------------------------------- This code defines a Sequelize model named data for managing a data table in the database. ------------------------------------------------------*/
/*------------------------------------------------------- The model includes fields for title, description, and author, -------------------------------------------------------------------*/
/*---------------------------------------------- with appropriate configurations for data types, constraints, and table management.--------------------------------------------------------*/
/*=========================================================================================================================================================================================*/
/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*=========================================================================================================================================================================================*/


const { DataTypes } = require('sequelize');                    // Imports the DataTypes object from Sequelize, which provides various data types necessary for defining the schema of models.
const sequelize = require('../config/database');               // Imports a Sequelize instance configured to connect to a database.

const Data = sequelize.define('data', {                        // Defines a Sequelize model named data. This model represents the data table in the database.
    title: {                                                   // Is a string field.
        type: DataTypes.STRING,                                // Specifies the data type as a string.
        allowNull: false,                                      // Ensures that the address cannot be null.
        primaryKey: true,                                      // Sets the title as the primary key --- WARRNING --> VERY IMPORTANT --- 
    },
    description: {                                             // Is a string field.
        type: DataTypes.TEXT,                                  // Allows storing long text.
        allowNull: false,                                      // Ensures that the address cannot be null.
    },
    author: {                                                  // Is a string field.
        type: DataTypes.STRING,                                // Specifies the data type as a string.
        allowNull: false,                                      // Ensures that the address cannot be null.
    },
}, {
    tableName: 'data',                                         // Name of the table in the database
    timestamps: false,                                         // We exclude the createdAt and updatedAt columns
   //primaryKey: false,                                        // Disables expecting a primary key

});

module.exports = Data;                                         // Exports the Data model so it can be used in other parts of the application.