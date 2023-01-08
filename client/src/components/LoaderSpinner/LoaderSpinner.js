import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import useStyles from "./LoaderSpinner.css";
import { Typography } from "@mui/material";
import '@fontsource/roboto/500.css';

const LoaderSpinner = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <CircularProgress color="primary" size="50px" />
            <Typography className={classes.loader} variant="h6">Loading...</Typography>
        </div>
    )
}

export default LoaderSpinner