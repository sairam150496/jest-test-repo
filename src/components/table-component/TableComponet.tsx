import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ITableInputProps } from "../interfaces";
import { Button, IconButton } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export const TableComponent = (props: ITableInputProps) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
              <StyledTableCell align="right">User Id</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows &&
              Array.from(props.rows).map(([id, row], idx) => (
                <StyledTableRow key={id}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.phoneNumber}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.userId}</StyledTableCell>
                  <StyledTableCell align="right">{row.email}</StyledTableCell>
                  <IconButton
                    color="secondary"
                    data-idx={`delete-${idx}`}
                    id={`delete_${id}`}
                    onClick={props.onDeleteClick}
                  >
                    <Delete id={`delete_${id}`} />
                  </IconButton>
                  <IconButton
                    color="primary"
                    data-idx={`edit-${idx}`}
                    id={`edit_${id}`}
                    onClick={props.onEditClick}
                  >
                    <Edit id={`edit_${id}`} />
                  </IconButton>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Button
        color="primary"
        variant="contained"
        data-add-btn={"add-button"}
        onClick={props.onAddClick}
      >
        Add
      </Button>
    </>
  );
};
