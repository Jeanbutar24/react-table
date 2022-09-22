import React from "react";
import { BasicTable } from "./Components/BasicTable";
import { FilteringTable } from "./Components/FilteringTable";
import { PaginationTable } from "./Components/PaginationTable";
import { SortingTable } from "./Components/SortingTable";

const App = () => {
  return (
    <div>
      <PaginationTable />
    </div>
  );
};

export default App;
