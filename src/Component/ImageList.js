import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const imageMapping = images.map((image) => {
    return <ImageShow image={image} key={image.id} />;
  });
  return <div>{imageMapping}</div>;
}

export default ImageList;
