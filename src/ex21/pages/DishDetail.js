import React from "react";
import { Link, useParams } from "react-router-dom";
import { dishes } from "../data/dishes";

function DishDetail() {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === parseInt(id));

  if (!dish) return <p>Dish not found</p>;

  return (
    <div>
      <h1>
        {dish.name} {dish.label && <small>({dish.label})</small>}
      </h1>
      <p>Category: {dish.category}</p>
      <p>Price: ${dish.price}</p>
      <p>{dish.description}</p>
      <Link to="/dishes">&larr; Back to Dish List</Link>
    </div>
  );
}

export default DishDetail;