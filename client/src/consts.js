const {
    REACT_APP_MOVIZ_API_SERVER: MOVIZ_API_SERVER,
} = process.env

const COLORS = {
    primary: '#0079ED',
    secondary: '#ffffff',
    third: 'whitesmoke',
    lightBlack: '#090909',
}
const ERR_MSG = 'Oops! something goes wrong...'
export {
    MOVIZ_API_SERVER,
    COLORS,
    ERR_MSG,
}