import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <label>Search :</label>
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default GlobalFilter;
