import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import clsx from "clsx";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Moment from "react-moment";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  depositContext: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Deposits() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const today = new Date();
  return (
    <React.Fragment>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Title>Total spending this month</Title>
          <Typography component="p" variant="h4">
            $3,024.00
          </Typography>
          <Typography color="textSecondary" className={classes.depositContext}>
            as of <Moment format="D MMM YYYY">{today}</Moment>
          </Typography>
          <div>
            <Link color="primary" href="#" onClick={preventDefault}>
              View balance
            </Link>
          </div>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
