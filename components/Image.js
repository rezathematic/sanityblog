import { urlFor } from "../lib/sanity";

const Image = ({ identifier, image }) => {
  return (
    <div className={identifier === "main-image" ? "main-image" : "image"}>
      <img src={urlFor(image).auto("format")} />
    </div>
  );
};

export default Image;
