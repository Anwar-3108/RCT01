import React from "react";

const AddUsers = () => {
  return (
    <>
      <div className="add-user">
        <input
          className="add-user-input"
          type="text"
          placeholder="Add New User"
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
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddUsers;
