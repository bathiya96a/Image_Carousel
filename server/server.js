import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import slideRouter from './routes/slideRoutes.js';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Database is Connected")
})
.catch((err) => {
    console.log(err.message);
});

const app = express();
app.use('/api/seed', seedRouter);


app.get('/api/carousel', slideRouter);

const port = process.env.PORT || 3600;
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`);
});