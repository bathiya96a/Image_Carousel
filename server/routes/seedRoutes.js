import express from "express";
import Slide from "../models/slideModel.js";
import data from '../data.js'

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    await Slide.remove({});
    const createdSlides = await Slide.insertMany(data.slides);
    res.send({ createdSlides});
});

export default seedRouter;