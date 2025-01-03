/*==============================================================================================================================================================================================================*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*==============================================================================================================================================================================================================*/
/*--------------------------------------------------------- This code is a configuration for connecting to a MySQL database using Sequelize. -------------------------------------------------------------------*/
/*-----------------------------------------------------  It serves as the foundation for working with the database in an application by exporting, -------------------------------------------------------------*/
/*------------------------------------------------------- the sequelize instance for use in defining models and performing database operations. ----------------------------------------------------------------*/
/*==============================================================================================================================================================================================================*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*==============================================================================================================================================================================================================*/

const { Sequelize } = require('sequelize');                                   // Imports the Sequelize. Sequelize is an Object-Relational Mapper that simplifies interaction with relational databases like MySQL.

const sequelize = new Sequelize('test', 'root', 'root', {                     // Creates a Sequelize instance for managing the database connection.
    host: '127.0.0.1',                                                        // The database server's host address. 127.0.0.1 refers to the local machine (localhost).                    
    dialect: 'mysql',                                                         // Specifies the database type being used (mysql here)
});

sequelize.authenticate()                                                      // Attempts to connect to the database using the provided credentials and configuration.
    .then(() => console.log('Connected to the database'))                     // If the connection is successful, logs Connected to the database to the console.
    .catch(err => console.error('Error connecting to the database:', err));   // If there is an error, logs Error connecting to the database: followed by the error details.

module.exports = sequelize;                                                   // Exports the sequelize instance so it can be used elsewhere in the application.