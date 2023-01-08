import { createUseStyles } from 'react-jss';
import { COLORS } from '../consts';

const useStyles = createUseStyles(({
    container: {
        background: COLORS.lightBlack,
        position: 'sticky',
        bottom: '0px',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px 0px',
        textShadow: '1px 1px black'
    },
    img: {
        cursor: 'pointer',
        height: '42px',
        width: '160px'
    },
}))

export default useStyles