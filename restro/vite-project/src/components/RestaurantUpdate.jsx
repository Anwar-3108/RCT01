import React, { memo } from "react";
import { json, useParams } from "react-router-dom";
import { useState } from "react";

const RestaurantUpdate = () => {
  const { id } = useParams();  

  const [leData, setData] = useState({
    name: null,
    email: null,
    rating: null,
    address: null,
    image: null,
  });

  const update = (event) => {
    event.preventDefault();
    try {
      fetch(`http://localhost:3000/restaurant/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leData),
      });

      console.log({ leData });

      alert("Card Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>RestaurantUpdate</div>
      <form onSubmit={update}>
        <input
          required
          type="text"
          placeholder="name"
          onChange={(event) => {
            setData({ ...leData, name: event.target.value });
          }}
        />{" "}
        <br />
        <input
          required
          type="email"
          placeholder="email"
          onChange={(event) => {
            setData({ ...leData, email: event.target.value });
          }}
        />{" "}
        <br />
        <input
          required
          type="number"
          placeholder="rating"
          onChange={(event) => {
            setData({ ...leData, rating: event.target.value });
          }}
        />{" "}
        <br />
        <input
          required
          type="text"
          placeholder="address"
          onChange={(event) => {
            setData({ ...leData, address: event.target.value });
          }}
        />{" "}
        <br />
        <input
          required
          type="url"
          placeholder="Image url"
          onChange={(event) => {
            setData({ ...leData, image: event.target.value });
          }}
        />{" "}
        <br />
        <input type="submit" value="ADD" />
      </form>
    </>
  );
};

export default memo(RestaurantUpdate);
