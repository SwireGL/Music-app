import {Schema, model} from 'mongoose';

const ArtistSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: String,
    info: String
});

const Artist = model('Artist', ArtistSchema);

export default Artist;