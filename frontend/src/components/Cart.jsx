import "../styles/cart.css";
import React from "react";
import { connect } from "react-redux";
import RobotCard from "./RobotCard";

function Cart({ selectedRobots }) {
  const countTotalPrice = () => {
    return selectedRobots.reduce((ac, el) => ac + +el.price, 0);
  };
  if (!selectedRobots.length) return <h3 className="cart-info">Your cart is empty</h3>;
  return (
    <div>
      <h5 className="cart-info">Total amount: {selectedRobots.length}</h5>
      <h5 className="cart-info">
        Total price: ฿ {countTotalPrice().toFixed(2)}
      </h5>
      {selectedRobots.map((c, index) => {
        return <RobotCard key={index} robot={c} inCart={true} />;
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedRobots: state.robotsState.selectedRobots,
});

export default connect(mapStateToProps, null)(Cart);
