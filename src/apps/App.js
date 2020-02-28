import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ScrollList from '../common/ScrollList';


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li className="list-group-item">
              <Link to="/" className="text-info">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <div className="px-5">
              <ScrollList />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>

  )
};

export default App;