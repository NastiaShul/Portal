import axios from "axios";

const searchPhotos = async (value) => {
   const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${value}`
   );
   return response.data;
};

export { searchPhotos };