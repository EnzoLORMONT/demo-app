const express = require('express');
const { Client } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const client = new Client({
    connectionString: process.env.DATABASE_URL
});

async function start() {
    try {
        await client.connect();
        console.log('Connected to database');

        app.get('/', async (req, res) => {
            try {
                const result = await client.query('SELECT * FROM users');
                res.json({
                    message: 'Hello from KubeEphemeral Demo App!',
                    users: result.rows,
                    pod: process.env.HOSTNAME
                });
            } catch (err) {
                // Table might not exist yet if not seeded
                res.status(500).json({ error: err.message, hint: "Did you run the seed job?" });
            }
        });

        app.get('/health', (req, res) => {
            res.status(200).send('OK');
        });

        app.listen(port, () => {
            console.log(`App listening on port ${port}`);
        });
    } catch (err) {
        console.error('Failed to connect to database:', err);
        process.exit(1);
    }
}

start();
