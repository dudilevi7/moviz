import { createUseStyles } from 'react-jss';
import { COLORS } from '../../consts';

const useStyles = createUseStyles({
    container: {
        margin: '10px auto',
        height: '80vh'
    },
    loader: {
        padding: '10px',
        color: COLORS.third,
        borderRadius: '5px',
    },
})
export default useStyles