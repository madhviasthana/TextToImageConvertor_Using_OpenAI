import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './db/connect.js';
import postRoutes from './routes/post.js';
import dalleRoutes from './routes/dalle.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI); // Await the database connection
        app.listen(8000, () => { // Uncomment and call this to start the server
            console.log('Server Running on port 8000');
        });
    } catch (error) {
        console.error('Error connecting to the database:', error); // Log connection errors
    }
};

start(); // Call the start function to initiate the server and database connection
