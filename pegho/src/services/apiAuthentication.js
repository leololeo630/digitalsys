import axios from 'axios';


const URL_API = 'http://127.0.0.1:8000';

const apiAuthentication = {
    apiLogin: async (username, password) => {
        try{
        const response = await axios.post(`${URL_API}/api/token/`, {username, password})
        localStorage.setItem('access_token', response.data.access)
        return response.data
        }catch(e){
            console.log(e)
        }
    }
}
export default apiAuthentication