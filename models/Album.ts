import {Schema, model} from 'mongoose';

const AlbumSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    issue: {
        type: String,
        required: true
    },
    image: String,
});

const Album = model('Album', AlbumSchema);

export default Album;