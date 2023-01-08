import React from "react"
import { ERR_MSG } from "../../consts"
import useStyles from "./ErrorPage.css"

const ErrorPage = () => {
    const classes = useStyles()
    return (
        <div className = {classes.container}>
            <h2 className={classes.errTitle}>Error Message!</h2>
            <div className={classes.errAlert}>
                <strong>{ERR_MSG}</strong>
            </div>
        </div> 
    )
}

export default ErrorPage