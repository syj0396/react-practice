import React from "react";
import Recipe from "./Recipe";

// 속성으로 data를 받을까 아님 나눠서 name, ingredients, steps 이렇게 받을까
// data로 받아야 함. 우선 레시피 각각에 대해 컴포넌트 적용해야 하기 때문에.
function Menu({ title, recipes }) {
    console.log(recipes);
    return (
        <article>
            <header>
                <h1>{title}</h1>
            </header>
            
            <div>
                {recipes.map((recipe, i) => (
                    <Recipe key={i} {...recipe} />
                ))}
            </div>
        </article>
    );
}

export default Menu;