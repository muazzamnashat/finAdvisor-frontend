import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
// import Page from "src/components/Page";
import Profile from "../components/Profile";
import ProfileDetails from "../components/ProfileDetails";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Account = (props) => {
  //   const classes = useStyles();

  return (
    // <Page className={classes.root} title="Account">
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <Profile user={props.user} />
        </Grid>
        <Grid item lg={8} md={6} xs={12}>
          <ProfileDetails user={props.user} />
        </Grid>
      </Grid>
    </Container>
    // </Page>
  );
};
const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Account);