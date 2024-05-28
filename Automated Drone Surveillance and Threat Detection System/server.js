const express = require('express');
const { Client } = require('pg');
const axios = require('axios');

const app = express();
app.use(express.json());

// PostgreSQL client setup
const client = new Client({
    user: 'your_username',
    host: 'localhost',
    database: 'drone_surveillance',
    password: 'your_password',
    port: 5432,
});
client.connect();

app.post('/alert', async (req, res) => {
    const { message, timestamp } = req.body;

    try {
        const query = 'INSERT INTO alerts(message, timestamp) VALUES($1, $2)';
        await client.query(query, [message, timestamp]);

        res.status(200).send('Alert logged');
    } catch (error) {
        res.status(500).send('Error logging alert');
    }
});

app.get('/alerts', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM alerts');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).send('Error retrieving alerts');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
