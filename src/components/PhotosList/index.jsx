import PhotosShow from "../PhotosShow";

import "./photosList.scss";

const PhotosList = ({ photos }) => {
   const renderedPhotos = photos.map(photo => {
      return (
         <PhotosShow key={photo.id} photo={photo} />
      )
   })
   return (
      <div className="photos-list">
         {renderedPhotos}
      </div>
   )
};

export default PhotosList;