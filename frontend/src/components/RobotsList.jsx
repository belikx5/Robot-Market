import "../styles/robotsList.css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchRobots } from "../store/actions";
import RobotCard from "./RobotCard";
import MaterialFilter from "./MaterialFilter";


function RobotsList({ robots, fetchRobots }) {
  const [currFilter, setCurrFilter] = useState("None");
  const [visibleRobots, setVisibleRobots] = useState([]);
  useEffect(() => {
    fetchRobots();
  }, []);
  useEffect(() => {
    if (materials.includes(currFilter))
      setVisibleRobots(robots.filter((r) => r.material === currFilter));
    else setVisibleRobots(robots);
  }, [currFilter, robots]);
  const materials = [];
  robots.forEach(
    (r) => !materials.includes(r.material) && materials.push(r.material)
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

const mapStateToProps = (state) => ({
  robots: state.robotsState.robots,
});

export default connect(mapStateToProps, { fetchRobots })(RobotsList);
