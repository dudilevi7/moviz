import { Typography } from '@mui/material'
import React from 'react'
import useStyles from './Header.css'
import '@fontsource/roboto/500.css';
import movie from '../../assests/movie.png'

const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Typography className={classes.title} variant="h1">Moviz</Typography>
            <img className = {classes.movieImg} src={movie} alt="movie"/>
        </div>
    )
}
export default Header
