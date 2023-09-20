import React, { useEffect, useState } from "react";
import SpinnerComp from "./Spinner";
import CardCopm from "./CardComp";
const RestaurantList = () => {
  const [data, setData] = useState({
    list: null,
  });

  const [loading, setLoading] = useState(true);

  const getApiData = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/restaurant");
      const apidata = await res.json();
      setData({ list: apidata });
      console.log(apidata);
      setLoading(false);
    } catch (error) {
      console.log("error while fetching data from api", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <div>RestaurantList</div>
      {loading ? (
        <SpinnerComp />
      ) : (

<div   style={{display:"grid", gridTemplateColumns:'repeat(4,1fr)', gap:'2%'}}>{ data?.list?.map((e, i) => {
          return (
            // <h1 key={i}>{e.name}</h1>
         
              <CardCopm {...e}  key={i} />
           
          );
        })}  </div>
        
       
      )}
    </>
  );
};

export default RestaurantList;
