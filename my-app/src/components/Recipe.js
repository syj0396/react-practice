import React from "react";
import Ingredients from './Ingredients';
import Instructions from './Instructions';

function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h2>{name}</h2>
      <Ingredients list={ingredients}/>
      <Instructions title="조리 절차" steps={steps}/>
    </section>
  );
}

export default Recipe;
