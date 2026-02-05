const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL
});

const seedData = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
    { name: 'Alice Johnson', email: 'alice@example.com' }
];

async function seed() {
    try {
        await client.connect();
        console.log('Connected to database for seeding...');

        // Create table if not exists
        await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE
      );
    `);
        console.log('Users table ensured.');

        // Clear existing data
        await client.query('TRUNCATE users RESTART IDENTITY;');
        console.log('Users table cleared.');

        // Insert seed data
        for (const user of seedData) {
            await client.query('INSERT INTO users (name, email) VALUES ($1, $2)', [user.name, user.email]);
            console.log(`Inserted user: ${user.name}`);
        }

        console.log('Seeding completed successfully.');
        process.exit(0);
    } catch (err) {
        console.error('Seeding failed:', err);
        process.exit(1);
    } finally {
        await client.end();
    }
}

seed();
