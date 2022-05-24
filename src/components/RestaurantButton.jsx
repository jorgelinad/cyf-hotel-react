import React from "react";

const RestaurantButton = ({ orders }) => {
  return (
    <button onClick={orders} className="btn btn-primary">
      Add
    </button>
  );
};

export default RestaurantButton;
