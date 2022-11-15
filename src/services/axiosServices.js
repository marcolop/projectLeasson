import axios from 'axios';
import _ from 'lodash';

export const userRegister = async (data) => {
    const response = axios
        .post('https://ofthislesson-production.up.railway.app/auth/register', data)
        .then((res) => res.data)
        .catch((err) => err.response.data)
    return response
};

export const userLogin = async (data) => {
    const response = axios
        .post('https://ofthislesson-production.up.railway.app/auth/login', data)
        .then((res) => res.data)
        .catch((err) => err.response.data)
    return response
};

export const getAllCompaniesName = async (setCompanies) => {
    const response = axios
        .get(`https://ofthislesson-production.up.railway.app/api/companyt`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            setCompanies(res.data)
            return res.data
        })
        .catch((err) => err.data);
    return response
};

export const getAllUsers = async (setUserArray) => {
    const response = axios
        .get(`https://ofthislesson-production.up.railway.app/api/user`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            setUserArray(res.data)
            return res.data
        })
        .catch((err) => err.data);
    return response
};