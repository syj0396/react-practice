import React from "react";
import Ingredient from "./Ingredient";

// 재료 리스트를 반복해서 창에 띄울 것이다. 라는 map 함수는
// 부모 컴포넌트인 Recipe에 정의함으로써
// ingredients 컴포넌트에는 재료 리스트 코드만 들어가게.
// 부모 컴포넌트에서 전달하는 속성 이름과 요기서 전달받는 이름이 list로 동일해야 함.
function Ingredients({ list }) {
    return (
        <ul className="ingredients">
            {list.map((ingredient, i) => (
                <Ingredient key={i} {...ingredient} />
            ))}
        </ul>
    )
}

export default Ingredients;