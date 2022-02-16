import React, { useEffect, useState } from 'react';
import restaurantData from "./restaurantList.json";
import './App.css';
import redHeart from './img/redHeart.png';
import emptyHeart from './img/emptyHeart.png';

function App() {
  const [restaurantList, setRestaurantList] = useState(restaurantData.restaurantList);

  const changeHeart = e => {
    e.preventDefault();
    const tempList = restaurantList;
    const targetId = e.target.parentElement.id - 1;

    if (e.target.id === "restaurant-empty") {
      e.target.id = "restaurant-red";
      e.target.src= redHeart;
      tempList[targetId].heartCnt += 1;
    }
    else if (e.target.id === "restaurant-red") {
      e.target.id = "restaurant-empty";
      e.target.src = emptyHeart;
      tempList[targetId].heartCnt -= 1;
    }
    setRestaurantList(tempList);
    console.log(tempList);
    console.log(restaurantList);
  }
  
  return (
    <div className="restaurantList-wrapper">
      <h4 className="restaurant-filter">혜화역 근처 맛집</h4>
      {restaurantList.map((restaurant) => (
        <div className="restaurant-wrapper">
          {/* 식당 사진 */}
          <div className="restaurant-img-box">
            <img className="restaurant-img" src={restaurant.img}/>
          </div>

          {/* 식당 이름, 설명, 주소, 하트 */}
          <div className="restaurant-box">
            <div id={restaurant.id} className="restaurant-box-top">
              <h4>{restaurant.name}</h4>
              <img 
                className="restaurant-heart" 
                id="restaurant-empty" 
                src={emptyHeart} 
                onClick={changeHeart} 
              />
            </div>
            <div className="restaurant-explanation">{restaurant.explanation}</div>
            <div className="restaurant-address">{restaurant.address}</div>
            <div className="restaurant-box-bottom">
              <img className="restaurant-redHeart" src={redHeart} />
              <div className="restaurant-heartCnt">{restaurant.heartCnt}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
