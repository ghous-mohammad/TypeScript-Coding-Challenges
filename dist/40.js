const make_album = (artist_name, album_title, tracks) => {
    return {
        artist_name: artist_name,
        album_title: album_title,
        tracks: tracks
    };
};
const albumWithoutTrack = make_album("The Beatles", "Abbey Road");
const albumWithTrack = make_album("The Rolling Stones", "Let It Bleed", 3);
console.log(albumWithTrack);
console.log(albumWithoutTrack);
export {};
//# sourceMappingURL=40.js.map