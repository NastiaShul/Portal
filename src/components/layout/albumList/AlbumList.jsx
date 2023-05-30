import React, { useEffect, useRef, useState, useMemo } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from "../errorMessage/ErrorMessage";
import AlbumForm from '../albumForm/AlbumForm';
import AlbumContent from '../albumContent/AlbumContent';

import './albumList.scss';

const AlbumList = () => {
   const [albums, setAlbums] = useState([]);
   const [albumId, setAlbumId] = useState(null);
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(false);

   const inputRef = useRef(null);

   useEffect(() => {
      if (albumId !== null) {
         inputRef.current.value = albumId.toString();
      }
   }, [albumId]);

   const fetchAlbums = async () => {
      setLoading(true);
      setError(false);

      try {
         const response = await fetch(
            `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
         );

         if (response.ok) {
            const data = await response.json();
            setAlbums(data);
         } else {
            setError(true);
         }
      } catch (error) {
         setError(true);
      } finally {
         setLoading(false);
      }
   };

   const handleAlbumIdChange = (event) => {
      const value = parseInt(event.target.value);
      if (value >= 1 && value <= 100) {
         setAlbumId(value);
      } else {
         setAlbumId(null);
      }
   };

   const isGetPhotosDisabled = useMemo(() => albumId === albums[0]?.albumId, [albumId, albums]);

   return (
      <section className="album">
         <h2>Albums</h2>
         <AlbumForm
            onAlbumIdChange={handleAlbumIdChange}
            onGetPhotosClick={fetchAlbums}
            inputRef={inputRef}
            isGetPhotosDisabled={isGetPhotosDisabled}
         />
         <ul className="album__list">
            {loading && <Spinner />}
            {error && <ErrorMessage />}
            {albums.length === 0 && !loading && !error ? (
               <p className="warning-message">
                  Please enter an album number between 1 and 100
               </p>
            ) : (
               <AlbumContent albums={albums} />
            )}
         </ul>
      </section>
   );
};

export default AlbumList;