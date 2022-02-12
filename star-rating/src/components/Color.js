import React from "react";
import StarRating from "./StarRating";

// id가 안 쓰이면 prop으로 전달받지 않으면 됨!
export default function Color({ title, color, rating }) {
    return (
        <div>
            <h2>{title}</h2>
            <div style={{ height: 50, backgroundColor: color }}></div>
            <StarRating selectedStars={rating} />
        </div>
    )
}