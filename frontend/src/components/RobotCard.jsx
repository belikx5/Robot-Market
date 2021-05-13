import "../styles/robotCard.css";
import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import {
  addSelectedRobot,
  removeSelectedRobot,
  editRobot,
} from "../store/actions";
import { formatDate } from "../utils/date";
import AlertMessage from "./AlertMessage";

const validateCartElements = (selectedRobots, newRobot) => {
  const uniqueIDs = new Set(selectedRobots.map((r) => r.id));
  return uniqueIDs.size < 5 || uniqueIDs.has(newRobot.id); //should be up to 5 in cart
};

function RobotCard({
  robot,
  selectedRobots,
  inCart,
  editRobot,
  addSelectedRobot,
  removeSelectedRobot,
}) {
  const [alertOpen, setAlertOpen] = useState(false);

  const addToCart = (robot) => {
    if (robot.stock > 0) {
      if (validateCartElements(selectedRobots, robot)) {
        addSelectedRobot(robot);
        robot.stock--;
        editRobot(robot);
      } else setAlertOpen(true);
    }
  };
  const deleteFromCart = (robot) => {
    removeSelectedRobot(robot.id);
    robot.stock++;
    editRobot(robot);
  };

  return (
    <>
      <Paper
        variant="outlined"
        className={`robot-card ${inCart ? "cart" : ""}`}>
        <div
          className="robot-main-data"
          style={{ backgroundImage: `url("${robot.image}")` }}>
          <div className="robot-main-data-gradient">
            <span className="robot-main-data-name">{robot.name}</span>
          </div>
        </div>
        <span>
          Price: <span className="robot-main-data-value">฿{robot.price}</span>
        </span>
        {!inCart && (
          <span>
            Stock: <span className="robot-main-data-value">{robot.stock}</span>
          </span>
        )}
        <span>
          Created date:{" "}
          <span className="robot-main-data-value date">
            {formatDate(robot.createdAt)}
          </span>
        </span>
        <span>
          Material:{" "}
          <span className="robot-main-data-value">{robot.material}</span>
        </span>
        {inCart ? (
          <>
            <Button
              onClick={() => addToCart(robot)}
              disabled={!!!robot.stock}
              variant="contained"
              color="primary"
              className="card-button">
              Add one more
            </Button>
            <Button
              onClick={() => deleteFromCart(robot)}
              variant="contained"
              color="secondary"
              className="card-button">
              Delete
            </Button>
          </>
        ) : (
          <Button
            onClick={() => addToCart(robot)}
            disabled={!!!robot.stock}
            variant="contained"
            color="primary"
            className="card-button">
            Add to cart
          </Button>
        )}
      </Paper>
      <AlertMessage
        error={
          "You can add up to 5 different robots to the cart, but the number of robots of the same is unlimited"
        }
        alertOpen={alertOpen}
        setAlertOpen={setAlertOpen}
      />
    </>
  );
}

const mapStateToProps = (state) => ({
  robots: state.robotsState.robots,
  selectedRobots: state.robotsState.selectedRobots,
});

export default connect(mapStateToProps, {
  addSelectedRobot,
  removeSelectedRobot,
  editRobot,
})(RobotCard);
