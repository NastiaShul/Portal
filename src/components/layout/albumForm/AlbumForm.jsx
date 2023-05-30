import React, { useEffect } from 'react';

const AlbumForm = ({ onAlbumIdChange, onGetPhotosClick, inputRef, isGetPhotosDisabled }) => {
   useEffect(() => {
      if (inputRef.current && inputRef.current.value === '') {
         inputRef.current.focus();
      }
   }, [inputRef]);

   const handleFormSubmit = (event) => {
      event.preventDefault();
      onGetPhotosClick();
   };

   return (
      <form onSubmit={handleFormSubmit}>
         <input
            type="number"
            onChange={onAlbumIdChange}
            ref={inputRef}
         />
         <button
            type="submit"
            className="button"
            disabled={isGetPhotosDisabled}
         >
            Get photos
         </button>
      </form>
   );
};

export default AlbumForm;
