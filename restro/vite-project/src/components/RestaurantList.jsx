import React, { memo, useEffect, useState } from "react";
import SpinnerComp from "./Spinner";
import CardCopm from "./CardComp";
const RestaurantList = ({getApiData,loading,setLoading, data}) => {




  

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
         
              <CardCopm {...e}  key={i} getApiData={getApiData} />
           
          );
        })}  </div>
        
       
      )}
    </>
  );
};

export default memo(RestaurantList);
