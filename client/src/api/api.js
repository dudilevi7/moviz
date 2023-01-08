import axios from 'axios'
import { MOVIZ_API_SERVER } from '../consts';

const api  = async(path, options) => {
    try {
        const response = await axios({
            url: `${MOVIZ_API_SERVER}/api/v1/${path}`,
            ...options,
        })
        const { data } = response
        if (!data) throw new Error('no data returned')
        return data
    } catch (err) {
        return false
    }

}
export default api;