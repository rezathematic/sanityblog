import { urlFor } from "../lib/sanity";

const Review = ({ review }) => {
  return (
    <div className="review-box">
      <img
        src={urlFor(review.traveller.image)
          .width(50)
          .height(50)
          .crop("focalpoint")
          .auto("format")}
      />
      <h2>{review.traveller.name}</h2>
      <h1>{review.rating}</h1>
      {/* <p>{review.description}</p> */}
    </div>
  );
};

export default Review;
