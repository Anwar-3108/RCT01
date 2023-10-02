"use client";

import React, { useState } from "react";
import { addUser } from "@/redux/slice";
import { useDispatch } from "react-redux";
const AddUsers = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const userDispatch = () => {
    console.table(name);
    dispatch(addUser(name));
  };

  return (
    <>
      <div className="add-user">
        <input
          className="add-user-input"
          type="text"
          placeholder="Add New User"
          onChange={(e) => setName(e.target.value)}
        />
        <button
          style={{
            marginTop: "5px",
            padding: "2px  25px",
            borderRadius: "10px",
            border: "none",
            color: "white",
            background: "teal",
          }}
          onClick={userDispatch}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddUsers;
