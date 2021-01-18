import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { connect } from "react-redux";
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
import TransactionForm from "./TransactionForm";

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
}));

const Toolbar = (props) => {
  const [showForm, setShowForm] = useState(false);

  const classes = useStyles();

  const form = () => {
    return <TransactionForm setShowForm={setShowForm} />;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(event.target.search.value);
  };

  const handleChange = (event) => {
    props.setKeyword(event.target.value);
  };

  return (
    <div className={clsx(classes.root)}>
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
              <form onSubmit={handleSubmit}>
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
                  name="search"
                  onChange={handleChange}
                />
              </form>
            </Box>
          </CardContent>
        </Card>
      </Box>
      {showForm ? form() : null}
    </div>
  );
};

// Toolbar.propTypes = {
//   className: PropTypes.string,
// };

const mapStateToProps = (state) => {
  return { transactions: state.transactions };
};

export default connect(mapStateToProps)(Toolbar);
