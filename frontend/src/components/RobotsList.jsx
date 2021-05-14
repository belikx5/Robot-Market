import "../styles/robotsList.css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../store/actions";
import RobotCard from "./RobotCard";
import MaterialFilter from "./MaterialFilter";
import AlertMessage from "./AlertMessage";
import CircularProgress from "@material-ui/core/CircularProgress";

function RobotsList({ robots, fetchError, fetchRobots }) {
  const [currFilter, setCurrFilter] = useState("None");
  const [responseError, setResponseError] = useState(false);
  const [visibleRobots, setVisibleRobots] = useState([]);
  useEffect(() => {
    fetchRobots();
  }, []);
  useEffect(() => {
    if (materials.includes(currFilter))
      setVisibleRobots(robots.filter((r) => r.material === currFilter));
    else setVisibleRobots(robots);
  }, [currFilter, robots]);
  useEffect(() => {
    setResponseError(!!fetchError);
  }, [fetchError]);
  const materials = [];
  robots.forEach(
    (r) => !materials.includes(r.material) && materials.push(r.material)
  );
  if (responseError)
    return (
      <AlertMessage
        error={fetchError}
        alertOpen={responseError}
        setAlertOpen={setResponseError}
        autoHideTime={20000}
      />
    );
  if (!robots.length)
    return (
      <div className="list-container">
        {" "}
        <CircularProgress />
      </div>
    );
  return (
    <>
      <div className="list-container">
        <MaterialFilter
          materials={materials}
          currentFilter={currFilter}
          onFilterChange={setCurrFilter}
        />
        <div className="robots-list">
          {visibleRobots.map((r) => {
            return <RobotCard key={r.id} robot={r} />;
          })}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    robots: state.robotsState.robots,
    fetchError: state.robotsState.fetchError,
  };
};

export default connect(mapStateToProps, { fetchRobots })(RobotsList);
