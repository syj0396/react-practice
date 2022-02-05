import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/Menu';
import reportWebVitals from './reportWebVitals';
import recipes from './data/recipes.json';

ReactDOM.render(
  <React.StrictMode>
    <Menu title="맛있는 조리법 리스트!" recipes={recipes} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
