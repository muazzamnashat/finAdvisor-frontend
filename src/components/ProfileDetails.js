import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { updateUser } from "../actions/userActions";
import { connect } from "react-redux";

// const useStyles = makeStyles(() => ({
//   root: {},
// }));

class ProfileDetails extends React.Component {
  //   const classes = useStyles();
  state = {
    first_name: this.props.user.first_name,
    last_name: this.props.user.last_name,
    email: this.props.user.email,
    income: this.props.user.income,
    age: this.props.user.age,
    gender: this.props.user.gender,
  };

  handleChange(event) {
    this.setState((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // debugger;
    this.props.updateUser(this.state);
  }
  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <Card>
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label="First name"
                  name="first_name"
                  onChange={(event) => this.handleChange(event)}
                  required
                  value={this.state.first_name}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="last_name"
                  onChange={(event) => this.handleChange(event)}
                  value={this.state.last_name}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={(event) => this.handleChange(event)}
                  value={this.state.email}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Income"
                  name="income"
                  onChange={(event) => this.handleChange(event)}
                  type="number"
                  value={this.state.income}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Age"
                  name="age"
                  onChange={(event) => this.handleChange(event)}
                  type="number"
                  value={this.state.age}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  fullWidth
                  label="Gender"
                  name="gender"
                  onChange={(event) => this.handleChange(event)}
                  value={this.state.gender}
                  variant="outlined"
                ></TextField>
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <Box display="flex" justifyContent="flex-end" p={2}>
            <Button color="primary" variant="contained" type="submit">
              Save details
            </Button>
          </Box>
        </Card>
      </form>
    );
  }
}

// ProfileDetails.propTypes = {
//   className: PropTypes.string,
// };

export default connect(null, { updateUser })(ProfileDetails);
