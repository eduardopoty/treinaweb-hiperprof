import axios from 'axios';

export const ApiService = axios.create({
    baseURL: "https://alunos.treinaweb.com.br/hyperfprof",
    headers: {
        "Content-Type": "application/json",
        "Accept-Language": "pt-BR",
    },
})