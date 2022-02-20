import React from "react";
import Star from "./Star";

function StarRating({ totalStars = 5, selectedStars = 0, onRate = f => f }) {
  const createArray = length => [...Array(length)];
  
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </>
  );
}

export default StarRating;
