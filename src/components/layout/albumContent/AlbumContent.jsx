import React from 'react';

import "./albumContent.scss";

const AlbumContent = ({ albums }) => {
   return albums.map((album) => (
      <li key={album.id}>
         <img src={album.thumbnailUrl} alt={album.title} />
      </li>
   ));
};

export default AlbumContent;