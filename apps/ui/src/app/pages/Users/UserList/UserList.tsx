import { User } from '@org/types';
import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import { Button } from '../../../components/Button/Button';

type UserListProps = {
  users: User[];
};

export const UserList: React.FC<UserListProps> = ({ users }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        Header: 'Actions',
        Cell: (a) => {
          return (
            <Button
              onClick={() =>
                window.open(a.row.original.photo.location, '_blank')
              }
            >
              View photo
            </Button>
          );
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: users });

  return (
    <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <StyledCell {...column.getHeaderProps()}>
                {column.render('Header')}
              </StyledCell>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <StyledRow {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <StyledCell {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </StyledCell>
                );
              })}
            </StyledRow>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

const StyledTable = styled.table`
  border-spacing: 0;
  border: 1px solid black;
`;

const StyledCell = styled.td`
  margin: 0;
  padding: 0.5rem;
  border-bottom: 1px solid black;
  border-right: 1px solid black;

  :last-child {
    border-right: 0;
  }
`;

const StyledRow = styled.tr`
  :last-child {
    td {
      border-bottom: 0;
    }
  }
`;
