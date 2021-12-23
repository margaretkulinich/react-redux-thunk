import NavComponent from "./components/NavComponent/NavComponent";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Users } from "./components/Users/Users";
import { AddUser } from "./components/AddUsers/AddUser";
import { Tweets } from "./components/Tweets/Tweets";
import { AddTweets } from "./components/AddTweets/AddTweets";

import './App.css';

function App() {
  return (
      <Router>
      <NavComponent />
      <div className="routes-container">
        <Routes>
          <Route path='/users' element={<Users/>} />
          <Route exact path='/addUser' element={<AddUser />} />
          <Route exact path='/tweets' element={<Tweets />} />
          <Route exact path='/addTweet' element={<AddTweets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
