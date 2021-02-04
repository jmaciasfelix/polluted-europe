import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
//wouter
import { useLocation } from "wouter";
//hooks
import { useLocalStorage } from "../../hooks/useLocalStorage";
//ReactTable
import { useTable, useSortBy } from "react-table";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

export const Table = ({ pollutedCities }) => {
  const [location, setLocation] = useLocation();
  const [localStorage, setLocalStorage] = useLocalStorage();
  const columns = React.useMemo(
    () => [
      {
        Header: "Rank",
        accessor: "rank",
      },
      {
        Header: "Cities",
        accessor: "city",
      },
      {
        Header: "Index polluted",
        accessor: "pollutionIndex",
      },
    ],
    []
  );
  const data = React.useMemo(() => pollutedCities, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const selectCity = (city, pollutionIndex, coordinate) => {
    const nameCity = city.replaceAll(",", "_");
    setLocalStorage(nameCity, { pollutionIndex, coordinate });
    setLocation(`map/${nameCity}`);
  };

  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    onClick={() =>
                      selectCity(
                        cell.row.original.city,
                        cell.row.original.pollutionIndex,
                        cell.row.original.coordinate
                      )
                    }
                    key={cell.row.original.city}
                    {...cell.getCellProps()}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
};

//Note see https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/filtering
