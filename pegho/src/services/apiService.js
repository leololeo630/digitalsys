import axios from 'axios';

const URL_API = 'http://127.0.0.1:8000';

const auth = () => {
    const token = localStorage.getItem('access_token');
    console.log("Token:", token);
    return {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
};



const apiService = {
    apiDadosPessoais: async (dadosPessoais) => {
        const response = await axios.post(`${URL_API}/dadospessoais/`, dadosPessoais, auth());
        return response.data;
    },
    apiContato: async (contato, dadosPessoaisId) => {
        const response = await axios.post(`${URL_API}/contato/`, {...contato, dados_pessoais: dadosPessoaisId}, auth())
        return response.data
    },
    apiExpProfissional: async (expProfissional, dadosPessoaisId) => {
        const response = await axios.post(`${URL_API}/expProfissional/`, {...expProfissional, dados_pessoais: dadosPessoaisId}, auth())
        return response.data
    },
    apiExpAcademica: async (expAcademica, dadosPessoaisId) => {
        const response = await axios.post(`${URL_API}/expAcademica/`, {...expAcademica, dados_pessoais: dadosPessoaisId}, auth())
        return response.data
    },
}

export default apiService