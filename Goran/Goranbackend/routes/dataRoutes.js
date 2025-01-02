/*===================================================================================================================================================================================================*/
/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*===================================================================================================================================================================================================*/
/*--------------------------------------- This code defines an Express.js router module for handling API routes related to managing data in a database. ---------------------------------------------*/
/*------------------------------------------ This code defines a set of Express routes for basic CRUD operations (fetching, creating, deleting data). -----------------------------------------------*/
/*------------------------------------------------------------------------------------- Purpose of the Code: ----------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------- This module provides API endpoints to manage a data resource: -------------------------------------------------------------------*/
/*--------------------------------------------------------------------------- 1. GET /data: Fetch all records. --------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------- 2. POST /data: Add a new record. --------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------- 3. DELETE /data/:title: Delete a record by title. ---------------------------------------------------------------------*/
/*===================================================================================================================================================================================================*/
/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*===================================================================================================================================================================================================*/

const express = require('express');                                                         // Imports the Express library, which provides tools to create HTTP servers.
const router = express.Router();                                                            // Creates an Express Router object to define and manage routes separately from the main application file.
const Data = require('../controllers/data');                                                // Imports the Data controller, which likely contains database-related logic. 

// Route to fetch all data
router.get('/data', async (req, res) => {                                                   // Handles GET requests to /data to fech all records from the database.
    try {
        const records = await Data.findAll();                                               // Calls Data.findAll() to fetch all records from the database.
        res.json(records);                                                                  // Sends the fetched records back to the client as a JSON response using res.json(records).
    } catch (err) {
        console.error('Error fetching data:', err);                                         // Logs and sends a 500 error if fetching fails.       
        res.status(500).send('Error fetching data from database.');                         // Logs and sends a 500 error if fetching fails.
    }
});

// Route to add new data
router.post('/data', async (req, res) => {                                                  // Handles POST requests to /data to create a new record in the database.                                               
    console.log('Request body:', req.body);                                                 // Logs the request body (req.body) to the console.  
    const { title, description, author } = req.body;                                        // Extracts title, description, and author from the request body.
    if (!title || !description || !author) {                                                // Checks if all fields are provided;
        return res.status(400).json({ message: "Enter: title, description, author." });     // if not, sends a 400 response with an error message.
    
    }
    try {
        const newData = await Data.create({ title, description, author });                  // Uses Data.create() to add a new record to the database.
        console.log('Data created:', newData);                                              // Logs the input result.
        res.status(201).json({ message: 'Data added successfully', data: newData });        // Logs the created record and responds with the new data using res.status(201).json(...).
    } catch (err) {
        console.error('Error adding data:', err);                                           // Logs and sends a 500 error if creation fails.
        res.status(500).send('Error adding data to the database.');                         // Logs and sends a 500 error if creation fails.
    }
});

// Route to update data
router.put('/data/:title', async (req, res) => {                                            // This defines a route for an HTTP PUT request to update data in the database.
    const { title } = req.params;                                                           // Extracts the dynamic title parameter from the request URL (req.params).
    const { description, author } = req.body;                                               // Extracts the description and author fields from the request body (req.body).

    // Data validation
    if (!description || !author) {                                                          // Ensures that the request includes both description and author in the body. 
        return res.status(400).json({ message: "All fields are required." });               // If either is missing, it returns a 400 Bad Request response with an appropriate error message.
    }

    try {
        // Update data
        const updated = await Data.update(                                                  // Updates records in the database.
            { description, author },                                                        // The fields to update.
            { where: { title }, individualHooks: true }                                     // Specifies a condition to find records by title and ensures any Sequelize hooks are executed.
        );

        if (updated[0] > 0) {
            res.json({ message: `Data with title "${title}" updated successfully.` });      // Sends a success message if a record is updated.
        } else {
            res.status(404).json({ message: `Data with title "${title}" not found.` });     // A 404 response if no matching record is found.
        }
    } catch (err) {
        console.error('Error updating data:', err);                                         // Logs and sends a 500 error if creation fails.
        res.status(500).send('Error updating data in the database.');                       // Logs and sends a 500 error if creation fails.
    }
});

// Route to delate data by title
router.delete('/data/:title', async (req, res) => {                                         // Handles DELETE requests to /data/:title to delete a specific record identified by its title.
    const { title } = req.params;                                                           // Extracts the title parameter from the URL using req.params.
    try {
        const deleted = await Data.destroy({ where: { title } });                           // Uses Data.destroy() with a condition (where: { title }) to delete the matching record from the database.
        if (deleted) {
            res.json({ message: `Data with title "${title}" deleted successfully.` });      // Sends a success message if a record is deleted.
        } else {
            res.status(404).json({ message: `Data with title "${title}" not found.` });     // A 404 response if no matching record is found.
        }
    } catch (err) {
        console.error('Error deleting data:', err);                                         // Logs and sends a 500 error if deletion fails.
        res.status(500).send('Error deleting data from database.');                         // Logs and sends a 500 error if deletion fails.
    }
});

module.exports = router;                                                                    // Exports the router object so it can be imported and used in the main application file.