import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
//ReactTable
import { useTable, useSortBy, useFilters } from "react-table";
import { columnsTable } from "src/constant/columns";

const Container = styled.div`
  max-width: 100vw;
  overflow-x: auto;
  border-radius: 8px;
  border: 2px solid #111;
  box-shadow: rgb(210, 239, 253) 14px 14px;
  margin-bottom: 4rem;
`;

const TableStyle = styled.table`
  background: #fafafa;
  font-size: 0.8rem;
  /* max-width: 1000px; */
  width: 100%;
  th {
    border-bottom: 2px solid #555;
    border-right: 1px solid #ccc;
    padding: 4px;
  }
  tr {
    background: #fff;
  }
  tbody > tr > td {
    border-right: 1px solid #eee;
    text-align: right;
    padding: 4px 12px 4px;
  }
  tbody > tr > td:first-child {
    font-weight: bold;
  }
  tbody > tr > td:last-child {
    border-right: 0;
  }
  thead tr {
    border-bottom: 1px solid #333;
  }
  thead th:hover {
    background-color: #caeeff;
  }
  tbody tr:hover {
    background-color: #6cd0ff;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    tr td:first-child {
      text-align: center;
    }

    /* tr th {
      display: none;
    } */
  }
`;

const Cell = styled.td`
  span {
    display: block;
    text-align: center;
    margin-bottom: 5px;
  }
`;

export const Table = ({ pollutedCities, selectCity }) => {
  const columns = React.useMemo(() => columnsTable, []);
  const data = React.useMemo(() => pollutedCities, [pollutedCities]);

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
    useFilters,
    useSortBy
  );

  return (
    <Container>
      <TableStyle {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <div>
                    {column.canFilter ? column.render("Filter") : "null"}
                  </div>
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
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Cell
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
                  </Cell>
                ))}
              </tr>
            );
          })}
        </tbody>
      </TableStyle>
    </Container>
  );
};

Table.propTypes = {
  selectCity: PropTypes.func.isRequired,
  pollutedCities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      pollutionIndex: PropTypes.number.isRequired,
      coordinate: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
      rank: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
