const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Create connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SswUfu*Esuub3!.',
    database: 'basic_backend_table'
});

// Open the MYSQL connection
connection.connect(error => {
    if (error) {
        console.log('Error connecting to database.');
        throw error;
    }
    app.get('/', (req, res) => {
        res.statusCode = 200
        res.setHeader('Conent-Type', 'text-plain')
        res.send('Hello World')
    })
    // Start the Express server
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
})