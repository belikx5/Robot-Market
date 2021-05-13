import * as React from 'react';
import { Provider } from "react-redux";
import store from "./store"
import Navbar from './components/Navbar';
import RobotsList from './components/RobotsList';

function App() {
  return (
    <Provider store={store}>
        <Navbar>
         <RobotsList />
        </Navbar>
    </Provider>

  );
}

export default App;
