import { useState } from "react";
import Input from "../Input";
import Button from "../Button";

import "./photosSearchBar.scss";

const PhotosSearchBar = ({ onSubmit, photos }) => {
   const [value, setValue] = useState("");

   const hasMatchingPhoto = photos.some(photo => photo.albumId.toString() === value);

   const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(value);
   };

   let warning = null;
   if (!(value >= 1 && value <= 100)) {
      warning = <p className="warning">Please, enter the album value from 1 to 100</p>
   }

   return (
      <>
         <form onSubmit={handleSubmit} className="search-bar">
            <Input value={value}
               onChange={setValue}
               type="number"
               placeholder="take here number of Album" />
            <Button primary disabled={hasMatchingPhoto}>Get photos</Button>
         </form>
         {warning}
      </>
   )
};

export default PhotosSearchBar;