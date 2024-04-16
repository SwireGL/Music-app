import express from "express";
import cors from "cors";
import mongoose from 'mongoose';
import config from './config';
import albumsRouter from "./routers/Albums";
import artistsRouter from "./routers/Artist";
import tracksRouter from "./routers/Tracks";


const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/albums', albumsRouter);
app.use('/artists', artistsRouter);
app.use ('/tracks', tracksRouter);

const run = async () => {
    await mongoose.connect(config.mongoose.db);

    app.listen(port, () => {
        console.log(`Port: ${port}`);
    });

    process.on('exit', () => {
        mongoose.disconnect();
    });
};

void run();