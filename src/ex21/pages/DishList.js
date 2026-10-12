import React from "react";
import { Link } from "react-router-dom";
import { dishes } from "../data/dishes";

function DishList() {
  return (
    <div>
      <h1>Dish List</h1>
      <ul>
        {dishes.map((dish) => (
          <li key={dish.id}>
            ID: <Link to={`/dishes/${dish.id}`}>{dish.id}</Link> - {dish.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DishList;