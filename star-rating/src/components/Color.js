import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";
import { useColors } from "../color-hooks";

// id가 안 쓰이면 prop으로 전달받지 않으면 됨!
export default function Color({ id, title, color, rating }) {
    const { rateColor, removeColor } = useColors();
    return (
        <div>
            <h2>{title}</h2>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }}></div>
            <StarRating 
                selectedStars={rating}
                onRate={rating => rateColor(id, rating)} />
        </div>
    )
}