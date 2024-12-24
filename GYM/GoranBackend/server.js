/*==================================================================================================================================*/
/*---Three ways to display JSON file: ----------------------------------------------------------------------------------------------*/
/*---------------------------------- 1. Copy the address ---> http://localhost:3000 ---> through HTML ------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------ 2. Copy the address ---> http://localhost:3000/?file=tags.json ---> through CONSOLE ---------*/ 
/*----------------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------- 3. Copy the address ---> http://localhost:3000/json/location.json ---> through PAGE ------*/                                                                                       
/*==================================================================================================================================*/

const express = require('express');                                          // Import Express framework
const fs = require('fs');                                                    // This module allows you to perform various file operations, such as reading, writing, updating, and deleting files.
const path = require('path');                                                // Import the Path module, that provides utilities for working with file and directory paths.

const app = express();                                                       // Creates an instance of an Express application.
const PORT = 3000;

// Route for displaying JSON data with the option to select a file.
app.get('/', (req, res) => {
    const fileName = req.query.file || 'data.json';                          // If query parameter is not given, use 'data.json' as default file
    const filePath = path.join(__dirname, 'json', fileName);                 // You can then use this filePath to read, write, or manipulate the JSON file using Node.js file system operations (fs module).
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {                                                           // Error handling
            console.error('Error reading JSON file:', err);                  // Error handling
            return res.status(500).send('Error reading file!');              // Error handling
        }
        // First way to display JSON file
        if (fileName === 'data.json') {                                      // Checks if the variable fileName exactly matches the string 'data.json'.
            const jsonData = JSON.parse(data);                               // Parse a JSON string into a JavaScript object.
            const htmlContent = `                                            
                <html>
                <head>
                    <title>${jsonData.title}</title>
                </head>
                <body>
                    <h1>${jsonData.title}</h1>
                    <p>${jsonData.description}</p>
                    <footer>Autor: ${jsonData.author}</footer>
                </body>
                </html>
            `;
            res.send(htmlContent);                                           // Sends an HTML string (htmlContent) as a response to the client in a web application built with Express.
        } 

        // Second way to display JSON file
        else {
            console.log(`Displaying the JSON file: ${fileName}`);            // Print message on the top of console
            console.log(data);                                               // Print the contents of the JSON to the console
            res.send('Look in the console :)');                              // Print message on page
        }
    });

    // Third way to display JSON file
    app.get('/json/:fileName', (req, res) => {
        const filePath = path.join(__dirname, 'json', req.params.fileName);
        res.sendFile(filePath);                                             // Sends the file specified by filePath to the client. 
    });
});

// Running server
app.listen(PORT, () => {                                                     // Starts the Express server on a specified port. 
    console.log(`The server is running on: http://localhost:${PORT}`);       // The server is running on: http://localhost:3000
});