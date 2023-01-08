import { createTheme } from '@mui/material/styles';
import { COLORS } from '../../consts';

const createMuiTheme = (bgcolor , color) =>
    createTheme({
        components: {
            MUIDataTableToolbar: {
                styleOverrides:{
                    root: {
                        backgroundColor: bgcolor,
                    },
                    titleRoot: {
                        textAlign: 'left',
                        color: color,
                        '&:hover': {
                            color: COLORS.lightBlack
                        },
                    },
                }
            },
            MUIDataTable: {
                styleOverrides: {
                    root: {
                        margin: '10px 30px',
                    }
                }
            },
            MuiTable: {
                styleOverrides: {
                    root: {
                        animation: '2s animLineUp ease-out 1'
                    }
                }
            }
        },
    });
export default createMuiTheme