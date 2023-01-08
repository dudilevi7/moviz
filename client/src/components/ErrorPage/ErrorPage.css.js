import { createUseStyles } from 'react-jss';
import { COLORS } from '../../consts';

const useStyles = createUseStyles({
    container: {
        margin: '10px auto',
        height: '80vh'
    },
    errTitle: {
        color: COLORS.secondary
    },
    errAlert: {
        padding: '20px',
        backgroundColor: '#f44336',
        color: 'white',
    },
})

export default useStyles