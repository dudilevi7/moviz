import { Typography } from '@mui/material'
import React from 'react';
import davidLogo from '../assests/david.png'
import useStyles from './Copyright.css';

const YEAR = new Date().getFullYear()

const Copyright = () => {
    const classes = useStyles();
    return (
            <div className={classes.container}>
                <Typography variant="body2" align="center" color='white'> {`Copyright  © ${YEAR} .`}&nbsp;</Typography>
                <img className={classes.img} src={davidLogo} alt="davidlevi website" onClick={() => window.open("https://davidlevi.netlify.app/")} />
            </div>
    );
}
export default Copyright;