import { Grid, IconButton, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

const useStyles = makeStyles(theme => ({
  root: {
    height: theme.spacing(8),
    justifyContent: "flex-start",
    alignItems: "center",
    display: "flex",
    cursor: "pointer",
    margin: "0.5rem",
    "&:hover": {}
  },
  flex: {
    display: "flex",
    flexDirection: "row"
  },
  iconDiv: {
    padding: theme.spacing(1)
  },
  title: {
    fontWeight: "normal",
    fontSize: theme.spacing(2)
  },
  description: {
    fontSize: theme.spacing(1.5)
  }
}));

function NewCodelabz({ setVisibleModal }) {
  const classes = useStyles();

  return (
    <React.Fragment>
<<<<<<< HEAD
      <Paper className={classes.root}>
=======
      <Paper className={classes.root} data-testId="homepageNewCodelabz">
>>>>>>> b6555d85dc58e8f59e64cb6afe932538d9b24b00
        <Grid
          spacing={0}
          justifyContent="flex-start"
          alignItems="center"
          className={classes.flex}
        >
          <Grid
            item
            className={classes.iconDiv}
            justifyContent="center"
            alignContent="center"
<<<<<<< HEAD
=======
            data-testId="NewCodelabzBtn"
>>>>>>> b6555d85dc58e8f59e64cb6afe932538d9b24b00
            onClick={() => setVisibleModal(true)}
          >
            <AddBoxRoundedIcon color="primary" fontSize="large" />
          </Grid>
          <Grid item container sm={9} direction="column">
            <Typography variant="h6" className={classes.title}>
              New Codelabz
            </Typography>
            <Typography variant="body2" className={classes.description}>
              Share a tutorial
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

export default NewCodelabz;
