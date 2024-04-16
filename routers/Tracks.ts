    import express from "express";
    import Track from "../models/Track";
    import {TrackMutation} from "../types";

    const tracksRouter = express.Router();

    tracksRouter.get('/', async (req, res) => {
        try {
            const artist = typeof req.query.artist === 'string' ? req.query.artist : undefined;

            let tracks;

            if (artist) {
                tracks = await Track.find({ artist }).populate('artist');
            } else {
                tracks = await Track.find().populate('artist');
            }

            return res.send(tracks);
        } catch (e) {
            return res.sendStatus(500);
        }
    });

    tracksRouter.post('/', async (req, res) => {
        const trackData: TrackMutation = {
            title: req.body.title,
            album: req.body.album,
            duration: req.body.duration,
        };

        const track = new Track(trackData);

        try {
            await track.save();
            return res.send(track);
        } catch (e) {
            return res.status(400).send(e);
        }
    });

    export default tracksRouter;