import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({setPlaylistStatus, playlistStatus}) => {
  return (
    <nav>
      <h1>musicVibes</h1>
      <button onClick={() => setPlaylistStatus(!playlistStatus)}>
        Playlist
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
