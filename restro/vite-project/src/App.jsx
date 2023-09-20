import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

import RestaurantList from "./components/RestaurantList";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar />
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
