import { format } from "date-fns";
import ColumnFilter from "./ColumnFilter";
export const Columns = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    Filter: ColumnFilter,
  },
  {
    Header: "Date Of Birth",
    Footer: "Date Of Birth",
    accessor: "date_of_birt",
    Filter: ColumnFilter,
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    Filter: ColumnFilter,
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: ColumnFilter,
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
        Filter: ColumnFilter,
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date Of Birth",
        Footer: "Date Of Birth",
        accessor: "date_of_birt",
        Cell: ({ value }) => {
          return format(new Date(value), "dd/MM/yyyy");
        },
        Filter: ColumnFilter,
      },
      {
        Header: "Country",
        Footer: "Country",
        accessor: "country",
        Filter: ColumnFilter,
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
        Filter: ColumnFilter,
      },
    ],
  },
];
