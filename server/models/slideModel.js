import mongoose from "mongoose";

const slideSchema = new mongoose.Schema({

    name: {type: String, required: true},
    imgNumber: {type: Number, required: true, unique: true},
    image: {type: String, required: true},
    title: {type: String, required: true},
    subtitle: {type: String, required: true},

}


);

const Slide = mongoose.model('Slide', slideSchema);
export default Slide;