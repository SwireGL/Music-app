export interface TrackMutation {
    album: string;
    title: string;
    duration?: string;
}

export interface ArtistMutation {
    name: string;
    image?: string | null;
    info?: string;
}

export interface AlbumMutation {
    artist: string;
    title: string;
    issueDate: Date;
    image?: string | null;
}