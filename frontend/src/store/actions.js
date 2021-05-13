import { 
    ADD_SELECTED_ROBOT,
    FETCH_ROBOTS, 
    SET_SELECTED_ROBOTS ,
    EDIT_ROBOT,
    REMOVE_SELECTED_ROBOT
} from "./constants";

export const fetchRobots = () => dispatch => {
    fetch("http://localhost:8000/api/robots")
    .then(res => {
        res.json()
        .then(data => {
            const robots = data.data.map((d, index) => ({...d, id: index }) );
            dispatch({type: FETCH_ROBOTS, payload: robots});
        })
    })
}
export const editRobot = (robot) => dispatch => {
    dispatch({ type: EDIT_ROBOT, payload: robot})
}

export const setSelectedRobots = (robots) => dispatch => {
    dispatch({ type: SET_SELECTED_ROBOTS, payload: robots });
}   
export const addSelectedRobot = (robot) => dispatch => {
    dispatch({ type: ADD_SELECTED_ROBOT, payload: robot });
}  
export const removeSelectedRobot = (id) => dispatch => {
    dispatch({ type: REMOVE_SELECTED_ROBOT, payload: id });
}  