import {Schema, model} from 'mongoose';

const TrackSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
});

const Track = model('Track', TrackSchema);

export default Track;