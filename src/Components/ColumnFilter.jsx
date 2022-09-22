import React from "react";

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <div>
      <label htmlFor="">Search : </label>
      <input
        type="text"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
        style={{ color: "black" }}
      />
    </div>
  );
};

export default ColumnFilter;
