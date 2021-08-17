import React from 'react';
import Todos from './views/Todos'
import Home from './views/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
  
function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                        <Home />
                </Route>

                <Route path="/todos">
                        <Todos />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
