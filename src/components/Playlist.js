import React from 'react';
import PlaylistSong from './PlaylistSong';

const Playlist = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  playlistStatus,
}) => {
  return (
    <div className={`playlist ${playlistStatus ? 'active-playlist' : ''}`}>
      <h2>Playlist</h2>
      <div className='playlist-songs'>
        {songs.map((song) => (
          <PlaylistSong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
