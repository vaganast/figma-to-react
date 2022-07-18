import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';
import { Typography } from '@mui/material';
import { styles } from './styles'



const rows = [
  { idTable: 1, project: 'MasterCard', class: 'None', approver: 'Darell Steward', team: 'All Employees' },
  { idTable: 2, project: 'The Walt Disney Company', class: 'None', approver: 'Bessle Cooper', team: 'All Employees' },
  { idTable: 3, project: 'MasterCard', class: 'None', approver: 'Cody Fisher', team: 'All Employees' },
  { idTable: 4, project: 'Pizza Hut', class: 'None', approver: 'Cameron Williamson', team: 'All Employees' },
  { idTable: 5, project: 'Jonshon & Jonshon', class: 'None', approver: 'Theresa Webb', team: 'All Employees' },
  { idTable: 6, project: 'McDonalds', class: 'None', approver: 'Kathryn Murphy', team: 'All Employees' },
  { idTable: 7, project: 'The Walt Disney Company', class: 'None', approver: 'Jacob Jones', team: 'All Employees' },
  { idTable: 8, project: 'Facebook', class: 'None', approver: 'Brooklyn Simmons', team: 'All Employees' },
  { idTable: 9, project: 'Louis Vuitton', class: 'None', approver: 'Leslie Alexander', team: 'All Employees' },
  ];


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'project',
    numeric: false,
    disablePadding: true,
    label: 'CUSTOMER:PROJECT',
  },  
  {
    id: 'class',
    numeric: true,
    disablePadding: false,
    label: 'CLASS',
  },
  {
    id: 'approver',
    numeric: false,
    disablePadding: false,
    label: 'APPROVER',
  },
  {
    id: 'team',
    numeric: false,
    disablePadding: false,
    label: 'TEAM',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" sx={{borderBottom:'2px solid #F5F5F5'}}>
          <Checkbox
            color="default"
            //indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            size="small"
            inputProps={{
              'aria-label': 'select all projects',
            }}
             />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{borderBottom:'2px solid #F5F5F5', fontSize:'9px', fontWeight:700, color:'#202020', lineHeight:'11px', textTransform:'uppercase', paddingRight:'8px'}}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


   
  


export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };



  

 

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) - rows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, boxShadow: 'none'}}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rows.length, page * rows.length + rows.length)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.idTable);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.idTable)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.idTable}
                      selected={isItemSelected}
                      sx={{
                        "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: "#F9F6ED"
                        },
                        "&&:hover": {
                          backgroundColor: "#F9F6ED"
                        }
                    }}
                    >
                      <TableCell padding="checkbox" sx={{borderBottom:'2px solid #F5F5F5'}}>
                        <Checkbox
                        size="small"
                          sx={{
                            color: '#DEDEDE',
                            '&.Mui-checked': {
                              color: '#8A826A'
                            }
                          }}
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="left"                       
                        sx={styles} >    
                         <Typography variant='tableRows'>
                          {row.project}
                          </Typography>
                      </TableCell>

                      <TableCell align="center" 
                      sx={{paddingLeft:'0px', width:'17%', borderBottom:'2px solid #F5F5F5'}}>
                        <Typography variant='tableRows'> 
                          {row.class} 
                        </Typography>
                      </TableCell>
                        
                      <TableCell align="left" 
                        sx={{width:'15%', borderBottom:'2px solid #F5F5F5'}}>
                         <Typography variant='tableRows'> 
                           {row.approver} 
                         </Typography>
                      </TableCell>

                      <TableCell align="left" 
                      sx={{width:'18%', borderBottom:'2px solid #F5F5F5'}}>
                       <Typography variant='tableRows'> 
                          {row.team}
                       </Typography> 
                      </TableCell>

                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>        
      </Paper>
      
    </Box>
  );
}
