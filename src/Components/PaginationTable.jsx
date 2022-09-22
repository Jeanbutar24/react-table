import React, { useMemo } from "react";
import "./style.css";
import { GROUPED_COLUMNS } from "./Columns";
import MOCK_DATA from "../mockData/MOCK_DATA.json";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
  useFilters,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
export const PaginationTable = () => {
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    nextPage,
    previousPage,
    footerGroups,
    gotoPage,
    pageCount,
    setPageSize,
    pageOptions,
    canPreviousPage,
    canNextPage,
    state,
    page,
    setGlobalFilter,
  } = tableInstance;
  const { globalFilter, pageIndex, pageSize } = state;
  return (
    <div className="flex flex-col items-center">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}> {cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-3">
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span className="ml-12 w-14 border-rose-100 p-2">
          | <span className="ml-4">Go to page: </span>
          <input
            type="text"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            className="bg-transparent w-12 "
          />
        </span>
        <select value={pageSize} onChange={(e) => setPageSize(e.target.value)}>
          {[10, 30, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="bg-slate-700 text-white p-2 m-2"
        >
          {"<<"}{" "}
        </button>
        <button
          onClick={() => previousPage()}
          className="bg-slate-700 text-white p-2 m-2"
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          onClick={() => nextPage()}
          className="bg-slate-700 text-white p-2 m-2"
          disabled={!canNextPage}
        >
          Next
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="bg-slate-700 text-white p-2 m-2"
        >
          {">>"}{" "}
        </button>
      </div>
    </div>
  );
};
