import { combineReducers } from "redux";
import {
    ADD_SELECTED_ROBOT,
    REMOVE_SELECTED_ROBOT,
    EDIT_ROBOT,
    FETCH_ROBOTS,
    FETCH_ROBOTS_ERROR,
    SET_SELECTED_ROBOTS
} from "./constants";

const initState = {
    robots: [],
    fetchError: "",
    selectedRobots: []
}

const robotReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_ROBOTS:
            return { ...state, robots: action.payload, fetchError: "" };
        case FETCH_ROBOTS_ERROR:
            return { ...state, fetchError: "Something went wrong. Please try again later" };
        case EDIT_ROBOT:
            return {
                ...state, robots: state.robots.map(r => {
                    return r.id === action.payload.id ? action.payload : r
                })
            };
        case SET_SELECTED_ROBOTS:
            return { ...state, selectedRobots: action.payload };
        case ADD_SELECTED_ROBOT:
            return { ...state, selectedRobots: [...state.selectedRobots, action.payload] };
        case REMOVE_SELECTED_ROBOT: {
            const found = state.selectedRobots.filter(r => r.id === action.payload)
            let res = [];
            if (found.length > 1) {
                found.pop();
                res = [...state.selectedRobots.filter(r => r.id !== action.payload), ...found];
            } else res = state.selectedRobots.filter(r => r.id !== action.payload);
            return { ...state, selectedRobots: res };
        }
        default:
            return state;
    }
}

const rootreducer = combineReducers({
    robotsState: robotReducer
})

export default rootreducer;