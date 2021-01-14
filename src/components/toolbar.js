import React, { useState } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../actions/fetchTransactions";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
} from "@material-ui/core";
import { Search as SearchIcon } from "react-feather";
import TransactionForm from "./transactionForm";

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
}));

const Toolbar = ({ className, ...rest }) => {
  const [showForm, setShowForm] = useState(false);
  const classes = useStyles();

  const form = () => {
    return <TransactionForm setShowForm={setShowForm} />;
  };

  // debugger
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box display="flex" justifyContent="flex-end">
        <Button className={classes.importButton}>Import</Button>
        <Button className={classes.exportButton}>Export</Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => setShowForm(!showForm)}
        >
          Add transaction
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search transaction"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
      {showForm ? form() : null}
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTransaction: (data) => dispatch(addTransaction(data)),
  };
};
export default connect(null, mapDispatchToProps)(Toolbar);
