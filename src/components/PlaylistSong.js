import React from 'react';
import {playAudio} from '../components/util'

const PlaylistSong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = () => {
    // const selectedSong = songs.filter((state) => state.id === song.id);
    setCurrentSong(song);
    playAudio(isPlaying, audioRef)
  };

  return (
    <div
      onClick={songSelectHandler}
      className={`playlist-song ${song.active ? 'selected' : ''}`}
    >
      <img src={song.cover} alt={song.name}></img>
      <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default PlaylistSong;
