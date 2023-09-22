import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { useState } from "react";
import RestaurantList from "./components/RestaurantList";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import NavBar from "./components/Navbar";
import ErrorComp from "./components/ErrorComp";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    list: null,
  });
  const getApiData = async (query) => {
    console.log(query);
    if (query === undefined) {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:3000/restaurant`);
        const apidata = await res.json();
        setData({ list: apidata });
        console.log(apidata);
        setLoading(false);
      } catch (error) {
        console.log("error while fetching data from api", error);
      }
    } else {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:3000/restaurant?q=${query}`);
        const apidata = await res.json();
        setData({ list: apidata });
        console.log(apidata);
        setLoading(false);
      } catch (error) {
        console.log("error while fetching data from api", error);
        
      }
    }
  };

  return (
    <>
      <div>
        <Router>
          <NavBar getApiData={getApiData} />
          <Routes>
            <Route
              path="/"
              element={
                <RestaurantList
                  getApiData={getApiData}
                  loading={loading}
                  setLoading={setLoading}
                  data={data}
                  key={'11'}
                />
              }
            />
            <Route key={'12'} path="/create" element={<RestaurantCreate />} />
            <Route key={'13'} path="/details" element={<RestaurantDetail />} />
            <Route key={'14'} path="/update" element={<RestaurantUpdate />} />
            <Route key={'15'} path="/update/:id" element={<RestaurantUpdate />} />
            <Route key={'16'} path="/search" element={<RestaurantSearch />} />
            <Route  path="*" element={<ErrorComp />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
