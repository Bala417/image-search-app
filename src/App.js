import { useState } from "react";
import SearchImage from "./Component/SearchImage";
import searchImages from "./api";
import ImageList from "./Component/ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchImage onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
