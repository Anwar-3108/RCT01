"use client";

import { removeUser } from "@/redux/slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const DisplayUsers = () => {
  const userData = useSelector((data) => data.users);
  console.log("userData", userData);
  const dispatch= useDispatch()

  return (
    <>
      <div className=""  style={{overflow:'scroll', border:'2px solid black'}} >
        <h1>DisplayUsers</h1>
        {userData.map((elem, idx) => {
          return  <div   > <p key={idx}>{elem.name}</p> 
          <button onClick={()=>dispatch(removeUser(elem.idx))} >remove</button>
          
           </div> ;
        })}
      </div>
    </>
  );
};

export default DisplayUsers;
