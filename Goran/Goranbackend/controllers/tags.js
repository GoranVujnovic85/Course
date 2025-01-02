/*===============================================================================================================================================================================*/
/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*===============================================================================================================================================================================*/
/*------------------------------ This code defines a Sequelize model named  for managing a locations table in the database. ---------------------------------------------*/
/*------------------------------------------ The model includes fields for id, address, mapLink, and visible, -------------------------------------------------------------------*/
/*------------------------------------ with appropriate configurations for data types, constraints, and table management.--------------------------------------------------------*/
/*===============================================================================================================================================================================*/
/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*===============================================================================================================================================================================*/

const { DataTypes } = require('sequelize');          // Imports the DataTypes object from Sequelize, which provides various data types necessary for defining the schema of models.
const sequelize = require('../config/database');     // Imports a Sequelize instance configured to connect to a database. 

const Tags = sequelize.define('tags', {              // Defines a Sequelize model named Tags. This model represents the tags table in the database.
    id: {                                            // Primary key of the model.
        type: DataTypes.INTEGER,                     // Specifies that id is an integer.
        autoIncrement: true,                         // Indicates that the ID will auto-increment for each new entry.
        primaryKey: true,                            // Sets ID as the primary key.
    },
    is_active: {                                     // Is a boolean field.
        type: DataTypes.BOOLEAN,                     // Specifies the data type as a boolean.
        allowNull: false,                            // Ensures that the address cannot be null.
    },
    is_linked: {                                     // Is a boolean field.
        type: DataTypes.BOOLEAN,                     // Specifies the data type as a boolean.
        allowNull: false,                            // Ensures that the address cannot be null.
    },
    name: {                                          // String field for storing the name of tag. 
        type: DataTypes.STRING,                      // Specifies a string data type..
        allowNull: false,                            // Ensures that the address cannot be null.             
    },
    type: {                                          // String field for storing the type of tag.
        type: DataTypes.STRING,                      // Specifies a string data type.
        allowNull: false,                            // Ensures that the field cannot be null.
    },
    /*
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    },
    */
}, {
    tableName: 'tags',                               // Name of the table in the database
    timestamps: true,                               // We exclude the createdAt and updatedAt columns
    underscored: true,                               // Optional: Ensures that column names are snake_case.
});

module.exports = Tags;                               // Exports the Tags model so it can be used in other parts of the application.