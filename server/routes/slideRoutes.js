import express from 'express';
import Slide from '../models/slideModel';

const slideRouter = express.Router();

slideRouter.get('/', async (req, res) => {
    const slides = await Slide.find();
    res.send(slides);
});

export default slideRouter;