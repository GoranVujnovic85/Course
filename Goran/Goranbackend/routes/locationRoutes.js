/*============================================================================================================================================================================================================*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*============================================================================================================================================================================================================*/
/*--------------------------------------- This code defines an Express.js router module for handling API routes related to managing locations in a database. -------------------------------------------------*/
/*------------------------------------------ This code defines a set of Express routes for basic CRUD operations (fetching, creating, deleting locations). ---------------------------------------------------*/
/*------------------------------------------------------------------------------------- Purpose of the Code: -------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------- This module provides API endpoints to manage a data resource: ----------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------- 1. GET /locations: Fetch all records. ------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------- 2. POST /locations: Add a new record. ------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------- 3. DELETE /locations/:ID: Delete a record by ID. -------------------------------------------------------------------------------*/
/*============================================================================================================================================================================================================*/
/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*/
/*============================================================================================================================================================================================================*/

const express = require('express');                                                                   // Imports the Express library, which provides tools to create HTTP servers.
const router = express.Router();                                                                      // Creates an Express Router object to define and manage routes separately from the main application file.
const Location = require('../controllers/locations');                                                 // Imports the Location controller, which likely contains database-related logic.

// Route to fech all locations
router.get('/locations', async (req, res) => {                                                        // Handles GET requests to /data to fech all records from the database.
    try {
        const locations = await Location.findAll();                                                   // Calls Location.findAll() to fetch all records from the database.
        res.json(locations);                                                                          // Sends the fetched records back to the client as a JSON response using res.json(records).
    } catch (err) {
        console.error('Error fetching locations:', err);                                              // Logs and sends a 500 error if fetching fails.
        res.status(500).send('Error fetching locations from database.');                              // Logs and sends a 500 error if fetching fails.
    }
});

// Route to add new location
router.post('/locations', async (req, res) => {                                                       // Handles POST requests to /locations to create a new record in the database. 
    const { address, mapLink, visible } = req.body;                                                   // Extracts address, mapLink, and visible from the request body.                                                
    if (!address || !mapLink) {                                                                       // Checks if all fields are provided;                                                                      
        return res.status(400).json({ message: "Fields 'address' and 'mapLink' are required." });     // if not, sends a 400 response with an error message. 
    }
    try {
        const newLocation = await Location.create({ address, mapLink, visible });                     // Uses Location.create() to add a new record to the database.
        res.status(201).json({ message: 'Location added successfully', location: newLocation });      // Logs the created record and responds with the new data using res.status(201).json(...).
    } catch (err) {
        console.error('Error adding location:', err);                                                 // Logs and sends a 500 error if creation fails.
        res.status(500).send('Error adding location to the database.');                               // Logs and sends a 500 error if creation fails.
    }
});

// Route to update locations
router.put('/locations/:id', async (req, res) => {                                                    // This defines a route for an HTTP PUT request to update data in the database.
    const { id } = req.params;                                                                        // Extracts the dynamic ID parameter from the request URL (req.params).
    const { address, mapLink, visible } = req.body;                                                   // Extracts address, mapLink, and visible from the request body.  
    try {
        const updated = await Location.update(                                                        // Updates records in the database.
            { address, mapLink, visible },                                                            // The fields to update.
            { where: { id } }                                                                         // Specifies a condition to find records by title and ensures any Sequelize hooks are executed.
        );
        if (updated[0]) {
            res.json({ message: `Location with ID ${id} updated successfully.` });                    // Sends a success message if a record is updated.
        } else {
            res.status(404).json({ message: `Location with ID ${id} not found.` });                   // A 404 response if no matching record is found.
        }
    } catch (err) {
        console.error('Error updating location:', err);                                               // Logs and sends a 500 error if creation fails.
        res.status(500).send('Error updating location in the database.');                             // Logs and sends a 500 error if creation fails.
    }
});

// Route to delate location by ID
router.delete('/locations/:id', async (req, res) => {                                                 // Handles DELETE requests to /data/:id to delete a specific record identified by its ID.
    const { id } = req.params;                                                                        // Extracts the title parameter from the URL using req.params.
    try {
        const deleted = await Location.destroy({ where: { id } });                                    // Uses Data.destroy() with a condition (where: { id }) to delete the matching record from the database.
        if (deleted) {
            res.json({ message: `Location with ID ${id} deleted successfully.` });                    // Sends a success message if a record is deleted.
        } else {
            res.status(404).json({ message: `Location with ID ${id} not found.` });                   // A 404 response if no matching record is found.
        }
    } catch (err) {
        console.error('Error deleting location:', err);                                               // Logs and sends a 500 error if deletion fails.
        res.status(500).send('Error deleting location from the database.');                           // Logs and sends a 500 error if deletion fails.
    }
});

module.exports = router;                                                                              // Exports the router object so it can be imported and used in the main application file.