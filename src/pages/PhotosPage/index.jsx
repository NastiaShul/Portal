import { useState } from "react";
import { searchPhotos } from "../../api/search-photos";

import Panel from "../../components/Panel";
import PhotosSearchBar from "../../components/PhotosSearchBar";
import PhotosList from "../../components/PhotosList";

const PhotosPage = () => {
   const [photos, setPhotos] = useState([]);
   const [loading, setLoading] = useState(false);

   const handleSubmit = async (value) => {
      try {
         setLoading(true);
         await new Promise((resolve) => setTimeout(resolve, 1000));
         const response = await searchPhotos(value);
         setPhotos(response);
      } catch (error) {
         console.error("Error fetching photos:", error);
      } finally {
         setLoading(false);
      }
   };

   return (
      <Panel title="Photos">
         <PhotosSearchBar onSubmit={handleSubmit} photos={photos} />
         {loading ? (
            <div>Loading...</div>
         ) : (
            <PhotosList photos={photos} />
         )}
      </Panel>
   );
};

export default PhotosPage;