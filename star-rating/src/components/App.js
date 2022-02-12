import React, { useState } from "react";
import colorData from "../data/color-data.json";
import ColorList from "./ColorList";

export default function App() {
    // 객체 colorData를 구조 분해하면 const {colors} = colorData인데 
    // 
    const [{colors}] = useState(colorData);
    console.log("hi", typeof(colors));
    return <ColorList colors={colors} />
}