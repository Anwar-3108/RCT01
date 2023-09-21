import React, { useState } from "react";

const RestaurantCreate = () => {
  const [leData, setData] = useState({
    name: null,
    email: null,
    rating: null,
    address: null,
    image: null
  });

  const create = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leData),
    });

    console.log({ leData });
    alert('Item added successfully')
   
  };

  return (
    <>
      <div>RestaurantCreate</div>
      <form onSubmit={create}>
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
        />{" "} <br />
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

export default RestaurantCreate;
