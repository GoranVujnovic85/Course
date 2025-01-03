/*===============================================================================================================================================================================*/
/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*===============================================================================================================================================================================*/
/*------------------------------ This code defines a Sequelize model named Location for managing a locations table in the database. ---------------------------------------------*/
/*------------------------------------------ The model includes fields for id, address, mapLink, and visible, -------------------------------------------------------------------*/
/*------------------------------------ with appropriate configurations for data types, constraints, and table management.--------------------------------------------------------*/
/*===============================================================================================================================================================================*/
/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*===============================================================================================================================================================================*/

const { DataTypes } = require('sequelize');          // Imports the DataTypes object from Sequelize, which provides various data types necessary for defining the schema of models.
const sequelize = require('../config/database');     // Imports a Sequelize instance configured to connect to a database. 

const Location = sequelize.define('location', {      // Defines a Sequelize model named Location. This model represents the locations table in the database.
    id: {                                            // Primary key of the model.
        type: DataTypes.INTEGER,                     // Specifies that id is an integer.
        autoIncrement: true,                         // Indicates that the ID will auto-increment for each new entry.
        primaryKey: true,                            // Sets ID as the primary key.
    },
    address: {                                       // Is a string field.
        type: DataTypes.STRING,                      // Specifies the data type as a string.
        allowNull: false,                            // Ensures that the address cannot be null.
    },
    mapLink: {                                       // Text field for storing map URLs or descriptions.
        type: DataTypes.TEXT,                        // Allows storing long text.
        allowNull: false,                            // Ensures that the address cannot be null.
    },
    visible: {                                       // Boolean field indicating whether a location is visible or not. 
        type: DataTypes.BOOLEAN,                     // Specifies a boolean data type.
        allowNull: false,                            // Ensures that the address cannot be null.             
        defaultValue: true,                          // Sets a default value of true if no value is provided.
    },
}, {
    tableName: 'locations',                          // Name of the table in the database
    timestamps: false,                               // We exclude the createdAt and updatedAt columns
});

module.exports = Location;                           // Exports the Location model so it can be used in other parts of the application.