import React, { useEffect, useState } from 'react';
import restaurantData from "./restaurantList.json";
import './App.css';
import redHeart from './img/redHeart.png';
import emptyHeart from './img/emptyHeart.png';

function App() {
  const [restaurantList, setRestaurantList] = useState(restaurantData.restaurantList);

  const changeHeart = e => {
    e.preventDefault();
    const targetId = e.target.parentElement.id - 1;

    const targetR = restaurantList[targetId];

    // 빈 하트 클릭하면 빨간 하트로 변경, 카운트 1 증가
    if (e.target.id === "restaurant-empty") {
      e.target.id = "restaurant-red";
      e.target.src= redHeart;
      targetR.heartCnt += 1;
    }
    // 빨간 하트 클릭하면 빈 하트로 변경, 카운트 1 감소
    else if (e.target.id === "restaurant-red") {
      e.target.id = "restaurant-empty";
      e.target.src = emptyHeart;
      targetR.heartCnt -= 1;
    }
    setRestaurantList(restaurantList.filter(r => r.id !== targetId));
    setRestaurantList(restaurantList.concat(targetR));

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
