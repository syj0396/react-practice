import React from "react";
import Star from "./Star";

function StarRating({ totalStars = 5, selectedStars = 0 }) {
  const createArray = length => [...Array(length)];
  
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
        />
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </>
  );
}

export default StarRating;
