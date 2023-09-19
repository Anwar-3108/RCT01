import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

import RestaurantList from "./components/RestaurantList";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";

function App() {
  return (
    <>
      <div>
        <Router>
          <ul>
            <li>
              <Link to="/">List</Link>{" "}
            </li>
            <li>
              <Link to="/create">Create</Link>{" "}
            </li>
            <li>
              <Link to="/details">Details</Link>{" "}
            </li>
            <li>
              <Link to="/update">Update</Link>{" "}
            </li>
            <li>
              <Link to="/search">Search</Link>{" "}
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<RestaurantList />} />
            <Route path="/create" element={<RestaurantCreate />} />
            <Route path="/details" element={<RestaurantDetail />} />
            <Route path="/update" element={<RestaurantUpdate />} />
            <Route path="/update" element={<RestaurantUpdate />} />
            <Route path="/search" element={<RestaurantSearch />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
