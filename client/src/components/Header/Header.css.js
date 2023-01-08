import { createUseStyles } from 'react-jss';
import { COLORS } from '../../consts';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto 0px'
  },
  title: {
    color: COLORS.primary,
    textShadow: `3px 3px ${COLORS.secondary}`,
    animation: '3s animflipX ease 1',
    '&:hover': {
      color: COLORS.third,
    }
  },
  movieImg: {
    margin: '0px 20px',
    maxWidth: '80px',
    animation: 'fade 2s ease forwards',
    transform: 'maxWidth 1s',
    '&:hover' :{
      maxWidth: '85px'
    }
  },
  '@global': {
    '@keyframes animflipX': {
      '0%': {
        opacity: 0,
        transform: "rotateX(90deg)"
      },
      '50%': {
        opacity: 1,
        transform: 'rotateX(720deg)'
      },
      '100%': {
        opacity: 1,
        transform: 'rotateX(720deg)'
      }
    },
    '@keyframes animLineUp': {
      '0%': {
        opacity: 0,
        transform: "translateY(50%)"
      },
      '20%': {
        opacity: 0,
      },
      '50%': {
        opacity: 1,
        transform: 'translateY(0%)'
      },
      '100%': {
        opacity: 1,
        transform: 'translateY(0%)'
      }
    },
    '@keyframes fade': {
      from: { opacity: 0 },
      to: { opacity: 1 }
    },
  }
})
export default useStyles